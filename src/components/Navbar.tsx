import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG, MEDIA_ASSETS, buildWhatsAppOrderUrl } from '../config/brand';
import { CroppedPackagingImage } from './ResilientImage';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Cara Penggunaan', href: '#cara-penggunaan' },
  { label: 'Kontak', href: '#kontak' },
] as const;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#05291C]/95 backdrop-blur-md border-b border-[#D4AF62]/20 shadow-sm'
          : 'bg-gradient-to-b from-[#05291C]/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark + Original Emblem */}
        <a
          href="#home"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62] rounded-md"
        >
          <CroppedPackagingImage
            src={MEDIA_ASSETS.packagingFull}
            alt="Logo SIMALEN"
            crop={{ x0: 0.072, y0: 0.015, x1: 0.168, y1: 0.111 }}
            className="h-8 w-8 rounded-full border border-[#D4AF62]/50 bg-[#05291C]"
            loading="eager"
          />
          <span className="font-serif text-xl font-semibold tracking-[0.16em] text-[#F6F0E3]">
            {BRAND_CONFIG.brandName}
          </span>
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#F6F0E3]/85"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#D4AF62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62] rounded-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF62] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#D4AF62] px-4 py-2 text-xs font-semibold tracking-wide text-[#05291C] transition-colors duration-150 hover:bg-[#E6CA8A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F0E3]"
          >
            Pesan Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D4AF62]/30 text-[#F6F0E3] transition-colors hover:bg-[#073B26] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi Seluler"
          className="border-t border-[#D4AF62]/15 bg-[#05291C] px-4 pb-6 pt-4 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[#F6F0E3]/90 transition-colors hover:bg-[#073B26] hover:text-[#D4AF62]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={buildWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center rounded-md bg-[#D4AF62] px-4 py-2.5 text-sm font-semibold text-[#05291C] transition-colors hover:bg-[#E6CA8A]"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
