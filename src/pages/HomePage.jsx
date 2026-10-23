import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Wheat, Cake, Coffee, UtensilsCrossed } from 'lucide-react'

const up = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: 0.7, ease: 'easeOut', delay },
})

const categories = [
  { Icon: Wheat,           label: 'Pastries & Bakery',      sub: 'Freshly baked daily',  to: '/menu' },
  { Icon: Cake,            label: 'Cakes & Desserts',        sub: 'Made with love',       to: '/menu' },
  { Icon: Coffee,          label: 'Coffee & Drinks',         sub: 'Speciality coffee',    to: '/menu' },
  { Icon: UtensilsCrossed, label: 'Breakfast & Light Meals', sub: 'Fresh and seasonal',   to: '/menu' },
]

const signature = [
  { name: 'Celebration Cakes',  sub: 'Naked, layered, dressed with fresh fruit',     img: '/images/tst_naked_cake.jpg',     to: '/custom-cakes', pos: 'center 50%' },
  { name: 'Signature Desserts', sub: 'Fresh tarts and desserts from the case',        img: '/images/tst_fruit_tart.webp',    to: '/menu',         pos: 'center' },
  { name: 'Jam Star Cookies',   sub: 'Buttery linzer cookies, baked in-house',        img: '/images/tst_linzer_cookies.webp',to: '/menu',         pos: 'center' },
  { name: 'Events and Catering',sub: 'Tiered displays and spreads for any occasion',  img: '/images/tst_tiered_stand.jpg',   to: '/contact',      pos: 'center 40%' },
]

const gallery = [
  { img: '/images/tst_cupcakes.jpg',         label: 'Berry Cupcakes', pos: 'center 30%' },
  { img: '/images/tst_choc_dome.webp',      label: 'Chocolate Dome',  pos: 'center'     },
  { img: '/images/tst_victoria_cake.jpg',   label: 'Victoria Sponge', pos: 'center 75%' },
  { img: '/images/tst_caramel_tart.webp',   label: 'Caramel Tart',    pos: 'center'     },
]

const reviews = [
  { text: 'The best patisserie I have ever visited. The croissants are extraordinary.', author: 'Sarah M.' },
  { text: 'Absolutely divine. The custard tarts alone are worth the drive from Cape Town.', author: 'James T.' },
  { text: 'Nothing frozen. Everything made fresh that morning. You can taste the difference.', author: 'Leanne K.' },
]

