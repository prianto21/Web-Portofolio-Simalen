import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { CtaFooter } from './components/CtaFooter';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { HowToUseSection } from './components/HowToUseSection';
import { Navbar } from './components/Navbar';
import { ProductSection } from './components/ProductSection';
import { RecipeModal } from './components/RecipeModal';
import { RecipesSection } from './components/RecipesSection';
import { Reveal } from './components/Reveal';
import { StorySection } from './components/StorySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { RecipeItem } from './data/simalenData';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F6F0E3] text-[#17231C]">
        <Navbar />
        <main>
          <HeroSection />
          <Reveal>
            <AboutSection />
          </Reveal>
          <Reveal>
            <ProductSection />
          </Reveal>
          <Reveal>
            <WhyChooseSection />
          </Reveal>
          <Reveal>
            <HowToUseSection />
          </Reveal>
          <Reveal>
            <RecipesSection onSelectRecipe={setSelectedRecipe} />
          </Reveal>
          <Reveal>
            <StorySection />
          </Reveal>
          <Reveal>
            <FaqSection />
          </Reveal>
        </main>
        <CtaFooter />
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </MotionConfig>
  );
}
