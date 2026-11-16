import React, { useEffect } from 'react';
import { Clock, MessageCircle, Users, X } from 'lucide-react';
import { buildWhatsAppOrderUrl } from '../config/brand';
import { RecipeItem } from '../data/simalenData';
import { ResilientImage } from './ResilientImage';

interface RecipeModalProps {
  recipe: RecipeItem | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  useEffect(() => {
    if (!recipe) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  const recipeOrderMessage = `Halo SIMALEN, saya tertarik memesan Andaliman Bubuk Kering untuk membuat ${recipe.name}. Mohon informasi harga dan cara pemesanannya.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05291C]/80 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-[#D4AF62]/30 bg-[#F6F0E3] text-[#17231C] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail resep"
          className="sticky top-4 float-right z-10 mr-4 mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#05291C] text-[#F6F0E3] transition-colors hover:bg-[#073B26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <ResilientImage
          src={recipe.image}
          alt={recipe.imageAlt}
          containerClassName="aspect-[16/9] w-full"
          className="h-full w-full object-cover"
          fallbackTitle={recipe.name}
        />

        <div className="space-y-6 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#76533A]">
              {recipe.category} · {recipe.categoryNote}
            </p>
            <h3
              id="recipe-modal-title"
              className="font-serif text-3xl font-semibold text-[#05291C]"
            >
              {recipe.name}
            </h3>
            <p className="text-sm leading-relaxed text-[#17231C]/85 sm:text-base">
              {recipe.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-y border-[#76533A]/20 py-4 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-[#073B26]" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[#76533A]">Estimasi Waktu</span>
                <span className="font-medium text-[#05291C] tabular-nums">
                  {recipe.estimatedPrepTime}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="h-4 w-4 shrink-0 text-[#073B26]" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[#76533A]">Saran Porsi</span>
                <span className="font-medium text-[#05291C] tabular-nums">
                  {recipe.servings}
                </span>
              </div>
            </div>

            <div>
              <span className="block text-xs text-[#76533A]">Takaran SIMALEN</span>
              <span className="font-medium text-[#05291C]">{recipe.simalenDosage}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-5 space-y-3">
              <h4 className="font-serif text-xl font-semibold text-[#05291C]">
                Bahan Utama
              </h4>
              <ul className="space-y-2 text-sm leading-relaxed text-[#17231C]/85">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#76533A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h4 className="font-serif text-xl font-semibold text-[#05291C]">
                Langkah Memasak
              </h4>
              <ol className="space-y-3 text-sm leading-relaxed text-[#17231C]/85">
                {recipe.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#073B26] text-xs font-semibold tabular-nums text-[#F6F0E3]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="rounded-lg border border-[#76533A]/20 bg-white/75 p-4 text-xs leading-relaxed text-[#76533A]">
            {recipe.culinaryNote}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#76533A]/20 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-[#073B26]/25 px-5 py-2.5 text-sm font-medium text-[#05291C] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B26]"
            >
              Tutup Resep
            </button>
            <a
              href={buildWhatsAppOrderUrl(recipeOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#073B26] px-6 py-2.5 text-sm font-semibold text-[#F6F0E3] transition-colors hover:bg-[#05291C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
            >
              <MessageCircle className="h-4 w-4 text-[#D4AF62]" aria-hidden="true" />
              <span>Pesan SIMALEN untuk Resep Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
