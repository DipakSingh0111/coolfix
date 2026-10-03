import Icon from './Icon';
import data from '../data/content.json';

const { tag, titleStart, highlight, description, items } = data.highlights;

const colors = {
  orange: {
    iconBg: 'bg-orange-50',
    icon: 'text-[#ff6b00]',
    corner: 'bg-orange-200/70',
    bar: 'bg-[#ff6b00]',
  },
  blue: {
    iconBg: 'bg-blue-50',
    icon: 'text-[#1f5fc9]',
    corner: 'bg-blue-200/70',
    bar: 'bg-[#1f5fc9]',
  },
};

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] py-16 lg:py-24">
      <div
        className="pointer-events-none absolute left-8 top-16 hidden h-24 w-32 opacity-70 md:block"
        style={{ backgroundImage: 'radial-gradient(#b9c8e2 1.5px, transparent 1.5px)', backgroundSize: '18px 18px' }}
      />
      <div className="pointer-events-none absolute -right-10 -top-28 h-96 w-96 rounded-full bg-[#eef3fb]" />
      <div className="pointer-events-none absolute -right-28 -top-44 h-80 w-80 rounded-full border-[28px] border-[#ff6b00]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#eef3fb]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#0b1c3d]">{tag}</span>
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#0b1c3d] sm:text-4xl lg:text-[44px]">
            {titleStart} <span className="text-[#ff6b00]">{highlight}</span>
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const c = colors[item.color as keyof typeof colors];
            return (
              <div
                key={item.title}
                className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-white px-5 pb-10 pt-8 shadow-[0_8px_30px_rgba(11,28,61,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,28,61,0.12)]"
              >
                <span
                  className={`absolute right-0 top-0 h-8 w-8 ${c.corner}`}
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />

                <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${c.iconBg} ${c.icon} transition group-hover:scale-110`}>
                  <Icon name={item.icon} className="h-8 w-8" />
                </span>
                <span className="h-16 w-px shrink-0 bg-gray-200" />
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#0b1c3d]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>

                <span className={`absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-t-full ${c.bar} transition-all group-hover:w-28`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
