import React from 'react';
import { MEDIA_ASSETS } from '../config/brand';
import { BatakOrnament } from './BatakOrnament';
import { ResilientImage } from './ResilientImage';

const BOTANICAL_NOTES = [
  { label: 'Asal Rempah', value: 'Dolok Sanggul, Humbang Hasundutan' },
  { label: 'Karakter Aroma', value: 'Citrus segar khas pegunungan' },
  { label: 'Sensasi Rasa', value: 'Sedikit getir & kebas ringan di lidah' },
  { label: 'Bentuk Sediaan', value: 'Bubuk kering praktis 100% Andaliman' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="bg-[#F6F0E3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photography Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-[#76533A]/20 bg-white p-2">
              <ResilientImage
                src={MEDIA_ASSETS.andalimanMacro}
                alt="Buah andaliman segar berwarna hijau dan bubuk andaliman halus di atas sendok kayu"
                containerClassName="aspect-[4/3] lg:h-full w-full rounded-lg"
                className="h-full w-full object-cover"
                fallbackTitle="Andaliman Segar & Bubuk Kering"
              />
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76533A]">
                Mengenal Andaliman
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#05291C] sm:text-4xl">
                Lebih dari Sekadar Rempah
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#17231C]/85">
              <p>
                Andaliman merupakan rempah khas Sumatera Utara yang telah menjadi bagian
                penting dari kekayaan kuliner masyarakat Batak.
              </p>
              <p>
                Dikenal dengan aroma citrus yang khas dan sensasi rasa sedikit getir serta
                kebas ringan di lidah, Andaliman menghadirkan karakter rasa yang berbeda
                dari rempah lainnya.
              </p>
              <p>
                Kini, SIMALEN menghadirkan Andaliman dalam bentuk bubuk kering yang
                praktis untuk menemani kreasi masakan Anda.
              </p>
            </div>

            {/* Unboxed Botanical & Origin Summary */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[#76533A]/20 pt-6 sm:grid-cols-2">
              {BOTANICAL_NOTES.map((note) => (
                <div key={note.label} className="space-y-1">
                  <dt className="text-xs font-medium uppercase tracking-wider text-[#76533A]">
                    {note.label}
                  </dt>
                  <dd className="text-sm font-semibold text-[#05291C]">{note.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <BatakOrnament variant="forest" className="mt-16" />
      </div>
    </section>
  );
};
