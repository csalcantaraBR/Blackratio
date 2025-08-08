require('dotenv').config(); // carrega .env da raiz

require('ts-node').register({
  transpileOnly: true,
  compilerOptions: { module: 'commonjs', moduleResolution: 'node' },
});

// roda o seed (caminho relativo à raiz)
require('./scripts/seed.ts');
