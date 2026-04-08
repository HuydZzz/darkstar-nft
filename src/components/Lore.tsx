import { ArrowUpRight } from 'lucide-react';

export default function Lore() {
  return (
    <section id="lore" className="py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Visual Side ── */}
        <div className="relative order-2 lg:order-1">
          {/* Glow behind card */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
            style={{
              boxShadow: '0 0 80px 20px rgba(33,48,78,0.4)',
              transform: 'scale(0.92)',
            }}
          />

          <div className="liquid-glass rounded-[24px] overflow-hidden">
            <img
              src="/assets/103.jpg"
              alt="DarkStar Entity #103"
              className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style={{ maxHeight: '560px' }}
            />

            {/* Card overlay label */}
            <div className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 100%)' }}
            >
              <p className="font-condiment text-gold text-2xl">DS-103 · The Void Walker</p>
              <p className="font-grotesk text-silver/50 text-[11px] uppercase tracking-widest mt-1">
                IBC Core: Active · Zone: Osmosis
              </p>
            </div>
          </div>

          {/* Floating stat badge */}
          <div className="absolute -top-4 -right-4 liquid-glass rounded-2xl px-4 py-3 hidden sm:block">
            <p className="font-grotesk text-[10px] uppercase tracking-widest text-silver/60">Collection</p>
            <p className="font-grotesk text-2xl text-base mt-0.5">108</p>
          </div>
        </div>

        {/* ── Text Side ── */}
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <div>
            <p className="font-condiment text-gold text-[28px] sm:text-[34px] leading-none mb-2">
              Born from the Genesis Block
            </p>
            <h2 className="font-grotesk text-3xl sm:text-4xl uppercase text-base leading-tight">
              GUARDIANS OF<br />THE COSMOS
            </h2>
          </div>

          <div className="w-12 h-px bg-gold/40" />

          <p className="text-silver/70 leading-relaxed text-[15px]">
            In the primordial era of the Cosmos Ecosystem, when dApps and Appchains were still
            solitary stars, DarkStar was born. They are not merely static NFT entities on the
            Stargaze network, but symbols of the primal energy that connects the Interchain.
          </p>

          <p className="text-silver/70 leading-relaxed text-[15px]">
            Utilizing IBC (Inter-Blockchain Communication) technology as a central nervous system,
            each DarkStar carries the dark matter of the universe, traveling across chains to
            protect and preserve the data flow of the entire ecosystem.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 my-2">
            {[
              { label: 'Entities', value: '108' },
              { label: 'Backgrounds', value: '6' },
              { label: 'Genders', value: '2' },
            ].map(({ label, value }) => (
              <div key={label} className="liquid-glass rounded-xl p-4 text-center">
                <p className="font-grotesk text-2xl text-base">{value}</p>
                <p className="font-grotesk text-[10px] uppercase tracking-widest text-silver/50 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.stargaze.zone"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-grotesk text-[13px] uppercase tracking-widest border border-gold/40 text-gold hover:bg-gold/10 transition-colors duration-300"
          >
            Explore Stargaze Ecosystem
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
