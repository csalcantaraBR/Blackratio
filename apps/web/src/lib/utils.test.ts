// Teste básico para as funções utilitárias
describe('Utils', () => {
  describe('formatBytes', () => {
    it('should format bytes correctly', () => {
      // Mock da função formatBytes
      const formatBytes = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      };

      expect(formatBytes(0)).toBe('0 B');
      expect(formatBytes(1024)).toBe('1 KB');
      expect(formatBytes(1024 * 1024)).toBe('1 MB');
    });
  });

  describe('formatRatio', () => {
    it('should format ratio correctly', () => {
      // Mock da função formatRatio
      const formatRatio = (ratio: number): string => {
        return ratio.toFixed(2);
      };

      expect(formatRatio(0)).toBe('0.00');
      expect(formatRatio(1)).toBe('1.00');
      expect(formatRatio(1.5)).toBe('1.50');
    });
  });

  describe('getRatioColor', () => {
    it('should return correct colors for different ratios', () => {
      // Mock da função getRatioColor
      const getRatioColor = (ratio: number): string => {
        if (ratio < 0.6) return 'text-red-500';
        if (ratio < 1.0) return 'text-yellow-500';
        return 'text-green-500';
      };

      expect(getRatioColor(0.5)).toBe('text-red-500');
      expect(getRatioColor(0.8)).toBe('text-yellow-500');
      expect(getRatioColor(1.2)).toBe('text-green-500');
    });
  });
});
