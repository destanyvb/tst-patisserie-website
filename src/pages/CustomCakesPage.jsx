import { motion } from 'framer-motion'

const details = [
  {
    title: 'Come in and speak to us',
    body: 'The best way to discuss a custom cake is to come into the shop. Bring your ideas, tell us the occasion, and we will talk through what is possible.',
  },
  {
    title: 'Give us enough time',
    body: 'Custom cakes take time. The more notice you give us, the better. Aim for at least one week in advance for most orders, more for larger cakes.',
  },
  {
    title: 'What we need to know',
    body: 'The occasion, the date you need it, the size, any flavour preferences, and any design ideas. Photos of inspiration help.',
  },
  {
    title: 'Pricing',
    body: 'Every custom cake is priced based on size and design. We will give you a quote once we understand what you need.',
  },
]

export default function CustomCakesPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
        <img
          src="/images/tst_naked_cake.jpg"
          alt="Custom celebration cake from The Sweetest Thing Patisserie"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/60 mb-4">
              Custom orders
            </p>
            <h1 className="font-display text-5xl font-bold text-cream mb-5">
              Custom cakes for every celebration.
            </h1>
            <p className="font-body text-base text-cream/80 leading-relaxed max-w-xl mx-auto">
              Birthdays, weddings, anniversaries, and any occasion worth celebrating. Made with the same care as everything else on our counter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="mb-12"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso">
              What you need to know before ordering.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {details.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-border rounded-xl p-7"
              >
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <span className="font-display text-sm font-bold text-gold">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-espresso mb-2">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples of our work */}
      <section className="py-20 px-4 sm:px-6" style={{ background: '#FFFBEB' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="mb-10"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Our Work
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso">
              A few examples from the kitchen.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { src: '/images/tst_choc_cake.jpg',              alt: 'Chocolate celebration cake',   pos: 'center 30%' },
              { src: '/images/tst_choc_layer_cake.jpg',      alt: 'Layered chocolate cake',       pos: 'center 35%' },
              { src: '/images/tst_victoria_cake.jpg',        alt: 'Victoria sponge with berries', pos: 'center 80%' },
              { src: '/images/tst_passionfruit_cheesecake2.jpg', alt: 'Passionfruit cheesecake',  pos: 'center 30%' },
              { src: '/images/tst_strawberry_cupcakes.jpg',  alt: 'Strawberry cupcakes',          pos: 'center 40%' },
              { src: '/images/tst_white_choc_dome.jpg',      alt: 'White chocolate dome',         pos: 'center'     },
            ].map(({ src, alt, pos }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: pos }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 rounded-2xl p-6 text-center border border-pyellowMid/50"
            style={{ background: 'rgba(255,255,255,0.7)' }}
          >
            <p className="font-body text-sm text-muted leading-relaxed max-w-md mx-auto">
              Every cake is made to order. Come in and speak to us, or fill in the form below to start planning yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-parchment border-t border-border py-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="mb-10"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              Get in touch
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso mb-3">
              Custom cake enquiry.
            </h2>
            <p className="font-body text-sm text-muted">
              Fill in the form below and we will get back to you. For urgent enquiries, call us on 021 786 4200.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            action="mailto:tstpatisserie@gmail.com"
            method="GET"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="082 000 0000"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                  Occasion
                </label>
                <select
                  name="occasion"
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select occasion</option>
                  <option>Birthday</option>
                  <option>Wedding</option>
                  <option>Anniversary</option>
                  <option>Baby shower</option>
                  <option>Other celebration</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                  Date needed
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-2">
                Tell us about your cake
              </label>
              <textarea
                name="details"
                rows={5}
                className="w-full border border-border rounded-lg px-4 py-3 font-body text-sm text-espresso bg-white placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Flavour preferences, design ideas, size, number of people it needs to serve..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors"
            >
              Send Enquiry
            </button>

            <p className="font-body text-xs text-muted text-center">
              We aim to respond within 24 hours. You can also call us on{' '}
              <a href="tel:+27217864200" className="font-semibold text-espresso hover:text-gold transition-colors">
                021 786 4200
              </a>
              .
            </p>
          </motion.form>
        </div>
      </section>

    </div>
  )
}
