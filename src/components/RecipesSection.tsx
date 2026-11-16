import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { RECIPES, RecipeItem } from '../data/simalenData';
import { ResilientImage } from './ResilientImage';

interface RecipesSectionProps {
  onSelectRecipe: (recipe: RecipeItem) => void;
}

export const RecipesSection: React.FC<RecipesSectionProps> = ({ onSelectRecipe }) => {
  const [filter, setFilter] = useState<'all' | 'tradisional' | 'modern'>('all');

  const filteredRecipes = RECIPES.filter((recipe) => {
    if (filter === 'tradisional') {
      return recipe.category === 'Hidangan Tradisional Batak';
    }
    if (filter === 'modern') {
      return recipe.category === 'Inspirasi Kreasi Modern';
    }
    return true;
  });

  return (
    <section id="resep" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#76533A]">
              Inspirasi Resep
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#05291C] sm:text-4xl">
              Jelajahi Cita Rasa Nusantara
            </h2>
            <p className="text-sm leading-relaxed text-[#17231C]/75 sm:text-base">
              Temukan panduan penggunaan SIMALEN pada hidangan tradisional khas Batak
              maupun inspirasi kreasi masakan modern sehari-hari.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="group"
            aria-label="Filter kategori resep"
            className="inline-flex items-center gap-1 self-start rounded-lg bg-[#F6F0E3] p-1"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-[#073B26] text-[#F6F0E3]'
                  : 'text-[#05291C] hover:bg-white/60'
              }`}
            >
              Semua Sajian
            </button>
            <button
              type="button"
              onClick={() => setFilter('tradisional')}
              className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                filter === 'tradisional'
                  ? 'bg-[#073B26] text-[#F6F0E3]'
                  : 'text-[#05291C] hover:bg-white/60'
              }`}
            >
              Hidangan Tradisional
            </button>
            <button
              type="button"
              onClick={() => setFilter('modern')}
              className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                filter === 'modern'
                  ? 'bg-[#073B26] text-[#F6F0E3]'
                  : 'text-[#05291C] hover:bg-white/60'
              }`}
            >
              Kreasi Modern
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#073B26]/12 bg-[#F6F0E3]/35 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <ResilientImage
                src={recipe.image}
                alt={recipe.imageAlt}
                containerClassName="aspect-[16/10] w-full"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                fallbackTitle={recipe.name}
              />

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#76533A]">
                    <span className="font-semibold text-[#073B26]">
                      {recipe.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 tabular-nums">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {recipe.estimatedPrepTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#05291C]">
                    {recipe.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#17231C]/80">
                    {recipe.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#073B26]/10 pt-4">
                  <span className="text-xs text-[#76533A]">{recipe.servings}</span>
                  <button
                    type="button"
                    onClick={() => onSelectRecipe(recipe)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#073B26] px-4 py-2 text-xs font-semibold text-[#F6F0E3] transition-colors duration-150 hover:bg-[#05291C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
                  >
                    <span>Lihat Resep</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF62]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
