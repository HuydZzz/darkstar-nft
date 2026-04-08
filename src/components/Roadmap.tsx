const PHASES = [
  {
    phase: '01',
    title: 'Genesis Mint',
    subtitle: 'on Stargaze',
    status: 'active',
    items: [
      '108 unique entities minted on Stargaze',
      'Exclusively for $STARS and $ATOM stakers',
      'Full metadata & IPFS storage on-chain',
      'Holder whitelist snapshot at block height',
    ],
    tags: ['$STARS', '$ATOM', 'Stargaze'],
  },
  {
    phase: '02',
    title: 'The Bridge',
    subtitle: 'IBC Utility Activation',
    status: 'upcoming',
    items: [
      'Activating IBC cross-chain utility',
      'Governance weight in Cosmos-aligned protocols',
      'DarkStar holders vote on inter-chain proposals',
      'Staking rewards via IBC liquidity pools',
    ],
    tags: ['IBC', 'Governance', 'Interchain'],
  },
  {
    phase: '03',
    title: 'Zero-Knowledge Integration',
    subtitle: 'zkNFT Upgrade',
    status: 'upcoming',
    items: [
      'Upgrade entities to zkNFTs',
      'Complete privacy across the Interchain',
      'Verifiable on-chain attributes without disclosure',
      'DarkStar entities become privacy-native assets',
    ],
    tags: ['zkNFT', 'Privacy', 'Zero-Knowledge'],
  },
];

export default function Roadmap() {
  return (
    <section id="mint" className="py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-condiment text-gold text-2xl mb-2">The Journey</p>
          <h2 className="font-grotesk text-4xl sm:text-5xl uppercase text-base tracking-tight">
            STARGAZE MINT<br />DETAILS
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] sm:left-[30px] top-4 bottom-4 w-px bg-silver/20" />

          <div className="flex flex-col gap-14">
            {PHASES.map(({ phase, title, subtitle, status, items, tags }) => {
              const isActive = status === 'active';
              return (
                <div key={phase} className="flex gap-6 sm:gap-10">
                  {/* Node */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-[46px] h-[46px] sm:w-[60px] sm:h-[60px] rounded-full liquid-glass flex items-center justify-center z-10"
                      style={
                        isActive
                          ? {
                              boxShadow:
                                '0 0 0 1px rgba(160,137,101,0.5), 0 0 24px 8px rgba(160,137,101,0.2)',
                            }
                          : {
                              boxShadow:
                                '0 0 0 1px rgba(33,48,78,0.6), 0 0 16px 4px rgba(33,48,78,0.3)',
                            }
                      }
                    >
                      <span
                        className="font-grotesk text-xs sm:text-sm"
                        style={{ color: isActive ? '#A08965' : '#CCCAC6' }}
                      >
                        {phase}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-grotesk text-xl sm:text-2xl uppercase text-base">
                        {title}
                      </h3>
                      {isActive && (
                        <span className="liquid-glass px-2.5 py-0.5 rounded-full font-grotesk text-[9px] uppercase tracking-widest text-gold border border-gold/30">
                          Live
                        </span>
                      )}
                    </div>
                    <p className="font-condiment text-gold text-lg mb-4">{subtitle}</p>

                    <ul className="flex flex-col gap-2 mb-5">
                      {items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-silver/60 text-[14px]">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: isActive ? '#A08965' : '#CCCAC6' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span
                          key={tag}
                          className="liquid-glass px-3 py-1 rounded-full font-grotesk text-[10px] uppercase tracking-widest text-silver/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
