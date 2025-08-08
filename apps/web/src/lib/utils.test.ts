import { formatBytes, formatRatio, getRatioColor, formatDate, formatDateTime, cn } from './utils';

describe('Utils Functions', () => {
  describe('formatBytes', () => {
    it('should format bytes correctly', () => {
      expect(formatBytes(0)).toBe('0 Bytes');
      expect(formatBytes(1024)).toBe('1 KB');
      expect(formatBytes(1048576)).toBe('1 MB');
      expect(formatBytes(1073741824)).toBe('1 GB');
    });

    it('should handle decimal places', () => {
      expect(formatBytes(1536)).toBe('1.5 KB');
      expect(formatBytes(1572864)).toBe('1.5 MB');
    });
  });

  describe('formatRatio', () => {
    it('should format ratio correctly', () => {
      expect(formatRatio(100, 50)).toBe('2.00');
      expect(formatRatio(0, 100)).toBe('0.00');
      expect(formatRatio(100, 0)).toBe('∞');
    });

    it('should handle edge cases', () => {
      expect(formatRatio(0, 0)).toBe('0.00');
    });
  });

  describe('getRatioColor', () => {
    it('should return correct colors for different ratios', () => {
      expect(getRatioColor(0.5)).toBe('text-red-400');
      expect(getRatioColor(1.0)).toBe('text-yellow-400');
      expect(getRatioColor(2.0)).toBe('text-green-400');
    });
  });

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2023-01-01T10:00:00Z');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/Jan 1, 2023/);
    });
  });

  describe('formatDateTime', () => {
    it('should format datetime correctly', () => {
      const date = new Date('2023-01-01T10:00:00Z');
      const formatted = formatDateTime(date);
      expect(formatted).toMatch(/Jan 1, 2023.*10:00/);
    });
  });

  describe('cn (className utility)', () => {
    it('should merge class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      expect(cn('base', true && 'conditional')).toBe('base conditional');
      expect(cn('base', false && 'conditional')).toBe('base');
    });
  });
});
