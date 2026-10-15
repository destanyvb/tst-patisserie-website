import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    icon: '🥐',
    label: 'Pastries & Bakery',
    sub: 'Freshly baked daily',
    to: '/menu',
  },
  {
    icon: '🎂',
    label: 'Cakes & Desserts',
    sub: 'Made with love',
    to: '/menu',
  },
  {
    icon: '☕',
    label: 'Coffee & Drinks',
    sub: 'Speciality coffee',
    to: '/menu',
  },
  {
    icon: '🍳',
    label: 'Breakfast & Light Meals',
    sub: 'Fresh and seasonal',
    to: '/menu',
  },
]

const signature = [
  { name: 'Croissants & Pastries',  sub: 'Flaky, buttery, handmade',     img: '/images/gallery_croissants.jpg',    to: '/menu' },
  { name: 'Signature Cakes',        sub: 'Made to order & from the case', img: '/images/hero.jpg',                  to: '/custom-cakes' },
  { name: 'Speciality Coffee',      sub: 'The perfect companion',         img: '/images/gallery_coffee.jpg',        to: '/menu' },
  { name: 'Breakfast & Brunch',     sub: 'Fresh, seasonal, simple',       img: '/images/gallery_baked_goods.jpg',   to: '/menu' },
]

const gallery = [
  { img: '/images/gallery_croissants.jpg',    label: 'Fresh Pastries'   },
  { img: '/images/hero.jpg',                  label: 'Custom Cakes'     },
  { img: '/images/gallery_coffee.jpg',        label: 'Speciality Coffee' },
  { img: '/images/gallery_baked_goods.jpg',   label: 'Breakfast & Brunch' },
]

