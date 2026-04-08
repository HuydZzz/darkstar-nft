const ENTITIES = [
  {
    id: 'DS-01',
    title: 'THE ARCHITECT',
    image: '/assets/103.jpg',
    traits: [
      { label: 'IBC Core', value: 'Active' },
      { label: 'Zone', value: 'Osmosis' },
      { label: 'Energy', value: 'Dark Matter' },
      { label: 'Gender', value: 'Female' },
    ],
    token: '#103',
  },
  {
    id: 'DS-02',
    title: 'THE VOID WALKER',
    image: '/assets/104.jpg',
    traits: [
      { label: 'IBC Core', value: 'Syncing' },
      { label: 'Zone', value: 'Cosmos Hub' },
      { label: 'Energy', value: 'Antimatter' },
      { label: 'Gender', value: 'Male' },
    ],
    token: '#104',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 sm:px-10 lg:px-20 bg-dark/40">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-condiment text-gold text-2xl mb-2">Featured Entities</p>
          <h2 className="font-grotesk text-4xl sm:text-5xl uppercase text-base tracking-tight">
            THE ANOMALIES
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENTITIES.map(({ id, title, image, traits, token }) => (
            <div
              key={id}
              className="liquid-glass rounded-[20px] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-[20px] relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: '420px' }}
                />
                {/* Token badge */}
                <div className="absolute top-4 left-4 liquid-glass rounded-lg px-3 py-1.5">
                  <span className="font-grotesk text-[11px] uppercase tracking-widest text-gold">
                    {token}
                  </span>
                </div>
              </div>

              {/* Info block */}
              <div className="bg-navy/60 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-grotesk text-[11px] uppercase tracking-widest text-silver/50 mb-1">
                      {id}
                    </p>
                    <h3 className="font-grotesk text-xl uppercase text-base">
                      {title}
                    </h3>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 animate-pulse" />
                </div>

                {/* Traits */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {traits.map(({ label, value }) => (
                    <div
                      key={label}
                      className="liquid-glass rounded-lg px-3 py-2"
                    >
                      <p className="font-grotesk text-[9px] uppercase tracking-widest text-silver/40">
                        {label}
                      </p>
                      <p className="font-grotesk text-[12px] text-base mt-0.5">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.stargaze.zone"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-flex items-center gap-3 px-10 py-4 rounded-full font-grotesk text-[13px] uppercase tracking-widest border border-silver/20 text-silver/70 hover:text-gold hover:border-gold/40 transition-colors duration-300"
          >
            View All 108 Entities on Stargaze
          </a>
        </div>
      </div>
    </section>
  );
}
