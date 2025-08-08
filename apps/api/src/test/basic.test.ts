// Teste básico para verificar se o Jest funciona
describe('Basic Math Test', () => {
  it('should add two numbers correctly', () => {
    expect(2 + 2).toBe(4);
  });

  it('should multiply two numbers correctly', () => {
    expect(3 * 4).toBe(12);
  });
});

// Teste básico de string
describe('String Test', () => {
  it('should concatenate strings', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });
});
