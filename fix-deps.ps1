# Script para resolver problemas de dependências
Write-Host "Removendo node_modules e lockfiles..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force apps/api/node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force apps/web/node_modules -ErrorAction SilentlyContinue
Remove-Item pnpm-lock.yaml -ErrorAction SilentlyContinue

Write-Host "Instalando dependências com pnpm..." -ForegroundColor Yellow
pnpm install --force

Write-Host "Verificando se os testes funcionam..." -ForegroundColor Yellow
cd apps/api
pnpm test --verbose
cd ../..

cd apps/web
pnpm test --verbose
cd ../..

Write-Host "Pronto! Dependências instaladas e testes verificados." -ForegroundColor Green
