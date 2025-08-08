require('../../../scripts/seed.ts');
require('ts-node').register({
  transpileOnly: true,
  compilerOptions: { module: 'commonjs', moduleResolution: 'node' },
});
require('../../scripts/seed.ts');
