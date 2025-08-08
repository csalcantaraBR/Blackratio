import { formatBytes, formatRatio, getRatioColor, formatDate, formatDateTime } from './utils';

describe('Utils', () => {
  describe('formatBytes', () => {
    it('should format bytes correctly', () => {
      expect(formatBytes(0)).toBe('0 B');
      expect(formatBytes(1024)).toBe('1 KB');
      expect(formatBytes(1024 * 1024)).toBe('1 MB');
      expect(formatBytes(1024 * 1024 * 1024)).toBe('1 GB');
      expect(formatBytes(1024 * 1024 * 1024 * 1024)).toBe('1 TB');
    });

    it('should handle decimal values', () => {
      expect(formatBytes(1500)).toBe('1.46 KB');
      expect(formatBytes(1500000)).toBe('1.43 MB');
    });
  });

  describe('formatRatio', () => {
    it('should format ratio correctly', () => {
      expect(formatRatio(0)).toBe('0.00');
      expect(formatRatio(1)).toBe('1.00');
      expect(formatRatio(1.5)).toBe('1.50');
      expect(formatRatio(0.123)).toBe('0.12');
    });
  });

  describe('getRatioColor', () => {
    it('should return correct colors for different ratios', () => {
      expect(getRatioColor(0.5)).toBe('text-red-500');
      expect(getRatioColor(0.8)).toBe('text-yellow-500');
      expect(getRatioColor(1.2)).toBe('text-green-500');
      expect(getRatioColor(2.0)).toBe('text-green-500');
    });
  });

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-01-15T10:30:00Z');
      expect(formatDate(date)).toBe('Jan 15, 2024');
    });
  });

  describe('formatDateTime', () => {
    it('should format date and time correctly', () => {
      const date = new Date('2024-01-15T10:30:00Z');
      expect(formatDateTime(date)).toBe('Jan 15, 2024 at 10:30 AM');
    });
  });
});
