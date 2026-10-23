import { motion } from 'framer-motion'

const photos = [
  { src: '/images/tst_shop_shelf.webp',            alt: 'The Sweetest Thing shop display shelf',                    caption: 'The shop, 82 St George\'s Street'             },
  { src: '/images/tst_tiered_stand.jpg',            alt: 'Tiered stand of pastries and savoury items',              caption: 'Lunch platters and catering spreads'          },
  { src: '/images/tst_fruit_tart.webp',             alt: 'Seasonal fruit tart with strawberries and kiwi',          caption: 'Seasonal fruit tart'                          },
  { src: '/images/tst_naked_cake.jpg',              alt: 'Naked celebration cake dressed with figs and berries',     caption: 'Celebration cake, dressed with fresh fruit'   },
  { src: '/images/tst_ig_02.jpg',                   alt: 'The Sweetest Thing Patisserie',                            caption: 'From the counter'                             },
  { src: '/images/tst_strawberry_cupcakes.jpg',     alt: 'Strawberry cupcakes on a cake stand',                     caption: 'Strawberry cupcakes, baked fresh'             },
  { src: '/images/tst_caramel_tart.webp',           alt: 'Caramel tart sliced on a stand',                          caption: 'Caramel tart, baked fresh daily'              },
  { src: '/images/tst_passionfruit_cheesecake2.jpg', alt: 'Passionfruit cheesecake',                                 caption: 'Passionfruit cheesecake'                      },
  { src: '/images/tst_catering_display.webp',       alt: 'Catering display with tiered stand of tarts and brownies', caption: 'Events and catering'                        },
  { src: '/images/tst_choc_dome.webp',              alt: 'Chocolate dome dessert with cream topping',               caption: 'Signature chocolate dome'                     },
  { src: '/images/tst_passionfruit_tart.jpg',       alt: 'Passionfruit tart',                                       caption: 'Passionfruit tart'                            },
  { src: '/images/tst_linzer_cookies.webp',         alt: 'Jam star linzer cookies fresh from the oven',             caption: 'Jam star cookies'                             },
  { src: '/images/tst_walnut_brownies.jpg',         alt: 'Stacked walnut brownies',                                 caption: 'Walnut brownies'                              },
  { src: '/images/tst_cupcakes.jpg',                alt: 'Berry cupcakes with fresh strawberry garnish',            caption: 'Berry cupcakes, made that morning'            },
  { src: '/images/tst_choc_layer_cake.jpg',         alt: 'Layered chocolate celebration cake',                      caption: 'Chocolate layer cake'                         },
  { src: '/images/tst_pink_cupcakes.webp',          alt: 'Pink frosted cupcakes',                                   caption: 'Pink cupcakes'                                },
  { src: '/images/tst_catering.webp',               alt: 'Pastry counter display',                                  caption: 'Fresh from the counter every morning'         },
  { src: '/images/tst_victoria_cake.jpg',           alt: 'Layered Victoria sponge with berries',                    caption: 'Victoria sponge'                              },
  { src: '/images/tst_chocolate_slice.jpg',         alt: 'Rich chocolate slice',                                    caption: 'Chocolate slice'                              },
  { src: '/images/tst_white_choc_dome.jpg',         alt: 'White chocolate dome dessert',                            caption: 'White chocolate dome'                         },
  { src: '/images/tst_exterior.webp',               alt: 'The Sweetest Thing Patisserie on St George\'s Street',   caption: '82 St George\'s Street, Simon\'s Town'        },
  { src: '/images/tst_ig_01.jpg',                   alt: 'The Sweetest Thing Patisserie',                           caption: 'From our Instagram'                           },
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
