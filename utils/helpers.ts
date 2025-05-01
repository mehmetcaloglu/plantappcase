/**
 * Metni belirli bir uzunlukta kesmek için yardımcı fonksiyon
 * @param text Kesilecek metin
 * @param length Maksimum uzunluk
 * @returns Kesilmiş metin
 */
export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Tarih formatını düzenleyen yardımcı fonksiyon
 * @param date Tarih objesi
 * @returns Formatlanmış tarih string'i
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}; 