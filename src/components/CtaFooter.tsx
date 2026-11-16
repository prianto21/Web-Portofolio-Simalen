import React from 'react';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, MEDIA_ASSETS, buildWhatsAppOrderUrl } from '../config/brand';
import { CroppedPackagingImage } from './ResilientImage';

export const CtaFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Conversion-Focused CTA & Contact Section */}
      <section
        id="kontak"
        className="bg-[#073B26] py-16 text-[#F6F0E3] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-5">
            <p className="font-serif italic text-xl text-[#D4AF62]">
              {BRAND_CONFIG.englishIdentity}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-5xl">
              Kenali Sensasi Rempah Asli Tanah Batak
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#F6F0E3]/85 sm:text-lg">
              Hadirkan aroma dan cita rasa khas Andaliman dalam setiap kreasi masakan
              Anda bersama SIMALEN.
            </p>

            <div className="pt-3">
              <a
                href={buildWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#D4AF62] px-8 py-4 text-sm font-semibold text-[#05291C] transition-colors duration-150 hover:bg-[#E6CA8A] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Pesan SIMALEN Sekarang</span>
              </a>
            </div>
          </div>

          {/* Configurable Contact Details */}
          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[#D4AF62]/20 pt-10 text-left sm:grid-cols-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF62]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Pemesanan</span>
              </div>
              <a
                href={buildWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#F6F0E3]/90 hover:text-[#D4AF62] transition-colors"
              >
                {BRAND_CONFIG.whatsappDisplay}
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF62]">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>Instagram</span>
              </div>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#F6F0E3]/90 hover:text-[#D4AF62] transition-colors"
              >
                {BRAND_CONFIG.instagramHandle} (Placeholder)
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF62]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Asal Produk</span>
              </div>
              <p className="text-sm text-[#F6F0E3]/90">
                Dolok Sanggul, Humbang Hasundutan, Sumatera Utara
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF62]/15 bg-[#05291C] py-12 text-[#F6F0E3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <CroppedPackagingImage
                  src={MEDIA_ASSETS.packagingFull}
                  alt="Logo SIMALEN"
                  crop={{ x0: 0.072, y0: 0.015, x1: 0.168, y1: 0.111 }}
                  className="h-10 w-10 rounded-full border border-[#D4AF62]/50 bg-[#05291C]"
                />
                <div>
                  <p className="font-serif text-lg font-semibold tracking-wider text-white">
                    SIMALEN – Taste of Batak Highlands
                  </p>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#F6F0E3]/75">
                Merayakan kekayaan rempah dan cita rasa autentik Tanah Batak.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF62]">
                Navigasi
              </h3>
              <ul className="space-y-2 text-sm text-[#F6F0E3]/80">
                <li>
                  <a href="#home" className="hover:text-[#D4AF62] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang-kami"
                    className="hover:text-[#D4AF62] transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#produk" className="hover:text-[#D4AF62] transition-colors">
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    href="#keunggulan"
                    className="hover:text-[#D4AF62] transition-colors"
                  >
                    Keunggulan
                  </a>
                </li>
                <li>
                  <a
                    href="#cara-penggunaan"
                    className="hover:text-[#D4AF62] transition-colors"
                  >
                    Cara Penggunaan
                  </a>
                </li>
              </ul>
            </div>

            {/* Product & Contact Column */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF62]">
                Informasi Produk & Kontak
              </h3>
              <ul className="space-y-2 text-sm text-[#F6F0E3]/80">
                <li>SIMALEN Andaliman Bubuk Kering</li>
                <li className="tabular-nums">Berat Bersih: 10 gram · 100% Andaliman</li>
                <li>Asal: Dolok Sanggul, Humbang Hasundutan</li>
                <li className="pt-1 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D4AF62] hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D4AF62] hover:underline"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`mailto:${BRAND_CONFIG.emailPlaceholder}`}
                    className="inline-flex items-center gap-1.5 text-[#D4AF62] hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#D4AF62]/15 pt-6 text-xs text-[#F6F0E3]/60 sm:flex-row">
            <p>© {currentYear} SIMALEN. Seluruh hak cipta dilindungi.</p>
            <p>Rempah Asli dari Tanah Batak</p>
          </div>
        </div>
      </footer>
    </>
  );
};
