import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, amount: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

const categories = [
  { icon: '🥐', label: 'Pastries & Bakery',       sub: 'Freshly baked daily',    to: '/menu' },
  { icon: '🎂', label: 'Cakes & Desserts',         sub: 'Made with love',         to: '/menu' },
  { icon: '☕', label: 'Coffee & Drinks',           sub: 'Speciality coffee',      to: '/menu' },
  { icon: '🍳', label: 'Breakfast & Light Meals',  sub: 'Fresh and seasonal',     to: '/menu' },
]

const signature = [
  { name: 'Croissants & Pastries',  sub: 'Flaky, buttery, laminated by hand',   img: '/images/gallery_croissants.jpg',     to: '/menu' },
  { name: 'Signature Cakes',        sub: 'Custom made and from the case',        img: '/images/tst_ig_01.jpg',              to: '/custom-cakes' },
  { name: 'Speciality Coffee',      sub: 'The perfect companion',               img: '/images/gallery_coffee.jpg',         to: '/menu' },
  { name: 'Breakfast & Brunch',     sub: 'Fresh, light, and seasonal',          img: '/images/gallery_baked_goods.jpg',    to: '/menu' },
]

const gallery = [
  { img: '/images/tst_ig_01.jpg',              label: 'Custom Cakes'     },
  { img: '/images/tst_ig_02.jpg',              label: 'Fresh Pastries'   },
  { img: '/images/gallery_custard_tarts.jpg',  label: 'Pasteis de Nata'  },
  { img: '/images/gallery_tarts.jpg',          label: 'Daily Tartlets'   },
]

