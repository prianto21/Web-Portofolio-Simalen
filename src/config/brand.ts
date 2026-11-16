export const BRAND_CONFIG = {
  brandName: 'SIMALEN',
  tagline: 'Rempah Asli dari Tanah Batak',
  englishIdentity: 'Taste of Batak Highlands',
  productName: 'Andaliman Bubuk Kering',
  origin: 'Dolok Sanggul, Humbang Hasundutan, Sumatera Utara, Indonesia',
  netWeight: '10 gram',
  composition: '100% Andaliman',
  // Konfigurasi nomor WhatsApp (format internasional tanpa tanda + atau 0 di depan, contoh: 6281234567890)
  whatsappNumber: '6281200000000',
  whatsappDisplay: '+62 812-0000-0000 (Placeholder — Sesuaikan Nomor Resmi)',
  defaultWhatsappMessage:
    'Halo SIMALEN, saya tertarik untuk memesan Andaliman Bubuk Kering. Mohon informasi harga dan cara pemesanannya.',
  // Konfigurasi media sosial & kontak (placeholder dapat disesuaikan)
  instagramHandle: '@simalen.id',
  instagramUrl: 'https://instagram.com/simalen.id',
  emailPlaceholder: 'halo@simalen.id',
  pricePlaceholder: 'Hubungi kami via WhatsApp untuk info harga terbaru',
} as const;

export const MEDIA_ASSETS = {
  packagingFull: '/assets/aistudio/image_95ee9295.png',
  andalimanMacro: '/src/assets/images/andaliman_harvest_closeup_1794838208956.jpg',
  batakHighlands: '/src/assets/images/batak_highlands_landscape_1794838209193.jpg',
  dishArsik: '/src/assets/images/dish_arsik_ikan_mas_1794838209006.jpg',
  dishSambal: '/src/assets/images/dish_sambal_andaliman_1794838209957.jpg',
  dishNaniura: '/src/assets/images/dish_naniura_batak_1794838209728.jpg',
  dishDaging: '/src/assets/images/dish_daging_andaliman_1794838210101.jpg',
} as const;

export function buildWhatsAppOrderUrl(customMessage?: string): string {
  const message = customMessage ?? BRAND_CONFIG.defaultWhatsappMessage;
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
