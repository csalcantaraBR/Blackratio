Write-Host "🚀 Setting up BlackRatio v2 environment..." -ForegroundColor Green

# Create API .env file
Write-Host "📝 Creating API environment file..." -ForegroundColor Yellow
@"
# Database
DATABASE_URL="postgresql://tracker:tracker@localhost:5432/tracker?schema=public"

# JWT
JWT_SECRET="blackratio-dev-secret-key-change-in-production"

# Server
PORT=3000
FRONTEND_URL="http://localhost:3001"
"@ | Out-File -FilePath "apps/api/.env" -Encoding UTF8

# Create Web .env.local file
Write-Host "📝 Creating Web environment file..." -ForegroundColor Yellow
@"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
"@ | Out-File -FilePath "apps/web/.env.local" -Encoding UTF8

Write-Host "✅ Environment files created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Start the database: docker compose up -d"
Write-Host "2. Setup the database: cd apps/api && pnpm prisma:generate && pnpm prisma:push && pnpm seed"
Write-Host "3. Start the development servers: pnpm dev"
Write-Host ""
Write-Host "🎫 Demo credentials:" -ForegroundColor Cyan
Write-Host "Admin: admin@blackratio.dev / admin"
Write-Host "User 1: user1@example.com / user1"
Write-Host "User 2: user2@example.com / user2"
Write-Host ""
Write-Host "🎫 Invite codes: WELCOME2024, DEMO123" -ForegroundColor Cyan
