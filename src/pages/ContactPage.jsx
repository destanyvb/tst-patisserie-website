import { motion } from 'framer-motion'

const hours = [
  { day: 'Monday to Friday', time: '8:00 am to 5:00 pm' },
  { day: 'Saturday',          time: '9:00 am to 5:00 pm' },
  { day: 'Sunday',            time: '9:00 am to 4:00 pm' },
]

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Page header */}
      <section className="bg-cream/40 border-b border-border py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted mb-3">
              Find us
            </p>
            <h1 className="font-display text-5xl font-bold text-espresso">
              We are in Simon's Town, open every day.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details + map */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
          >
            {/* Address */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-espresso mb-4">
                Address
              </h2>
              <address className="not-italic font-body text-base text-muted leading-relaxed">
                82 St George's Street<br />
                Simon's Town<br />
                Cape Town, 7995
              </address>
              <a
                href="https://maps.google.com/?q=82+St+George%27s+Street+Simon%27s+Town+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-body text-sm font-semibold text-espresso hover:text-gold transition-colors group"
              >
                Open in Google Maps
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-espresso mb-4">
                Opening hours
              </h2>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-body text-sm text-muted">{day}</span>
                    <span className="font-body text-sm font-semibold text-espresso">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-espresso mb-4">
                Contact
              </h2>
              <div className="space-y-3 font-body text-sm">
                <div>
                  <span className="text-muted">Phone: </span>
                  <a href="tel:+27217864200" className="text-espresso font-semibold hover:text-gold transition-colors">
                    021 786 4200
                  </a>
                </div>
                <div>
                  <span className="text-muted">Email: </span>
                  <a href="mailto:tstpatisserie@gmail.com" className="text-espresso font-semibold hover:text-gold transition-colors">
                    tstpatisserie@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="font-display text-2xl font-bold text-espresso mb-4">
                Follow us
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/sweetestthingpatisserie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-body text-sm text-espresso hover:border-gold hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/p/The-Sweetest-Thing-Patisserie-100063706027211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-body text-sm text-espresso hover:border-gold hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            <iframe
              title="The Sweetest Thing Patisserie map"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=82+St+George%27s+Street+Simon%27s+Town+Cape+Town&output=embed"
            />
          </motion.div>
        </div>
      </section>

      {/* Getting here note */}
      <section className="pb-20 px-4 sm:px-6 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8" style={{ background: '#D8DCBA', border: '1px solid rgba(107,114,69,0.30)' }}>
            <h3 className="font-display text-xl font-semibold text-espresso mb-3">
              How to find us
            </h3>
            <p className="font-body text-sm text-muted leading-relaxed">
              We are on the main road through Simon's Town at 82 St George's Street. Street parking is available on St George's Street and in the surrounding area. We are a short walk from the Boulders Beach penguin colony and the Simon's Town train station.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
