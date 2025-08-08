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

// Teste básico de array
describe('Array Test', () => {
  it('should handle array operations', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });
});
