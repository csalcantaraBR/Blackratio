// Teste minimalista que não depende de nada
console.log('Running minimal test...');

describe('Minimal Test', () => {
  it('should always pass', () => {
    expect(true).toBe(true);
  });

  it('should handle basic operations', () => {
    expect(1 + 1).toBe(2);
    expect('hello').toBe('hello');
    expect([1, 2, 3]).toHaveLength(3);
  });
});
