import { useState } from 'react';
import { X, Menu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'The Lore', href: '#lore' },
  { label: 'Stargaze Mint', href: '#mint' },
  { label: 'Interchain', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Top bar ── */}
      <header className="relative z-20 flex items-center justify-between mb-6 sm:mb-8">
        {/* Logo */}
        <span className="font-grotesk text-sm sm:text-[16px] uppercase tracking-widest text-base">
          DARKSTAR
        </span>

        {/* Nav pill — desktop */}
        <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
          <ul className="flex gap-12">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-grotesk text-[13px] uppercase tracking-wider text-base/70 hover:text-gold transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden liquid-glass p-2 rounded-xl text-base"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <nav className="lg:hidden liquid-glass rounded-2xl px-6 py-5 mb-6 z-20 relative">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-grotesk text-[13px] uppercase tracking-wider text-base/70 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </>
  );
}
