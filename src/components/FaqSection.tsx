import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/simalenData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#F6F0E3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76533A]">
            Pertanyaan Umum
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#05291C] sm:text-4xl">
            Informasi Seputar SIMALEN & Andaliman
          </h2>
        </div>

        <div className="divide-y divide-[#76533A]/20 rounded-xl border border-[#76533A]/20 bg-white">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id} className="px-5 sm:px-7">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#073B26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B26] rounded-md"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-sm font-semibold tabular-nums text-[#76533A]">
                        0{idx + 1}.
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#05291C] sm:text-xl">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#76533A] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#073B26]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 pl-8 pr-4 text-sm leading-relaxed text-[#17231C]/85 sm:text-base"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
