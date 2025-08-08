// Teste básico JavaScript para o frontend
describe('Basic Frontend Test', () => {
  it('should pass basic math test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    expect('hello' + ' world').toBe('hello world');
  });

  it('should handle object operations', () => {
    const obj = { name: 'test', value: 42 };
    expect(obj.name).toBe('test');
    expect(obj.value).toBe(42);
  });
});
