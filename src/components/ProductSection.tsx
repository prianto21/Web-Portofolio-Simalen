import React, { useState } from 'react';
import { MessageCircle, Minus, Plus } from 'lucide-react';
import { BRAND_CONFIG, MEDIA_ASSETS, buildWhatsAppOrderUrl } from '../config/brand';
import { PRODUCT_SPECS } from '../data/simalenData';
import { CroppedPackagingImage, ResilientImage } from './ResilientImage';

type GalleryViewId = 'full' | 'front' | 'back' | 'texture';

interface GalleryOption {
  id: GalleryViewId;
  label: string;
  caption: string;
}

const GALLERY_OPTIONS: GalleryOption[] = [
  {
    id: 'full',
    label: 'Tampak Lengkap',
    caption: 'Kemasan resmi SIMALEN Andaliman Bubuk Kering (depan & belakang)',
  },
  {
    id: 'front',
    label: 'Kemasan Depan',
    caption: 'Tampak depan pouch dengan identitas asal Dolok Sanggul, Humbang Hasundutan',
  },
  {
    id: 'back',
    label: 'Kemasan Belakang',
    caption: 'Informasi komposisi 100% Andaliman, cara penyimpanan, dan saran penggunaan',
  },
  {
    id: 'texture',
    label: 'Tekstur Rempah',
    caption: 'Andaliman segar dan hasil gilingan bubuk kering halus siap pakai',
  },
];

export const ProductSection: React.FC = () => {
  const [activeView, setActiveView] = useState<GalleryViewId>('full');
  const [quantity, setQuantity] = useState<number>(1);

  const currentCaption =
    GALLERY_OPTIONS.find((item) => item.id === activeView)?.caption ?? '';

  const orderMessage =
    quantity === 1
      ? BRAND_CONFIG.defaultWhatsappMessage
      : `Halo SIMALEN, saya tertarik untuk memesan ${quantity} kemasan Andaliman Bubuk Kering (10 gram). Mohon informasi harga dan cara pemesanannya.`;

  return (
    <section id="produk" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76533A]">
            Produk Utama
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#05291C] sm:text-4xl">
            Kenali Produk SIMALEN
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky Left Product Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
            <div className="flex items-center justify-center rounded-xl border border-[#073B26]/10 bg-[#F6F0E3]/60 p-4 sm:p-6">
              {activeView === 'full' && (
                <ResilientImage
                  src={MEDIA_ASSETS.packagingFull}
                  alt="Tampak lengkap kemasan SIMALEN Andaliman Bubuk Kering"
                  containerClassName="aspect-square w-full max-w-lg rounded-lg"
                  className="h-full w-full object-cover"
                  fallbackTitle="SIMALEN Kemasan Lengkap"
                />
              )}

              {activeView === 'front' && (
                <CroppedPackagingImage
                  src={MEDIA_ASSETS.packagingFull}
                  alt="Kemasan depan SIMALEN Andaliman Bubuk Kering 10g"
                  crop={{ x0: 0.185, y0: 0.235, x1: 0.505, y1: 0.775 }}
                  className="w-full max-w-xs rounded-lg shadow-md"
                />
              )}

              {activeView === 'back' && (
                <CroppedPackagingImage
                  src={MEDIA_ASSETS.packagingFull}
                  alt="Kemasan belakang SIMALEN memuat komposisi, penyimpanan, dan saran penggunaan"
                  crop={{ x0: 0.495, y0: 0.24, x1: 0.815, y1: 0.775 }}
                  className="w-full max-w-xs rounded-lg shadow-md"
                />
              )}

              {activeView === 'texture' && (
                <ResilientImage
                  src={MEDIA_ASSETS.andalimanMacro}
                  alt="Detail bubuk kering dan buah andaliman segar"
                  containerClassName="aspect-[4/3] w-full max-w-lg rounded-lg"
                  className="h-full w-full object-cover"
                  fallbackTitle="Tekstur Bubuk Andaliman"
                />
              )}
            </div>

            <p className="text-center text-xs text-[#76533A]">{currentCaption}</p>

            {/* Gallery Switcher Controls */}
            <div
              role="tablist"
              aria-label="Galeri tampilan produk SIMALEN"
              className="grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {GALLERY_OPTIONS.map((option) => {
                const isSelected = activeView === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveView(option.id)}
                    className={`rounded-md px-3 py-2.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B26] ${
                      isSelected
                        ? 'bg-[#073B26] text-[#F6F0E3]'
                        : 'border border-[#073B26]/15 bg-[#F6F0E3]/50 text-[#05291C] hover:bg-[#F6F0E3]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contiguous Right Purchase & Specification Module */}
          <div className="lg:col-span-6 space-y-8 rounded-xl border border-[#073B26]/12 bg-[#F6F0E3]/40 p-6 sm:p-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#76533A]">
                Rempah Tunggal · Kemasan Pouch 10g
              </p>
              <h3 className="font-serif text-3xl font-semibold text-[#05291C]">
                SIMALEN Andaliman Bubuk Kering
              </h3>
              <p className="text-base leading-relaxed text-[#17231C]/85">
                Rempah pilihan khas Tanah Batak yang diolah menjadi bubuk kering untuk
                memberikan aroma dan karakter rasa khas Andaliman.
              </p>
            </div>

            {/* Verified Specifications Table */}
            <div className="border-t border-[#073B26]/12 pt-6">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#073B26]">
                Spesifikasi Produk
              </h4>
              <dl className="divide-y divide-[#073B26]/10">
                {PRODUCT_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <dt className="text-sm font-medium text-[#76533A] shrink-0">
                      {spec.label}
                    </dt>
                    <dd
                      className={`text-sm sm:text-right tabular-nums ${
                        spec.isPlaceholder
                          ? 'italic text-[#76533A]'
                          : 'font-semibold text-[#05291C]'
                      }`}
                    >
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Order Quantity & Direct WhatsApp Purchase CTA */}
            <div className="space-y-4 border-t border-[#073B26]/12 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="block text-sm font-semibold text-[#05291C]">
                    Jumlah Kemasan (10g)
                  </span>
                  <span className="text-xs text-[#76533A]">
                    Pemesanan langsung terhubung ke WhatsApp resmi SIMALEN
                  </span>
                </div>

                <div className="inline-flex items-center rounded-md border border-[#073B26]/20 bg-white">
                  <button
                    type="button"
                    aria-label="Kurangi jumlah kemasan"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center text-[#05291C] transition-colors hover:bg-[#F6F0E3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B26]"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <span
                    aria-live="polite"
                    className="w-10 text-center text-sm font-semibold tabular-nums text-[#05291C]"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Tambah jumlah kemasan"
                    onClick={() => setQuantity((q) => Math.min(50, q + 1))}
                    className="flex h-10 w-10 items-center justify-center text-[#05291C] transition-colors hover:bg-[#F6F0E3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B26]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <a
                href={buildWhatsAppOrderUrl(orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#073B26] px-6 py-3.5 text-sm font-semibold text-[#F6F0E3] transition-colors duration-150 hover:bg-[#05291C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
              >
                <MessageCircle className="h-4 w-4 text-[#D4AF62]" aria-hidden="true" />
                <span>Pesan Produk</span>
              </a>

              <p className="text-xs leading-relaxed text-[#76533A]">
                Catatan penyimpanan: Tutup rapat kemasan setelah digunakan dan simpan di
                tempat sejuk serta kering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
