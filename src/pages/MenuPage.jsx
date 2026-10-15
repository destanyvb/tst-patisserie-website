import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
}

const categories = [
  {
    name: 'Pastries and sweet bakes',
    description: 'All made from scratch, every morning. The selection changes daily.',
    items: [
      { name: 'Butter croissants',                  note: 'Laminated by hand' },
      { name: 'Pasteis de nata',                    note: 'Portuguese custard tarts' },
      { name: 'Lemon raspberry tartlets',            note: 'A house favourite' },
      { name: 'Chocolate brownie mousse tart',       note: '' },
      { name: 'Pecan pie',                          note: '' },
      { name: 'Lemon meringues',                    note: '' },
      { name: 'Eclairs',                            note: '' },
      { name: 'Muffins',                            note: 'Hearty, not sweet' },
      { name: 'Scones',                             note: 'Best served warm with cream and jam' },
      { name: 'Creamy tartlets',                    note: 'Daily rotating selection' },
    ],
  },
  {
    name: 'Savoury',
    description: 'For those who want something more than something sweet.',
    items: [
      { name: 'Quiche of the day',    note: 'Changes daily' },
      { name: 'Flaky pastry pies',    note: '' },
      { name: 'Toasties',             note: '' },
      { name: 'Greek salad',          note: '' },
      { name: 'Toasted sandwiches',   note: '' },
    ],
  },
  {
    name: 'Beverages',
    description: 'Quality coffee and other drinks to go with your pastry.',
    items: [
      { name: 'Coffee', note: 'Freshly brewed' },
      { name: 'Other hot and cold beverages', note: '' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Page header */}
      <section className="bg-cream/40 border-b border-border py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              The menu
            </p>
            <h1 className="font-display text-5xl font-bold text-espresso mb-5">
              Over 40 items, baked fresh every morning.
            </h1>
            <p className="font-body text-base text-muted leading-relaxed max-w-xl mx-auto">
              The selection below gives you a sense of what to expect. The menu rotates daily. The best way to know is to come in and see what's on the counter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu categories */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
            >
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-espresso mb-2">
                  {cat.name}
                </h2>
                <p className="font-body text-sm text-muted">
                  {cat.description}
                </p>
                <div className="w-10 h-0.5 bg-gold mt-4" />
              </div>

              <div className="space-y-2">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    className="flex items-baseline justify-between py-3 border-b border-border/60 group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-body text-base text-espresso font-medium group-hover:text-gold transition-colors">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="font-body text-xs text-muted italic">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily note */}
      <section className="pb-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto">
          <div className="bg-espresso rounded-2xl p-8 text-center">
            <p className="font-display text-xl font-semibold text-cream mb-3">
              The menu changes every day.
            </p>
            <p className="font-body text-sm text-cream/70 max-w-md mx-auto leading-relaxed">
              We do not take phone orders for specific items. Come early for the best selection. We sell out.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+27217864200"
                className="px-6 py-2.5 bg-cream text-espresso font-body text-sm font-semibold rounded-full hover:bg-gold transition-colors"
              >
                Call 021 786 4200
              </a>
              <a
                href="https://maps.google.com/?q=82+St+George%27s+Street+Simon%27s+Town+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-cream/30 text-cream font-body text-sm font-semibold rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
