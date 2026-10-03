import GalleryGrid from '@/components/GalleryGrid';
import { site, type GalleryData, type SectionProps } from '@/data';
import { cn } from '@/lib/cn';

export default function Gallery({ data, className }: SectionProps<GalleryData> = {}) {
  const gallery = data || site.gallery;

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
            <span className="text-[13px] font-semibold uppercase tracking-widest text-[#ff6b00]">{gallery.badge}</span>
            <span className="h-0.5 w-10 bg-[#ff6b00]" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-[#0b1c3d] md:text-[42px]">
            {gallery.heading.main} <span className="text-[#ff6b00]">{gallery.heading.highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] text-gray-500">{gallery.description}</p>
        </div>

        <GalleryGrid data={gallery.photos} />

        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-full bg-[#ff6b00] px-8 py-3.5 text-[15px] font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-[#e65c00]"
          >
            {gallery.loadMoreBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
