import { X, MessageCircle, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(204,202,198,0.1)' }}>

      {/* Large background DARKSTAR text */}
      <div className="relative overflow-hidden py-8 sm:py-12">
        <p
          className="font-grotesk uppercase text-base text-center select-none pointer-events-none"
          style={{
            fontSize: 'clamp(60px, 16vw, 180px)',
            opacity: 0.04,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          DARKSTAR
        </p>

        {/* Centered content over the text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6">
          <p className="font-condiment text-gold text-3xl sm:text-4xl text-center">
            Guardians of the Cosmos
          </p>
          <p className="font-grotesk text-[11px] uppercase tracking-widest text-silver/40 text-center max-w-xs">
            108 Unique NFT Entities · Stargaze · Cosmos Interchain
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {[
              { Icon: X, label: 'X (Twitter)' },
              { Icon: MessageCircle, label: 'Discord' },
              { Icon: Globe, label: 'Website' },
              { Icon: ExternalLink, label: 'Stargaze' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="liquid-glass w-10 h-10 flex items-center justify-center rounded-xl text-silver/60 hover:text-gold hover:bg-navy/40 transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 sm:px-10 lg:px-16 py-6"
        style={{ borderTop: '1px solid rgba(204,202,198,0.06)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-grotesk text-sm text-silver/40 uppercase tracking-widest">
            Built on{' '}
            <a
              href="https://www.stargaze.zone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              Stargaze
            </a>
          </p>
          <p className="font-grotesk text-sm text-silver/30 uppercase tracking-widest text-center">
            © 2026 DarkStar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