const reviews = [
  { text: 'The best patisserie I have ever visited. The croissants are extraordinary.', author: 'Sarah M.' },
  { text: 'Absolutely divine. The custard tarts alone are worth the drive from Cape Town.', author: 'James T.' },
  { text: 'Nothing frozen. Everything made fresh that morning. You can taste the difference.', author: 'Leanne K.' },
]

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 md:pt-32 pb-16">
        <img
          src="/images/simons_town_harbour.jpg"
          alt="Simon's Town harbour"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Gradient: strong cream on left, fades out right so sea shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-transparent" />
        {/* Subtle lemon warmth at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lemonLight/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              className="max-w-xl"
            >
              <span className="inline-block font-body text-[11px] tracking-[0.22em] uppercase text-navy/60 bg-lemonMid/60 rounded-full px-3 py-1 mb-5">
                Simon's Town · Bakery · Café · Patisserie
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-navy leading-[1.08] mb-5">
                Freshly Baked.{' '}
                <span className="italic" style={{ color: '#C8A865' }}>Lovingly Made.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-muted leading-relaxed mb-9 max-w-md">
                Artisan cakes, flaky pastries, delicious coffee and wholesome meals — all with a view of Simon's Town.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/menu"
                  className="px-8 py-3.5 bg-lemon text-navy font-body font-bold text-sm rounded-full hover:bg-lemon/80 transition-all shadow-md hover:shadow-lg">
                  View Our Menu
                </Link>
                <Link to="/custom-cakes"
                  className="px-8 py-3.5 bg-navy text-white font-body font-semibold text-sm rounded-full hover:bg-navy/90 transition-all">
                  Book a Table
                </Link>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {['4.6 ★ Google', '453 reviews', 'Open every day', 'Since 2005'].map(t => (
                  <span key={t} className="font-body text-xs bg-white/80 border border-skyMid/60 text-navy rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: stacked food photos */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center h-[500px]"
            >
              {/* Big main photo */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2">
                <img src="/images/tst_ig_01.jpg" alt="Fresh bake" className="w-full h-full object-cover" />
              </div>
              {/* Bottom left */}
              <div className="absolute bottom-8 left-0 w-56 h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-white -rotate-2">
                <img src="/images/gallery_croissants.jpg" alt="Croissants" className="w-full h-full object-cover" />
              </div>
              {/* Centre overlap */}
              <div className="absolute top-28 left-16 w-44 h-44 rounded-3xl overflow-hidden shadow-lg border-4 border-white rotate-1">
                <img src="/images/gallery_custard_tarts.jpg" alt="Custard tarts" className="w-full h-full object-cover" />
              </div>
              {/* Floating label */}
              <div className="absolute top-0 left-0 bg-lemon text-navy rounded-2xl px-4 py-2.5 shadow-lg font-body text-xs font-bold">
                Made fresh every morning
              </div>
              {/* Rating badge */}
              <div className="absolute bottom-4 right-8 bg-navy text-white rounded-2xl px-4 py-2.5 shadow-lg text-center">
                <div className="font-display text-xl font-bold text-lemon leading-none">4.6</div>
                <div className="font-body text-[10px] text-white/70 mt-0.5">Google Rating</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CATEGORY GRID ─────────────────────────────────────── */}
      <section className="bg-skyLight border-y border-skyMid/40 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.label} {...fadeUp(i * 0.08)}>
              <Link to={cat.to}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-skyMid/30 hover:border-skyblue hover:shadow-md transition-all group">
                <span className="text-3xl mb-2">{cat.icon}</span>
                <h3 className="font-display text-sm font-bold text-navy leading-tight mb-1 group-hover:text-skyblue transition-colors">
                  {cat.label}
                </h3>
                <p className="font-body text-xs text-muted mb-2">{cat.sub}</p>
                <span className="font-body text-xs text-skyblue font-semibold group-hover:underline">View Menu &rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SPLIT ───────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp()} className="relative">
            <img
              src="/images/tst_ig_02.jpg"
              alt="Fresh pastries from The Sweetest Thing"
              className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            {/* Lemon accent strip */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lemon rounded-3xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-skyMid rounded-2xl -z-10" />
            {/* Years badge */}
            <div className="absolute top-6 right-6 bg-navy text-white rounded-2xl px-5 py-3 text-center shadow-xl">
              <p className="font-display text-3xl font-bold text-lemon leading-none">20+</p>
              <p className="font-body text-xs text-white/70 mt-1">Years of baking</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-skyblue font-bold bg-skyLight rounded-full px-3 py-1 mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
              A Little Taste{' '}
              <span className="italic text-gold">of France.</span>
            </h2>
            <div className="space-y-4 font-body text-base text-muted leading-relaxed mb-8">
              <p>
                The Sweetest Thing is a family-run patisserie on the main street of Simon's Town — inspired by the flavours of French baking and the beauty of the Cape Peninsula.
              </p>
              <p>
                Every item is made from scratch that morning. The croissants are laminated by hand. The menu changes daily. Come early — when we sell out, we are done for the day.
              </p>
            </div>
            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: '40+',  l: 'Items daily'  },
                { n: '453',  l: 'Reviews'       },
                { n: '4.6★', l: 'Google'        },
              ].map(({ n, l }) => (
                <div key={l} className="text-center p-4 rounded-2xl bg-lemonLight border border-lemonMid/50">
                  <p className="font-display text-2xl font-bold text-navy">{n}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-bold text-navy bg-lemon rounded-full px-7 py-3.5 hover:bg-lemon/80 transition-all shadow-sm group">
              Our full story
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNATURE ITEMS ───────────────────────────────────── */}
      <section className="bg-skyLight py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-skyblue font-bold bg-white rounded-full px-3 py-1 mb-3">
              Featured Favourites
            </span>
            <h2 className="font-display text-4xl font-bold text-navy">
              Something Sweet for Every Moment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signature.map((item, i) => (
              <motion.div key={item.name} {...fadeUp(i * 0.1)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-skyMid/20">
                <div className="overflow-hidden h-48">
                  <img src={item.img} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-navy mb-1">{item.name}</h3>
                  <p className="font-body text-xs text-muted mb-4 leading-relaxed">{item.sub}</p>
                  <Link to={item.to}
                    className="inline-block font-body text-xs font-bold text-navy bg-lemon rounded-full px-4 py-1.5 hover:bg-lemon/80 transition-colors">
                    Enquire &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CAKE ENQUIRY ────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div {...fadeUp()}>
            <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold bg-lemonLight rounded-full px-3 py-1 mb-4">
              Custom Cake Studio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-5 leading-tight">
              Let's Create Something{' '}
              <span className="italic text-gold">Special.</span>
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              From birthdays and baby showers to weddings and corporate events. We would love to help you create the perfect cake for your occasion.
            </p>
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-xl">
              <img src="/images/tst_ig_01.jpg" alt="Custom celebration cake"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-lemon rounded-2xl px-4 py-3 inline-block">
                  <p className="font-body text-xs font-bold text-navy">Custom cakes for life's sweetest moments</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div {...fadeUp(0.15)}>
            <div className="bg-navy rounded-3xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Custom Cake Enquiry</h3>
              <p className="font-body text-sm text-white/60 mb-7">Fill in below and we will be in touch within 24 hours.</p>
              <form action="mailto:tstpatisserie@gmail.com" method="GET" encType="text/plain" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Name</label>
                    <input type="text" name="name" required placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lemon transition-colors" />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" placeholder="082 000 0000"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lemon transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Occasion / Event</label>
                  <input type="text" name="occasion" placeholder="Birthday, wedding, anniversary..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lemon transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Event Date Required</label>
                  <input type="date" name="date"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white/70 focus:outline-none focus:border-lemon transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Tell us a little more</label>
                  <textarea name="details" rows={3} placeholder="Size, flavours, design ideas..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lemon transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-lemon text-navy font-body font-bold text-sm rounded-full hover:bg-lemon/85 transition-all shadow-lg">
                  Send Enquiry &rarr;
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────────────────────── */}
      <section className="bg-lemonLight py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold bg-white rounded-full px-3 py-1 mb-3">
                Sweet Moments
              </span>
              <h2 className="font-display text-4xl font-bold text-navy">A taste of our favourites.</h2>
            </div>
            <Link to="/gallery" className="hidden sm:inline-flex items-center gap-1 font-body text-sm font-bold text-navy bg-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all">
              View Gallery &rarr;
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <motion.div key={g.img} {...fadeUp(i * 0.09)}
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                <img src={g.img} alt={g.label}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-body text-xs text-white font-bold">{g.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US ───────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...fadeUp()} className="relative">
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-xl">
              <img src="/images/coastal_view.jpg" alt="Simon's Town"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-3xl font-bold text-white text-center px-8 leading-tight drop-shadow-xl">
                  A Little Café with a Big Heart.
                </p>
              </div>
            </div>
            {/* Yellow accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-lemon rounded-3xl -z-10" />
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-skyblue font-bold bg-skyLight rounded-full px-3 py-1 mb-4">
              Find Us in Simon's Town
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-7 leading-tight">
              Come and see what's on the counter today.
            </h2>

            <div className="space-y-5 mb-9">
              {[
                { label: '82 St George\'s Street, Simon\'s Town, Cape Town', sub: null },
                { label: '021 786 4200', sub: null },
                { label: 'Open Daily', sub: 'Mon to Fri 8am to 5pm · Sat to Sun 9am to 4pm' },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-lemon mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-bold text-navy">{label}</p>
                    {sub && <p className="font-body text-xs text-muted mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact"
                className="px-7 py-3.5 bg-navy text-white font-body font-bold text-sm rounded-full hover:bg-navy/90 transition-all shadow-md">
                Get Directions
              </Link>
              <a href="tel:+27217864200"
                className="px-7 py-3.5 bg-lemon text-navy font-body font-bold text-sm rounded-full hover:bg-lemon/80 transition-all shadow-md">
                021 786 4200
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="bg-skyLight border-t border-skyMid/30 py-24 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-skyblue font-bold bg-white rounded-full px-3 py-1 mb-3">
              What People Say
            </span>
            <h2 className="font-display text-4xl font-bold text-navy">
              4.6 stars · 453 Google reviews.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="bg-white rounded-3xl border border-skyMid/30 p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-lemon text-lg">&#9733;</span>)}
                </div>
                <p className="font-body text-sm text-muted leading-relaxed mb-5 italic">"{r.text}"</p>
                <p className="font-body text-xs font-bold text-navy">{r.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
