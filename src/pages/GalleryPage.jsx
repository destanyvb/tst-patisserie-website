import { motion } from 'framer-motion'

const photos = [
  { src: '/images/tst_shop_shelf.webp',        alt: 'The shop display at 82 St George\'s Street',                              caption: 'The shop, 82 St George\'s Street'          },
  { src: '/images/tst_tiered_stand.jpg',       alt: 'Afternoon tea service with sandwiches, macarons and scones',              caption: 'Afternoon tea at home'                     },
  { src: '/images/tst_choc_layer_cake.jpg',    alt: 'Layered chocolate celebration cake',                                      caption: 'Chocolate layer cake'                      },
  { src: '/images/tst_white_choc_dome.jpg',    alt: 'White chocolate dome dessert topped with fresh berries',                  caption: 'White chocolate dome'                      },
  { src: '/images/tst_lemon_loaf.jpg',         alt: 'Lemon and blueberry loaf cake with lemon glaze, sliced',                 caption: 'Lemon and blueberry loaf'                  },
  { src: '/images/tst_meringue_pops.jpg',      alt: 'Pink and white meringue pops on wooden sticks laid out in the kitchen',  caption: 'Meringue pops, fresh from the kitchen'     },
  { src: '/images/tst_croissants.jpg',         alt: 'Chocolate drizzle croissants in a white bakery box',                     caption: 'Croissants, laminated by hand'             },
  { src: '/images/tst_donuts.jpg',             alt: 'Chocolate glazed and cinnamon sugar ring donuts',                        caption: 'Chocolate glazed ring donuts'              },
  { src: '/images/tst_sweet_platter.jpg',      alt: 'Black platter with eclairs, macarons and caramel chocolate slices',      caption: 'A sweet catering platter'                  },
  { src: '/images/tst_tiered_catering.jpg',    alt: 'Three tier gold catering stand with brownies, fruit tarts and cream puffs', caption: 'Three tier catering stand'              },
  { src: '/images/tst_easter_cupcakes.jpg',    alt: 'Easter nest chocolate cupcakes with pastel candy eggs on top',           caption: 'Easter nest cupcakes'                      },
  { src: '/images/tst_choc_eggs.jpg',          alt: 'Gold dusted dark chocolate eggs arranged on a baking mat',               caption: 'Handmade chocolate eggs'                   },
  { src: '/images/tst_savoury_quiche.jpg',     alt: 'Black platter with mini quiches and seeded sausage rolls',               caption: 'Mini quiches and sausage rolls'             },
  { src: '/images/tst_savoury_catering.jpg',   alt: 'Large savoury catering platters with sandwiches, salmon bites and pastries', caption: 'Savoury catering platters'          },
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