const reviews = [
  { text: 'The best patisserie I have ever visited. The croissants are extraordinary.', author: 'Sarah M.' },
  { text: 'Absolutely divine. The custard tarts alone are worth the drive from Cape Town.', author: 'James T.' },
  { text: 'Nothing frozen here. Everything is baked fresh that morning. You can taste the difference.', author: 'Leanne K.' },
]

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 md:pt-32 pb-16">
        {/* Sea view background */}
        <img
          src="/images/simons_town_harbour.jpg"
          alt="Simon's Town harbour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Warm cream overlay — light, not dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Simon's Town · Bakery · Café · Patisserie
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-espresso leading-tight mb-4">
                Freshly Baked.{' '}
                <span className="text-gold italic">Lovingly Made.</span>
              </h1>
              <p className="font-body text-base text-muted leading-relaxed mb-8 max-w-md">
                Artisan cakes, flaky pastries, delicious coffee and wholesome meals — all with a view.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className="px-7 py-3.5 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors"
                >
                  View Our Menu
                </Link>
                <Link
                  to="/custom-cakes"
                  className="px-7 py-3.5 border-2 border-gold text-gold font-body font-semibold text-sm rounded-full hover:bg-gold hover:text-white transition-colors"
                >
                  Book a Table
                </Link>
              </div>
            </motion.div>

            {/* Right: overlaid food photos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block h-[440px]"
            >
              {/* Main food photo — top right */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/gallery_tarts.jpg" alt="Fresh tarts" className="w-full h-full object-cover" />
              </div>
              {/* Secondary — bottom left */}
              <div className="absolute bottom-0 left-8 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/images/gallery_croissants.jpg" alt="Butter croissants" className="w-full h-full object-cover" />
              </div>
              {/* Tertiary — middle */}
              <div className="absolute top-20 left-4 w-44 h-44 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/images/gallery_coffee.jpg" alt="Coffee" className="w-full h-full object-cover object-bottom" />
              </div>
              {/* Tag label */}
              <div className="absolute top-4 left-0 bg-white rounded-full px-4 py-2 shadow-md border border-amber-100">
                <p className="font-body text-xs font-semibold text-espresso">Great food, great company,</p>
                <p className="font-body text-xs text-muted">Simon's Town view</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ──────────────────────────────────────── */}
      <section className="bg-amber-50 border-y border-amber-100 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={cat.to} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-amber-100 hover:border-gold hover:shadow-sm transition-all group">
                <span className="text-3xl mb-2">{cat.icon}</span>
                <h3 className="font-display text-sm font-semibold text-espresso leading-tight mb-1 group-hover:text-gold transition-colors">
                  {cat.label}
                </h3>
                <p className="font-body text-xs text-muted">{cat.sub}</p>
                <span className="mt-2 font-body text-xs text-gold font-semibold">View Menu &rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SPLIT ────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src="/images/gallery_display.jpg"
                alt="The Sweetest Thing Patisserie display"
                className="w-full h-80 lg:h-[460px] object-cover rounded-2xl shadow-lg"
              />
              {/* Corner badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-white rounded-2xl px-5 py-3 shadow-lg text-center">
                <p className="font-display text-2xl font-bold leading-none">20+</p>
                <p className="font-body text-xs mt-0.5">Years of baking</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">Our Story</p>
            <h2 className="font-display text-4xl font-bold text-espresso mb-5 leading-tight">
              A Little Taste of France.
            </h2>
            <div className="space-y-4 font-body text-base text-muted leading-relaxed">
              <p>
                The Sweetest Thing is a family-run patisserie nestled on the main street of Simon's Town. Since 2005, Doreen and her team have been getting up early every morning to make something worth eating.
              </p>
              <p>
                Every item is made from scratch that morning. The croissants are laminated by hand. The custard tarts are filled and baked fresh. The menu changes daily — come early, because when we sell out, we are done.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group"
            >
              View Full Menu
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNATURE ITEMS ────────────────────────────────────── */}
      <section className="bg-amber-50 py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-2">
              Featured Favourites
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso">
              Something Sweet for Every Moment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signature.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-amber-100 hover:shadow-md transition-shadow group"
              >
                <div className="overflow-hidden h-44">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-espresso mb-1">{item.name}</h3>
                  <p className="font-body text-xs text-muted mb-3">{item.sub}</p>
                  <Link to={item.to} className="font-body text-xs font-semibold text-gold hover:text-espresso transition-colors">
                    Enquire &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CAKE ENQUIRY ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Custom Cake Studio
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso mb-4">
              Let's Create Something Special.
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              From birthdays and baby showers to weddings and corporate events — we would love to help you create the perfect cake for your occasion.
            </p>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/images/hero.jpg" alt="Custom celebration cake" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 rounded-xl px-4 py-2 text-xs font-body font-semibold text-espresso shadow">
                Custom cakes for every occasion
              </div>
              <div className="absolute bottom-4 right-4 bg-gold text-white rounded-xl px-4 py-2 text-xs font-body font-semibold shadow">
                Custom cakes for life's sweetest moments
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-espresso mb-6">
                Custom Cake Enquiry
              </h3>
              <form
                action="mailto:tstpatisserie@gmail.com"
                method="GET"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-1.5">Name</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full border border-amber-200 rounded-lg px-4 py-2.5 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-1.5">Email or Phone</label>
                  <input type="text" name="contact" required placeholder="So we can reach you" className="w-full border border-amber-200 rounded-lg px-4 py-2.5 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-1.5">Occasion / Event</label>
                  <input type="text" name="occasion" placeholder="Birthday, wedding, anniversary..." className="w-full border border-amber-200 rounded-lg px-4 py-2.5 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-1.5">Date Required</label>
                  <input type="date" name="date" className="w-full border border-amber-200 rounded-lg px-4 py-2.5 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-espresso uppercase tracking-wider mb-1.5">Tell us a little more about what you are looking for</label>
                  <textarea name="details" rows={3} placeholder="Flavours, size, design ideas..." className="w-full border border-amber-200 rounded-lg px-4 py-2.5 font-body text-sm bg-white focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors">
                  Send Enquiry &rarr;
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY STRIP ──────────────────────────────────────── */}
      <section className="bg-amber-50 py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-2">
                A taste of our favourites
              </p>
              <h2 className="font-display text-3xl font-bold text-espresso">Sweet Moments.</h2>
            </div>
            <Link to="/gallery" className="font-body text-sm font-semibold text-espresso hover:text-gold transition-colors hidden sm:block">
              View Gallery &rarr;
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={g.img}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.09 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img src={g.img} alt={g.label} className="w-full h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-300 flex items-end">
                  <p className="font-body text-xs text-white font-semibold px-3 pb-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{g.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/gallery" className="font-body text-sm font-semibold text-espresso hover:text-gold transition-colors">
              View Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIND US ────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img src="/images/coastal_view.jpg" alt="Simon's Town" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-espresso/30" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <p className="font-display text-2xl font-bold text-white leading-tight">
                  A Little Café with a Big Heart.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-3">
              Find Us in Simon's Town
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso mb-6">
              Come in and see what's on the counter.
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <div>
                  <p className="font-body text-sm font-semibold text-espresso">82 St George's Street, Simon's Town, Cape Town</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <div>
                  <p className="font-body text-sm font-semibold text-espresso">021 786 4200</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <div>
                  <p className="font-body text-sm font-semibold text-espresso">Open Daily</p>
                  <p className="font-body text-xs text-muted">Mon to Fri 8am to 5pm · Sat to Sun 9am to 4pm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-7 py-3 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors">
                Get Directions
              </Link>
              <a href="tel:+27217864200" className="px-7 py-3 border-2 border-espresso text-espresso font-body font-semibold text-sm rounded-full hover:bg-espresso hover:text-cream transition-colors">
                021 786 4200
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────── */}
      <section className="bg-amber-50 border-t border-amber-100 py-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-2">What people say</p>
            <h2 className="font-display text-3xl font-bold text-espresso">4.6 stars · 453 reviews on Google.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-gold text-sm">&#9733;</span>)}
                </div>
                <p className="font-body text-sm text-muted leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="font-body text-xs font-semibold text-espresso">{r.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
