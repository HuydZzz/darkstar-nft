import { X, MessageCircle, Globe } from 'lucide-react';
import Navbar from './Navbar';
import ParticleCanvas from './ParticleCanvas';

const SOCIAL = [
  { Icon: X,             href: '#', label: 'X (Twitter)' },
  { Icon: MessageCircle, href: '#', label: 'Discord'      },
  { Icon: Globe,         href: '#', label: 'Stargaze'     },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-[32px] flex flex-col">

      {/* ── Layer 0: Particles ── */}
      <ParticleCanvas />

      {/* ── Layer 1: Radial glows ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 20% 65%, rgba(33,48,78,0.45) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 45% 45% at 78% 25%, rgba(160,137,101,0.1) 0%, transparent 65%)' }}
      />

      {/* ── Layer 3: All page content ── */}
      <div className="relative z-20 flex flex-col flex-1 px-6 sm:px-10 lg:px-16 pt-8 pb-12">

        {/* Navbar */}
        <Navbar />

        {/* ── Main body: 2-column on desktop ── */}
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 mt-10 lg:mt-0">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6 lg:gap-8 flex-1 lg:justify-end lg:pb-16">

            {/* Eyebrow label */}
            <p className="font-grotesk text-[11px] uppercase tracking-[0.3em] text-gold/70">
              Stargaze · Cosmos Interchain
            </p>

            {/* Heading */}
            <h1
              className="font-grotesk uppercase leading-[0.95] tracking-tight text-base"
              style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
            >
              ARCHITECTS<br />OF THE<br />INTERCHAIN
            </h1>

            {/* Divider */}
            <div className="w-14 h-px bg-gold/40" />

            {/* Subline */}
            <p className="font-grotesk text-[13px] uppercase tracking-widest text-silver/50 max-w-sm leading-relaxed">
              108 Unique Entities &nbsp;·&nbsp; Built on Stargaze &nbsp;·&nbsp; Powered by IBC
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4 flex-wrap">
              <a href="#mint"
                className="liquid-glass px-7 py-3 rounded-full font-grotesk text-[13px] uppercase tracking-widest text-gold border border-gold/40 hover:bg-gold/10 transition-colors duration-300"
              >
                Mint on Stargaze
              </a>
              <a href="#lore"
                className="liquid-glass px-7 py-3 rounded-full font-grotesk text-[13px] uppercase tracking-widest text-silver/60 hover:text-base transition-colors duration-300"
              >
                Explore the Lore
              </a>
            </div>

            {/* Mobile social icons */}
            <div className="flex lg:hidden gap-3 mt-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="liquid-glass w-11 h-11 flex items-center justify-center rounded-xl text-base hover:bg-navy/50 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero video ── */}
          <div className="w-full lg:w-[42%] flex items-center justify-center lg:justify-end lg:pr-14 lg:pb-10">
            <div
              className="liquid-glass rounded-2xl overflow-hidden -rotate-2 shadow-2xl"
              style={{
                width:  'clamp(260px, 30vw, 420px)',
                boxShadow: '0 0 60px 10px rgba(33,48,78,0.35), 0 4px 24px rgba(0,0,0,0.5)',
              }}
            >
              {/* Corner label */}
              <div className="absolute top-3 left-3 z-10 liquid-glass px-3 py-1 rounded-lg pointer-events-none">
                <span className="font-condiment text-gold text-lg leading-none">DarkStar Genesis</span>
              </div>

              <video
                src="/assets/hero-video.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover block"
                style={{ aspectRatio: '9/16' }}
              />

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.7), transparent)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050505)' }}
      />
    </section>
  );
}
