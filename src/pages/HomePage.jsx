import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const reviews = [
  {
    text: 'The best patisserie I have ever visited. The croissants are extraordinary.',
    author: 'Sarah M.',
  },
  {
    text: 'Absolutely divine. The custard tarts alone are worth the drive from Cape Town.',
    author: 'James T.',
  },
  {
    text: 'Nothing frozen here. Everything is baked fresh that morning. You can taste the difference.',
    author: 'Leanne K.',
  },
]

const signature = [
  { name: 'Butter Croissants',   note: 'Laminated by hand each morning',       img: '/images/gallery_croissants.jpg' },
  { name: 'Pasteis de Nata',     note: 'Portuguese custard tarts, baked fresh', img: '/images/gallery_custard_tarts.jpg' },
  { name: 'Creamy Tartlets',     note: 'Rotating daily selection',              img: '/images/gallery_tarts.jpg' },
  { name: 'Quiche of the Day',   note: 'Changes every morning',                 img: '/images/gallery_baked_goods.jpg' },
]

export default function HomePage() {
  return (
    <div>

      {/* Hero - full bleed photo */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/gallery_display.jpg"
          alt="The Sweetest Thing Patisserie display"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-cream/70 mb-5">
              Simon's Town, Cape Town
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cream leading-tight mb-4">
              Freshly baked,{' '}
              <em className="text-gold not-italic">every day.</em>
            </h1>
            <p className="font-body text-base sm:text-lg text-cream/80 leading-relaxed mb-10 max-w-xl mx-auto">
              Over 40 items made from scratch each morning at 82 St George's Street. When we sell out, we are done.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/menu"
                className="px-8 py-3.5 bg-gold text-espresso font-body font-semibold text-sm rounded-full hover:bg-gold/90 transition-colors"
              >
                See the Menu
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border-2 border-cream/60 text-cream font-body font-semibold text-sm rounded-full hover:border-cream hover:bg-cream/10 transition-colors"
              >
                Find Us
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-cream/30" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-espresso py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: '20+', label: 'Years open' },
            { value: '40+', label: 'Items daily' },
            { value: '4.6', label: 'Google rating' },
            { value: '453', label: 'Reviews' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center min-w-[80px]">
              <span className="font-display text-2xl font-bold text-gold">{value}</span>
              <span className="font-body text-xs text-cream/60 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/hero.jpg"
              alt="A freshly baked creation from The Sweetest Thing Patisserie"
              className="w-full h-80 lg:h-[480px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Since 2005
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso mb-5 leading-tight">
              Made from scratch. Every single morning.
            </h2>
            <div className="space-y-4 font-body text-base text-muted leading-relaxed">
              <p>
                Doreen Alcock opened The Sweetest Thing Patisserie in Simon's Town in 2005. Every item on the counter was made that morning. Not yesterday. Made from scratch, in the kitchen, that day.
              </p>
              <p>
                The menu changes every morning. When we sell out, we are done. No restocking with frozen items. No phone orders for specific items. Just fresh pastry and honest baking.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group"
            >
              Read our story
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Signature items grid */}
      <section className="bg-parchment py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              What to expect
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso">
              A taste of what is on the counter.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signature.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-espresso mb-1">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-muted italic">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block px-8 py-3.5 bg-espresso text-cream font-body font-semibold text-sm rounded-full hover:bg-espresso/90 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="grid grid-cols-3 h-64 sm:h-80">
        <div className="overflow-hidden">
          <img src="/images/gallery_coffee.jpg"     alt="Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden">
          <img src="/images/gallery_tarts.jpg"      alt="Fresh tarts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden">
          <img src="/images/gallery_baked_goods.jpg" alt="Freshly baked goods" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-espresso py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mb-3">
              What people say
            </p>
            <h2 className="font-display text-3xl font-bold text-cream">
              4.6 on Google. 453 reviews.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="border border-cream/10 rounded-xl p-7"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-gold text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="font-body text-sm text-cream/80 leading-relaxed mb-4 italic">
                  "{r.text}"
                </p>
                <p className="font-body text-xs text-cream/40 font-semibold">{r.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cakes CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Special occasions
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso mb-5">
              Custom cakes for your celebration.
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-7">
              Birthdays, weddings, anniversaries. We make custom celebration cakes to order. Come in and speak to us, or submit an enquiry and we will be in touch.
            </p>
            <Link
              to="/custom-cakes"
              className="inline-block px-8 py-3.5 bg-gold text-espresso font-body font-semibold text-sm rounded-full hover:bg-gold/90 transition-colors"
            >
              Custom Cake Enquiry
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/hero.jpg"
              alt="Custom celebration cake"
              className="w-full h-72 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-cream/30 border-t border-border py-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
          >
            <h2 className="font-display text-3xl font-bold text-espresso mb-8">
              Open every day.
            </h2>
            <div className="inline-block text-left space-y-2 mb-8">
              {[
                { day: 'Monday to Friday', time: '8:00 am to 5:00 pm' },
                { day: 'Saturday',          time: '9:00 am to 5:00 pm' },
                { day: 'Sunday',            time: '9:00 am to 4:00 pm' },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between gap-12 py-2 border-b border-border">
                  <span className="font-body text-sm text-muted">{day}</span>
                  <span className="font-body text-sm font-semibold text-espresso">{time}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted mb-6">
              82 St George's Street, Simon's Town, Cape Town
            </p>
            <Link
              to="/contact"
              className="inline-block px-7 py-3 border-2 border-espresso text-espresso font-body font-semibold text-sm rounded-full hover:bg-espresso hover:text-cream transition-colors"
            >
              Get Directions
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
