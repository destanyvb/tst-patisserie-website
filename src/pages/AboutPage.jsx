import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const principles = [
  {
    title: 'Made from scratch',
    body: 'Every item on the counter was made that morning. Not yesterday. Not pre-made and finished. Made from scratch, in our kitchen, that day.',
  },
  {
    title: 'Rotating daily',
    body: 'The menu changes every morning. What you see today is not what you will see tomorrow. There are over 40 items but they do not all appear at once.',
  },
  {
    title: 'We stop when we sell out',
    body: 'We bake a set amount each day. When we sell out, we are done. We do not restock with frozen items. Come early.',
  },
  {
    title: 'No phone orders',
    body: "We do not hold specific items over the phone. Come in, see what is on the counter, and take what you like. That is the experience.",
  },
]

const stats = [
  { value: '2005', label: 'Year established' },
  { value: '40+',  label: 'Items baked daily' },
  { value: '453',  label: 'Google reviews' },
  { value: '4.6',  label: 'Google rating' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Page header */}
      <section className="bg-cream/40 border-b border-border py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              Our story
            </p>
            <h1 className="font-display text-5xl font-bold text-espresso leading-tight text-balance">
              Twenty years of getting up early to make something worth eating.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-parchment rounded-2xl border border-border p-8 space-y-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-4xl font-bold text-gold">{value}</p>
                  <p className="font-body text-sm text-muted mt-1">{label}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="font-body text-xs text-muted/60 italic">
                  #13 in Simon's Town on TripAdvisor
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="lg:col-span-3 space-y-5 font-body text-base text-muted leading-relaxed"
          >
            <p>
              Doreen Alcock opened The Sweetest Thing in 2005. She trained as a patissier and spent years learning to do one thing properly: bake from scratch, every day, without compromise.
            </p>
            <p>
              The shop on St George's Street in Simon's Town became a fixture. Locals know it. Visitors find it. TripAdvisor has ranked it among the top restaurants in Simon's Town for years. Google reviewers call it the best patisserie in the far south of Cape Town.
            </p>
            <p>
              Twenty years in, nothing has changed about the approach. Every item on the counter was made that morning. The croissants were laminated by hand. The custard tarts were filled and baked fresh. The menu on any given day reflects what Doreen and her team decided to make, and it is different every day.
            </p>
            <p>
              There is no frozen pastry here. No microwave. Just a kitchen, real ingredients, and people who know what they are doing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-4 sm:px-6" style={{ background: '#D8DCBA' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="mb-12"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#6B7245' }}>
              How we work
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso">
              Four principles. No exceptions.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-7"
                style={{ background: 'rgba(255,255,255,0.45)', border: '1px solid rgba(107,114,69,0.20)' }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(107,114,69,0.18)' }}>
                  <span className="font-display text-sm font-bold" style={{ color: '#6B7245' }}>{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-espresso mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="grid grid-cols-2 sm:grid-cols-4 h-48 sm:h-64">
        {[
          { src: '/images/gallery_croissants.jpg',   alt: 'Croissants'       },
          { src: '/images/tst_linzer_cookies.webp',  alt: 'Jam star cookies' },
          { src: '/images/gallery_coffee.jpg',       alt: 'Coffee'           },
          { src: '/images/tst_shop_shelf.webp',      alt: 'Shop display'     },
        ].map(({ src, alt }) => (
          <div key={src} className="overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 text-center mb-16 md:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
        >
          <h2 className="font-display text-3xl font-bold text-espresso mb-3">
            Come in and try something.
          </h2>
          <p className="font-body text-sm text-muted mb-8">
            82 St George's Street, Simon's Town. Open from 8am Monday to Friday.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-3.5 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors"
            >
              See the Menu
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border-2 border-espresso text-espresso font-body font-semibold text-sm rounded-full hover:bg-espresso hover:text-cream transition-colors"
            >
              Find Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
