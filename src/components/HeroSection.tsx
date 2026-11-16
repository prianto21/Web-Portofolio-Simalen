import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, MEDIA_ASSETS, buildWhatsAppOrderUrl } from '../config/brand';
import { ResilientImage } from './ResilientImage';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05291C] text-[#F6F0E3] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Subtle highland landscape backdrop behind deep dark green contrast scrim */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={MEDIA_ASSETS.batakHighlands}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05291C] via-[#05291C]/92 to-[#073B26]/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF62]">
                SIMALEN – Andaliman Bubuk Kering
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Rempah Asli dari Tanah Batak
              </h1>
              <p className="font-serif italic text-xl text-[#E6CA8A] sm:text-2xl">
                {BRAND_CONFIG.englishIdentity}
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[#F6F0E3]/88 sm:text-lg">
              Kenalkan cita rasa autentik Andaliman, rempah khas Sumatera Utara yang
              menghadirkan aroma citrus dan sensasi rasa istimewa dalam setiap hidangan.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D4AF62] px-6 py-3 text-sm font-semibold text-[#05291C] transition-colors duration-150 hover:bg-[#E6CA8A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Pesan Sekarang</span>
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D4AF62]/50 px-6 py-3 text-sm font-medium text-[#F6F0E3] transition-colors duration-150 hover:border-[#D4AF62] hover:bg-[#073B26] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
              >
                <span>Jelajahi Produk</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Quiet Unboxed Origin Metadata */}
            <div className="border-t border-[#D4AF62]/20 pt-5 text-xs sm:text-sm text-[#F6F0E3]/75 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Dolok Sanggul, Humbang Hasundutan</span>
              <span aria-hidden="true" className="text-[#D4AF62]">
                ·
              </span>
              <span>100% Andaliman Murni</span>
              <span aria-hidden="true" className="text-[#D4AF62]">
                ·
              </span>
              <span className="tabular-nums">Berat Bersih 10 gram</span>
            </div>
          </div>

          {/* Primary Packaging Showcase Column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl rounded-xl border border-[#D4AF62]/30 bg-[#073B26]/50 p-2 sm:p-3 shadow-2xl">
              <ResilientImage
                src={MEDIA_ASSETS.packagingFull}
                alt="Kemasan resmi SIMALEN Andaliman Bubuk Kering tampak depan dan belakang bersama biji andaliman segar, mangkuk kayu bubuk andaliman, dan lanskap Danau Toba Tanah Batak"
                containerClassName="aspect-square w-full rounded-lg"
                className="h-full w-full object-cover"
                fallbackTitle="SIMALEN Andaliman Bubuk Kering"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
