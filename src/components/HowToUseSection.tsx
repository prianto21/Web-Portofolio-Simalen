import React from 'react';
import { Lightbulb } from 'lucide-react';
import { USAGE_CARDS } from '../data/simalenData';
import { ResilientImage } from './ResilientImage';

export const HowToUseSection: React.FC = () => {
  return (
    <section id="cara-penggunaan" className="bg-[#F6F0E3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76533A]">
              Cara Penggunaan
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#05291C] sm:text-4xl">
              Satu Rempah, Beragam Kreasi
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#76533A]">
            Bentuk bubuk kering memudahkan Anda menakar dan meratakan aroma Andaliman di
            berbagai sajian rumahan hingga hidangan istimewa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USAGE_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#76533A]/15 bg-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <ResilientImage
                src={card.image}
                alt={card.imageAlt}
                containerClassName="aspect-[4/3] w-full"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                fallbackTitle={card.title}
              />
              <div className="flex flex-1 flex-col p-5 space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#05291C]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#17231C]/80">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Practical Tip Box with clean all-around hairline border */}
        <div className="mt-10 rounded-xl border border-[#073B26]/20 bg-white/80 p-5 sm:p-6">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#073B26] text-[#D4AF62]">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#76533A]">
                Tips Takaran Praktis
              </p>
              <p className="text-sm sm:text-base font-medium text-[#05291C]">
                Mulailah dengan sejumput kecil, kemudian sesuaikan takarannya dengan
                selera dan jumlah masakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
