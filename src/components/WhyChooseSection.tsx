import React from 'react';
import { Leaf, Mountain, Utensils, Wind } from 'lucide-react';
import { FeatureItem, WHY_CHOOSE_FEATURES } from '../data/simalenData';

function renderFeatureIcon(iconName: FeatureItem['iconName']) {
  const iconProps = { className: 'h-5 w-5 text-[#D4AF62]', 'aria-hidden': true as const };
  switch (iconName) {
    case 'leaf':
      return <Leaf {...iconProps} />;
    case 'wind':
      return <Wind {...iconProps} />;
    case 'mountain':
      return <Mountain {...iconProps} />;
    case 'utensils':
      return <Utensils {...iconProps} />;
  }
}

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="keunggulan" className="bg-[#073B26] py-16 text-[#F6F0E3] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF62]">
            Keunggulan Produk
          </p>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Mengapa Memilih SIMALEN?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              className="group flex flex-col justify-between rounded-xl border border-[#D4AF62]/20 bg-[#05291C]/65 p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#D4AF62]/45"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF62]/30 bg-[#073B26]">
                    {renderFeatureIcon(feature.iconName)}
                  </div>
                  <span className="font-serif text-sm font-semibold tabular-nums text-[#D4AF62]/70">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#F6F0E3]/80">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
