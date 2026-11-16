import React from 'react';
import { MEDIA_ASSETS } from '../config/brand';
import { BatakOrnament } from './BatakOrnament';
import { ResilientImage } from './ResilientImage';

export const StorySection: React.FC = () => {
  return (
    <section
      id="cerita-kami"
      className="bg-[#05291C] py-16 text-[#F6F0E3] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Story Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF62]">
                Cerita Kami
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Dari Tanah Batak, Untuk Pecinta Kuliner Nusantara
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#F6F0E3]/85">
              <p>
                SIMALEN lahir dari kecintaan terhadap kekayaan rempah dan cita rasa khas
                Tanah Batak.
              </p>
              <p>
                Berasal dari kawasan Dolok Sanggul, Humbang Hasundutan, kami ingin
                memperkenalkan Andaliman sebagai salah satu kekayaan kuliner lokal
                Indonesia.
              </p>
              <p>
                Melalui SIMALEN, kami menghadirkan rempah Andaliman dalam bentuk yang
                praktis agar semakin mudah dinikmati dan digunakan dalam berbagai kreasi
                masakan.
              </p>
            </div>

            <div className="border-t border-[#D4AF62]/20 pt-5 text-xs tracking-wide text-[#E6CA8A]">
              Dolok Sanggul · Kabupaten Humbang Hasundutan · Sumatera Utara
            </div>
          </div>

          {/* Batak Highlands Landscape Photography */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-[#D4AF62]/25 bg-[#073B26] p-2">
              <ResilientImage
                src={MEDIA_ASSETS.batakHighlands}
                alt="Lanskap pegunungan hijau dataran tinggi Tanah Batak di kawasan Dolok Sanggul dan Danau Toba saat pagi hari"
                containerClassName="aspect-[16/10] lg:h-full w-full rounded-lg"
                className="h-full w-full object-cover"
                fallbackTitle="Dataran Tinggi Tanah Batak"
              />
            </div>
          </div>
        </div>

        <BatakOrnament variant="gold" className="mt-16" />
      </div>
    </section>
  );
};
