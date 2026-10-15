import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand — real sign logo */}
        <div>
          <img
            src="/images/tst_logo_oval.jpg"
            alt="The Sweetest Thing Pâtisserie"
            className="h-16 w-auto object-contain mb-4 opacity-90"
          />
          <p className="font-body text-sm leading-relaxed text-cream/70">
            French patisserie and cafe in the heart of Simon's Town. Over 40 items baked from scratch every morning.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-base font-semibold text-cream mb-4">
            Opening Hours
          </h4>
          <ul className="font-body text-sm space-y-2 text-cream/70">
            <li className="flex justify-between gap-4">
              <span>Monday to Friday</span>
              <span className="text-cream/90">8:00 am to 5:00 pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="text-cream/90">9:00 am to 5:00 pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="text-cream/90">9:00 am to 4:00 pm</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold text-cream mb-4">
            Find Us
          </h4>
          <address className="not-italic font-body text-sm text-cream/70 space-y-2">
            <p>82 St George's Street<br />Simon's Town, Cape Town<br />7995</p>
            <a href="tel:+27217864200" className="block hover:text-gold transition-colors">
              021 786 4200
            </a>
            <a href="mailto:tstpatisserie@gmail.com" className="block hover:text-gold transition-colors">
              tstpatisserie@gmail.com
            </a>
          </address>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.instagram.com/sweetestthingpatisserie/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-cream/50 hover:text-gold transition-colors tracking-wide uppercase"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/The-Sweetest-Thing-Patisserie-100063706027211/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-cream/50 hover:text-gold transition-colors tracking-wide uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-cream/40">
            &copy; {year} The Sweetest Thing Patisserie. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/30">
            Website by{' '}
            <a
              href="https://biljondollarsystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Biljon Dollar System
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
