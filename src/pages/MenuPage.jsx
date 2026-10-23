import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const tabs = [
  {
    id: 'pastries',
    label: 'Pastries & Cakes',
    sections: [
      {
        heading: 'Pastries and Cakes',
        note: 'All baked from scratch every morning. Selection rotates daily.',
        items: [
          { name: 'Apple Nougat Tart',            nuts: true,  price: 'R74'  },
          { name: 'Brownie',                       nuts: true,  price: 'R74'  },
          { name: 'Carrot & Nut Cake',             nuts: true,  price: 'R60'  },
          { name: 'Chocolate Eclairs',                          price: 'R45'  },
          { name: 'Citrus Cheesecake',                          price: 'R66'  },
          { name: 'Custard Tart',                               price: 'R54'  },
          { name: 'Portuguese Custard Tart',                    price: 'R35'  },
          { name: 'Japonaise',                     nuts: true,  price: 'R55',  sub: 'Nutty meringue with hazelnut praline butter cream' },
          { name: 'Lemon Meringue Pie',                         price: 'R50'  },
          { name: 'Lemon Tart',                                 price: 'R60'  },
          { name: 'Pear Frangipane Tart',          nuts: true,  price: 'R74'  },
          { name: 'Pear, Caramel Mousse Cake',     nuts: true,  price: 'R72',  sub: 'Wheat free' },
          { name: 'Pecan Pie',                     nuts: true,  price: 'R60'  },
          { name: 'Lemon Curd Cake',                            price: 'R60'  },
          { name: 'Pine Nut & Orange Cake',        nuts: true,  price: 'R64'  },
          { name: 'Chocolate Ganache Cake',                     price: 'R74'  },
          { name: 'White Chocolate Indulgence',    nuts: true,  price: 'R79',  sub: 'Chocolate sponge with lemon & white chocolate filling' },
        ],
      },
      {
        heading: 'From the Bakery',
        items: [
          { name: 'Butter Croissant',                           price: 'R28'  },
          { name: 'Almond Croissant',              nuts: true,  price: 'R36'  },
          { name: 'Chocolate & Hazelnut Croissant',nuts: true,  price: 'R36'  },
          { name: 'Pain au Raisin',                             price: 'R38'  },
          { name: 'Bostock',                       nuts: true,  price: 'R32'  },
          { name: 'Scone',                                      price: 'R26',  sub: 'Plain' },
          { name: 'Scone',                                      price: 'R48',  sub: 'With butter, cream & jam' },
          { name: 'Fruit Tart',                                 price: 'R40',  sub: 'Small' },
          { name: 'Fruit Tart',                                 price: 'R63',  sub: 'Medium' },
          { name: 'Macaroons',                     nuts: true,  price: 'R20'  },
          { name: 'Cupcake',                                    price: 'from R28' },
          { name: 'Biscuit',                                    price: 'R12'  },
        ],
      },
    ],
  },
  {
    id: 'savoury',
    label: 'Pies & Savoury',
    sections: [
      {
        heading: 'Pies & Quiches',
        items: [
          { name: 'Roasted Chicken & Vegetable Pie',            price: 'R60'  },
          { name: 'Steak & Mushroom Pie',                       price: 'R60'  },
          { name: 'Roasted Lamb & Rosemary Pie',                price: 'R88'  },
          { name: 'Sausage Roll',                               price: 'R46'  },
          { name: 'Spanakopita',                                price: 'R40',  sub: 'Spinach, feta & ricotta in phyllo pastry triangle' },
        ],
      },
      {
        heading: 'Quiches',
        items: [
          { name: 'Leek & Blue Cheese Quiche',                  price: 'R52'  },
          { name: 'Mushroom Herb Quiche',                       price: 'R52'  },
          { name: 'Quiche Lorraine',                            price: 'R52',  sub: 'Bacon & cheddar cheese' },
          { name: 'Sundried Tomato, Feta & Olive Quiche',       price: 'R52'  },
        ],
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    badge: 'Until 12:00',
    sections: [
      {
        heading: 'Breakfast Menu',
        note: 'Served until 12:00. (N) indicates items containing nuts.',
        items: [
          { name: 'Muesli',                        nuts: true,  price: 'R103', sub: 'Homemade, fresh fruit, yoghurt & honey' },
          { name: 'Scrambled Eggs',                             price: 'R79',  sub: 'Plain, with white or brown bread' },
          { name: 'Scrambled Eggs',                             price: 'R103', sub: 'With bacon or ham' },
          { name: 'Scrambled Eggs',                             price: 'R126', sub: 'With smoked salmon trout' },
          { name: 'Eggs Benedict',                              price: 'R121', sub: 'On potato rosti, with bacon or ham' },
          { name: 'Eggs Benedict',                              price: 'R145', sub: 'On potato rosti, with smoked salmon trout' },
          { name: 'Mini Breakfast',                             price: 'R60',  sub: 'Toast, 2 slices bacon, 1 egg & roasted tomatoes' },
          { name: 'Breakfast Basket',                           price: 'R126', sub: 'Poached eggs in toasted bread baskets, bacon, pork sausage, roasted tomatoes & mushrooms' },
          { name: 'Breakfast Rosti',                            price: 'R105', sub: 'Potato rosti, creamed spinach & two poached eggs' },
          { name: 'Omelette',                                   price: 'R60',  sub: 'Plain, with white or brown bread' },
          { name: 'Omelette',                                   price: 'R64',  sub: 'Herbed' },
          { name: 'Substitute toast for Croissant',             price: '+R14' },
        ],
      },
      {
        heading: 'Omelette Add-ons',
        items: [
          { name: 'Smoked Salmon',                              price: 'R48'  },
          { name: 'Bacon or Ham',                               price: 'R33'  },
          { name: 'Creamed Spinach',                            price: 'R23'  },
          { name: 'Cream Cheese, Cheddar or Feta',              price: 'R30'  },
          { name: 'Blue Cheese or Brie',                        price: 'R33'  },
          { name: 'Tomato, Mushroom or Spring Onion',           price: 'R19'  },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    badge: '12:00 to 16:00',
    sections: [
      {
        heading: 'Lunch Menu',
        note: 'Served from 12:00 to 16:00. (N) indicates items containing nuts.',
        items: [
          { name: 'Sesame Chicken Salad',          nuts: true,  price: 'R145', sub: 'Free-range chicken strips, mixed salad, honey & soy dressing' },
          { name: 'Chicken Burger',                nuts: true,  price: 'R156', sub: 'Free-range chicken on ciabatta with mozzarella, tomato & basil pesto, with side salad' },
          { name: 'Beef Burger',                                price: 'R145', sub: '100% beef patty, mature cheddar, caramelised onions, roasted garlic mayo, served with fries' },
        ],
      },
      {
        heading: 'Toasted Sandwiches',
        note: 'Choice of health or white bread, served with side salad.',
        items: [
          { name: 'Cheddar & Tomato',                           price: 'R77'  },
          { name: 'Ham, Cheddar & Tomato',                      price: 'R105' },
          { name: 'Bacon, Brie & Chilli Jam',                   price: 'R120' },
          { name: 'Chicken Mayo',                  nuts: true,  price: 'R107' },
          { name: 'Mozzarella, Tomato & Basil Pesto', nuts: true, price: 'R105' },
          { name: 'Additional Side Salad',                      price: 'R33'  },
          { name: 'Additional Potato Fries',                    price: 'R41'  },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    sections: [
      {
        heading: 'Coffee',
        note: 'All based on an espresso.',
        items: [
          { name: 'Espresso',                                   price: 'R33',  sub: 'Single shot' },
          { name: 'Double Espresso',                            price: 'R42',  sub: 'Double strength' },
          { name: 'Black Coffee',                               price: 'R31',  sub: 'Espresso topped with water' },
          { name: 'Black Coffee Mug',                           price: 'R36',  sub: 'Strong espresso topped with water' },
          { name: 'Coffee',                                     price: 'R36',  sub: 'Espresso topped with water, includes hot or cold milk' },
          { name: 'Coffee Mug',                                 price: 'R40',  sub: 'Strong espresso topped with water, includes hot or cold milk' },
          { name: 'Cappuccino',                                 price: 'R40',  sub: 'Espresso topped with milk and flat foam' },
          { name: 'Cappuccino with Cream',                      price: 'R55'  },
          { name: 'Double Cappuccino',                          price: 'R50',  sub: 'Double strength with milk and flat foam' },
          { name: 'Cappuccino Mug',                             price: 'R46',  sub: 'Espresso topped with milk and flat foam' },
          { name: 'Cappuccino Grande',                          price: 'R55',  sub: 'Double strength shot with milk and flat foam' },
          { name: 'Layered Cafe Latte',                         price: 'R48',  sub: 'Layers of hot milk, coffee & foam' },
          { name: 'Iced Cinnamon Coffee',                       price: 'R48'  },
          { name: 'Hot Chocolate',                              price: 'R74',  sub: 'Made with Belgian chocolate' },
          { name: 'Chocochino',                                 price: 'R79',  sub: 'Espresso with hot chocolate' },
          { name: 'Affagato',                                   price: 'R50',  sub: 'Espresso over vanilla ice cream' },
          { name: 'Alcochino',                                  price: 'R118', sub: 'Espresso with hot chocolate plus Kahlua' },
          { name: 'Irish Coffee',                               price: 'R110', sub: 'Whiskey or Kahlua, coffee & cream' },
          { name: 'Decaf',                                      price: '+R9'  },
          { name: 'Additional Milk',                            price: '+R13' },
          { name: 'Cream',                                      price: '+R18' },
          { name: 'Oat Milk',                                   price: '+R18' },
          { name: 'Almond Milk',                                price: '+R18' },
        ],
      },
      {
        heading: 'Tea',
        items: [
          { name: 'Five Roses',                                 price: 'R31'  },
          { name: 'Rooibos',                                    price: 'R31'  },
          { name: 'Earl Grey',                                  price: 'R31'  },
          { name: 'Dilmah Selection',                           price: 'R39'  },
          { name: 'Chai Latte',                                 price: 'R60'  },
          { name: 'Rooibos Latte',                              price: 'R51'  },
          { name: 'Rooibos Cappuccino',                         price: 'R46'  },
        ],
      },
      {
        heading: 'Cold Drinks',
        items: [
          { name: 'Coke or Coke Light',                         price: 'R33'  },
          { name: 'Appletiser or Graptiser',                    price: 'R39'  },
          { name: 'BOS Iced Tea',                               price: 'R34'  },
          { name: 'Bottled Water',                              price: 'R28',  sub: 'Still or Sparkling' },
        ],
      },
      {
        heading: 'Milkshakes',
        items: [
          { name: 'Vanilla or Caramel',                         price: 'R52'  },
          { name: 'Chocolate',                                  price: 'R55'  },
        ],
      },
      {
        heading: 'Smoothies & Juice',
        items: [
          { name: 'Fruit Smoothie',                             price: 'R55'  },
          { name: 'Homemade Lemonade',                          price: 'R46'  },
          { name: 'Freshly Squeezed Orange Juice',              price: 'R66'  },
        ],
      },
    ],
  },
]

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function MenuPage() {
  const [active, setActive] = useState('pastries')
  const current = tabs.find(t => t.id === active)

  return (
    <div className="pt-16 md:pt-20 bg-cream min-h-screen">

      {/* Page header */}
      <section className="bg-parchment border-b border-border pt-14 pb-0 px-4 sm:px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs tracking-[0.22em] uppercase text-muted mb-3">
            The Sweetest Thing Patisserie
          </p>
          <h1 className="font-script text-6xl sm:text-7xl text-espresso leading-tight mb-4">
            Our Menu
          </h1>
          <p className="font-body text-sm text-muted max-w-md mx-auto leading-relaxed mb-10">
            The selection rotates daily. Come in and see what is on the counter.
            Prices may vary slightly in store.
          </p>
        </motion.div>

        {/* Food photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-3 justify-center max-w-3xl mx-auto"
        >
          {[
            { src: '/images/tst_choc_layer_cake.jpg', alt: 'Chocolate layer cake', pos: 'center 35%' },
            { src: '/images/tst_brownies.jpg',         alt: 'Walnut brownies',      pos: 'center 40%' },
            { src: '/images/tst_pink_cupcakes.webp',   alt: 'Pink cupcakes',        pos: 'center'     },
            { src: '/images/tst_chocolate_slice.jpg',  alt: 'Chocolate slice',      pos: 'center 40%' },
          ].map((img) => (
            <div
              key={img.src}
              className="flex-1 overflow-hidden rounded-t-2xl shadow-sm"
              style={{ height: 140 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Tab nav */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-parchment border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-0 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex-shrink-0 px-5 py-4 font-body text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors whitespace-nowrap ${
                active === tab.id
                  ? 'text-espresso'
                  : 'text-muted hover:text-espresso'
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-1.5 font-body text-[9px] font-normal text-muted/60 normal-case tracking-normal hidden sm:inline">
                  {tab.badge}
                </span>
              )}
              {active === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 mb-16 md:mb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-14"
          >
            {current.sections.map((section, si) => (
              <div key={si}>

                {/* Section heading — script font matching physical menu */}
                <div className="mb-6">
                  <h2 className="font-script text-5xl text-espresso leading-tight mb-1">
                    {section.heading}
                  </h2>
                  <div className="w-12 h-px bg-gold/60 mt-2 mb-3" />
                  {section.note && (
                    <p className="font-body text-xs text-muted italic">
                      {section.note}
                    </p>
                  )}
                </div>

                {/* Items */}
                <div className="space-y-0">
                  {section.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="flex items-baseline justify-between py-2.5 border-b border-border/50 group"
                    >
                      <div className="flex-1 pr-4">
                        <span className="font-body text-[15px] text-espresso font-medium leading-snug">
                          {item.name}
                          {item.nuts && (
                            <span className="font-body text-[10px] text-muted/70 font-normal ml-1.5">(N)</span>
                          )}
                        </span>
                        {item.sub && (
                          <p className="font-body text-xs text-muted italic mt-0.5 leading-snug">
                            {item.sub}
                          </p>
                        )}
                      </div>
                      <span className="font-body text-[13px] font-semibold text-espresso tabular-nums flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Nuts footnote if needed */}
            {current.sections.some(s => s.items.some(i => i.nuts)) && (
              <p className="font-body text-xs text-muted/60 italic">
                (N) indicates items containing nuts.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer note */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 text-center" style={{ background: '#EBF6FA' }}>
            <p className="font-script text-3xl text-espresso mb-2">
              The menu changes every day.
            </p>
            <p className="font-body text-sm text-muted max-w-sm mx-auto leading-relaxed">
              We do not take phone orders for specific items.
              Come early for the best selection. We sell out.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+27217864200"
                className="px-6 py-2.5 bg-espresso text-cream font-body text-sm font-semibold rounded-full hover:bg-espresso/85 transition-colors"
              >
                Call 021 786 4200
              </a>
              <a
                href="https://maps.google.com/?q=82+St+George%27s+Street+Simon%27s+Town+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-espresso/30 text-espresso font-body text-sm font-semibold rounded-full hover:border-gold hover:text-gold transition-colors"
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