export default function HomePage() {
  return (
    <div className="bg-cream overflow-hidden">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Coastal café hero — harbour view, yellow umbrella, croissant on mosaic table */}
        <img
          src="/images/hero_cafe_coastal.webp"
          alt="The Sweetest Thing Patisserie — café by the harbour in Simon's Town"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* Soft radial glow centred behind the text — photo visible at edges and right */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 58% 78% at 28% 50%, rgba(250,247,242,0.93) 0%, rgba(250,247,242,0.78) 30%, rgba(250,247,242,0.40) 58%, rgba(250,247,242,0.00) 82%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pb-20 pt-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="font-body text-[10px] tracking-[0.34em] uppercase text-espresso/55 mb-3">
                Simon's Town
              </p>
              <h1 className="font-display text-[3.2rem] sm:text-[4.8rem] lg:text-[5.8rem] font-bold text-espresso leading-[1.0] uppercase tracking-[0.02em] mb-1">
                The Sweetest Thing
              </h1>
              <p className="font-script text-3xl sm:text-4xl text-espresso mb-7" style={{ letterSpacing: '0.01em' }}>
                Pâtisserie &nbsp;·&nbsp; Bakery &nbsp;·&nbsp; Café
              </p>
              <p className="font-body text-base text-espresso/70 leading-relaxed mb-9 max-w-sm">
                Freshly baked pastries, handcrafted cakes, wholesome meals and exceptional coffee, all with a view.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/menu"
                  className="px-8 py-3.5 bg-espresso text-cream font-body font-semibold text-sm tracking-[0.08em] uppercase rounded hover:bg-espresso/85 transition-all shadow-sm">
                  View Our Menu &rarr;
                </Link>
                <Link to="/custom-cakes"
                  className="px-8 py-3.5 border border-espresso/35 text-espresso font-body font-semibold text-sm tracking-[0.08em] uppercase rounded hover:border-espresso hover:bg-espresso/5 transition-all">
                  Make an Enquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* ── CATEGORY STRIP ──────────────────────────────────── */}
      <section className="bg-sand border-y border-border py-2">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-border/60">
            {categories.map(({ Icon, label, sub, to }, i) => (
              <motion.div key={label} {...up(i * 0.08)}>
                <Link to={to}
                  className="flex flex-col items-center text-center px-6 py-9 group hover:bg-white/50 transition-colors">
                  <div className="mb-5 relative flex items-center justify-center w-16 h-16 rounded-full border border-gold/35 bg-white/60 group-hover:border-gold/70 group-hover:bg-gold/8 transition-all duration-300 shadow-sm">
                    <div className="absolute inset-[5px] rounded-full border border-gold/15 group-hover:border-gold/30 transition-colors" />
                    <Icon
                      className="relative z-10 transition-colors group-hover:text-gold"
                      style={{ width: 26, height: 26, strokeWidth: 1.2, color: '#2C2015' }}
                    />
                  </div>
                  <h3 className="font-body text-[11px] font-bold text-espresso tracking-[0.18em] uppercase mb-1.5 leading-tight">
                    {label}
                  </h3>
                  <p className="font-body text-xs text-muted mb-4 leading-snug">{sub}</p>
                  <span className="font-body text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors group-hover:text-gold" style={{ color: '#9EC4D5' }}>
                    View Menu &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT: A LITTLE TASTE OF FRANCE ────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div {...up()} className="relative">
            <img
              src="/images/tst_catering_display.webp"
              alt="Pastry and cake display at The Sweetest Thing Patisserie"
              className="w-full h-[460px] object-cover rounded-3xl shadow-lg"
              style={{ objectPosition: 'center 30%' }}
            />
            {/* Soft pastel blue accent square behind photo */}
            <div className="absolute -bottom-5 -left-5 w-36 h-36 rounded-3xl bg-pbluePale border border-pblueMid/50 -z-10" />
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl bg-pyellowPale border border-pyellowMid/50 -z-10" />
          </motion.div>

          <motion.div {...up(0.15)}>
            <p className="font-body text-xs tracking-[0.22em] uppercase text-pblue font-semibold mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-espresso mb-6 leading-tight">
              A Little Taste{' '}
              <em className="not-italic italic" style={{ color: '#C8A865' }}>of France.</em>
            </h2>
            <div className="space-y-4 font-body text-base text-muted leading-relaxed mb-8">
              <p>
                The Sweetest Thing is a family-run patisserie nestled on the main street of Simon's Town. Since 2005, Doreen and her team have been getting up early every morning to make something worth eating.
              </p>
              <p>
                Every item is made from scratch that morning. The croissants are laminated by hand. The menu changes daily — come early, because when we sell out, we are done.
              </p>
            </div>
            <div className="flex gap-6 mb-8">
              {[{ n: '20+', l: 'Years open' }, { n: '40+', l: 'Items daily' }, { n: '4.6★', l: 'Google' }].map(({ n, l }) => (
                <div key={l} className="text-center">
                  <p className="font-display text-2xl font-bold text-espresso">{n}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/about"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group">
              Read our full story
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SIGNATURE ITEMS ─────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6" style={{ background: '#EBF6FA' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...up()} className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-pblue font-semibold mb-3">
              Featured Favourites
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso">
              Something Sweet for Every Moment.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signature.map((item, i) => (
              <motion.div key={item.name} {...up(i * 0.1)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-pblueMid/20">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: item.pos }} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-espresso mb-1">{item.name}</h3>
                  <p className="font-body text-xs text-muted leading-relaxed mb-4">{item.sub}</p>
                  <Link to={item.to}
                    className="font-body text-xs font-semibold text-pblue hover:text-gold transition-colors">
                    Enquire &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CAKE ENQUIRY ──────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6" style={{ background: '#FFFBEB' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Left: copy + image fills remaining height */}
          <motion.div {...up()} className="flex flex-col">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-gold font-semibold mb-4">
              Custom Cake Studio
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-espresso mb-5 leading-tight">
              Let's Create Something{' '}
              <em className="not-italic italic" style={{ color: '#C8A865' }}>Special.</em>
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              From birthdays and baby showers to weddings and anniversaries. Come in and speak to us, or fill in the form and we will get back to you.
            </p>
            <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[340px] shadow-md">
              <img src="/images/tst_victoria_sponge.webp" alt="Custom celebration cake"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block font-body text-xs font-semibold text-espresso bg-pyellowMid/90 rounded-full px-4 py-2">
                  Custom cakes for every occasion
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: form — pastel yellow card */}
          <motion.div {...up(0.15)}>
            <div className="rounded-3xl border border-pyellowMid/60 p-8" style={{ background: 'white' }}>
              <h3 className="font-display text-xl font-semibold text-espresso mb-1">Custom Cake Enquiry</h3>
              <p className="font-body text-sm text-muted mb-6">We aim to respond within 24 hours.</p>
              <form action="mailto:tstpatisserie@gmail.com" method="GET" encType="text/plain" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[11px] font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">Name</label>
                    <input type="text" name="name" required placeholder="Your name"
                      className="w-full bg-pyellowPale border border-pyellowMid/50 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block font-body text-[11px] font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">Phone</label>
                    <input type="tel" name="phone" placeholder="082 000 0000"
                      className="w-full bg-pyellowPale border border-pyellowMid/50 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-[11px] font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">Occasion</label>
                  <input type="text" name="occasion" placeholder="Birthday, wedding, anniversary..."
                    className="w-full bg-pyellowPale border border-pyellowMid/50 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-[11px] font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">Date Required</label>
                  <input type="date" name="date"
                    className="w-full bg-pyellowPale border border-pyellowMid/50 rounded-xl px-4 py-3 font-body text-sm text-muted focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-body text-[11px] font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">Tell us more</label>
                  <textarea name="details" rows={3} placeholder="Size, flavours, design ideas..."
                    className="w-full bg-pyellowPale border border-pyellowMid/50 rounded-xl px-4 py-3 font-body text-sm text-espresso placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/85 transition-all">
                  Send Enquiry &rarr;
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ───────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div {...up()} className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.22em] uppercase text-gold font-semibold mb-2">
                From the Counter
              </p>
              <h2 className="font-display text-4xl font-bold text-espresso">
                A glimpse of what we bake.
              </h2>
            </div>
            <Link to="/gallery"
              className="hidden sm:inline-flex items-center gap-1 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group">
              View Gallery
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <motion.div key={g.img} {...up(i * 0.09)}
                className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                <img src={g.img} alt={g.label}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: g.pos || 'center' }} />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-all duration-300 flex items-end">
                  <p className="font-body text-xs text-white font-semibold px-4 pb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {g.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND US ─────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 bg-pbluePale">
        <div className="max-w-6xl mx-auto">

          <motion.div {...up()} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-pblue font-semibold mb-3">
              Find Us in Simon's Town
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-espresso">
              Come and see what's on the counter.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* Left: café exterior photo */}
            <motion.div {...up()} className="relative rounded-3xl overflow-hidden shadow-lg h-80 lg:h-auto" style={{ minHeight: 280 }}>
              <img
                src="/images/tst_exterior.webp"
                alt="The Sweetest Thing Patisserie on St George's Street, Simon's Town"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
              {/* Right-edge fade into centre content block */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(235,246,250,0.75) 0%, rgba(235,246,250,0.25) 18%, transparent 36%)' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg font-bold text-cream leading-snug drop-shadow-lg">
                  A Little Café with a Big Heart.
                </p>
              </div>
            </motion.div>

            {/* Middle: contact info */}
            <motion.div {...up(0.1)}
              className="flex flex-col justify-center rounded-3xl p-8 shadow-sm border border-pblueMid/30"
              style={{ background: 'rgba(255,255,255,0.75)' }}>
              <div className="space-y-5 mb-8">
                {[
                  { t: '82 St George\'s Street, Simon\'s Town, Cape Town', s: null },
                  { t: '021 786 4200', s: null },
                  { t: 'Open Daily', s: 'Mon to Fri 8am to 5pm · Sat to Sun 9am to 4pm' },
                ].map(({ t, s }) => (
                  <div key={t} className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-pblue flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm font-semibold text-espresso">{t}</p>
                      {s && <p className="font-body text-xs text-muted mt-0.5">{s}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link to="/contact"
                  className="px-6 py-3 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/85 transition-all text-center">
                  Get Directions
                </Link>
                <a href="tel:+27217864200"
                  className="px-6 py-3 border border-espresso/30 text-espresso font-body font-semibold text-sm rounded-full hover:border-espresso transition-all text-center">
                  021 786 4200
                </a>
              </div>
            </motion.div>

            {/* Right: Google Maps embed */}
            <motion.div {...up(0.2)} className="relative rounded-3xl overflow-hidden shadow-lg h-80 lg:h-auto" style={{ minHeight: 280 }}>
              <iframe
                title="The Sweetest Thing Patisserie on Google Maps"
                src="https://maps.google.com/maps?q=The+Sweetest+Thing+Patisserie,+82+St+George%27s+Street,+Simon%27s+Town,+Cape+Town&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Left-edge fade into centre content block */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(235,246,250,0.75) 0%, rgba(235,246,250,0.25) 18%, transparent 36%)' }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-cream border-t border-border mb-16 md:mb-0">
        <div className="max-w-5xl mx-auto">
          <motion.div {...up()} className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.22em] uppercase text-gold font-semibold mb-2">
              What People Say
            </p>
            <h2 className="font-display text-3xl font-bold text-espresso">
              4.6 stars &nbsp;·&nbsp; 453 Google reviews.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} {...up(i * 0.1)}
                className="bg-white rounded-3xl border border-border p-7 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-gold text-base">&#9733;</span>
                  ))}
                </div>
                <p className="font-body text-sm text-muted leading-relaxed mb-5 italic">"{r.text}"</p>
                <p className="font-body text-xs font-semibold text-espresso">{r.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
