import { motion } from 'framer-motion'

const photos = [
  { src: '/images/gallery_display.jpg',      alt: 'The Sweetest Thing Patisserie display case',         caption: 'The counter, every morning'        },
  { src: '/images/gallery_croissants.jpg',   alt: 'Freshly baked butter croissants',                    caption: 'Butter croissants, laminated by hand' },
  { src: '/images/gallery_custard_tarts.jpg',alt: 'Pasteis de nata, Portuguese custard tarts',          caption: 'Pasteis de nata'                   },
  { src: '/images/gallery_tarts.jpg',        alt: 'Fresh tartlets',                                     caption: 'Daily tartlet selection'           },
  { src: '/images/gallery_coffee.jpg',       alt: 'Coffee at The Sweetest Thing Patisserie',            caption: 'Freshly brewed coffee'             },
  { src: '/images/gallery_baked_goods.jpg',  alt: 'Freshly baked goods',                                caption: 'Baked that morning'                },
  { src: '/images/hero.jpg',                 alt: 'A creation from The Sweetest Thing Patisserie',      caption: 'Made from scratch, every day'      },
]

export default function GalleryPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Page header */}
      <section className="bg-cream/40 border-b border-border py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              The bakery
            </p>
            <h1 className="font-display text-5xl font-bold text-espresso leading-tight">
              What the counter looks like.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="py-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-5xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="break-inside-avoid group"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-300 flex items-end">
                    <p className="font-body text-sm text-cream font-medium px-4 pb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-sm text-muted mb-2">
              Follow us for daily updates.
            </p>
            <a
              href="https://www.instagram.com/sweetestthingpatisserie/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group"
            >
              @sweetestthingpatisserie on Instagram
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
