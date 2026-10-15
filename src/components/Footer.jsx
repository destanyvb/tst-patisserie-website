import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#EBF6FA' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand — striped oval badge matching the original hanging sign */}
        <div>
          <div className="relative flex items-center justify-center w-[120px] h-[68px] mb-5">
            {/* Alternating gold / light-yellow bands */}
            <div className="absolute inset-0 rounded-[50%]" style={{ background: '#C8A865' }} />
            <div className="absolute inset-[3px] rounded-[50%]" style={{ background: '#FAE9A0' }} />
            <div className="absolute inset-[5px] rounded-[50%]" style={{ background: '#C8A865' }} />
            <div className="absolute inset-[7px] rounded-[50%]" style={{ background: '#FAE9A0' }} />
            <div className="absolute inset-[9px] rounded-[50%]" style={{ background: '#C8A865' }} />
            {/* Cream content oval */}
            <div className="absolute inset-[11px] rounded-[50%]" style={{ background: '#FAF7F2' }} />
            {/* Logo text */}
            <div className="relative z-10 text-center px-3 leading-none">
              <div className="font-logo text-[8px] text-espresso leading-none">The</div>
              <div className="font-logo text-[13px] text-espresso leading-tight">Sweetest Thing</div>
              <div className="font-logo text-[11px] text-espresso leading-none">Pâtisserie</div>
            </div>
          </div>
          <p className="font-body text-sm leading-relaxed text-espresso/60">
            French patisserie and café in the heart of Simon's Town. Over 40 items baked from scratch every morning.
          </p>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-base font-semibold text-espresso mb-4">
            Opening Hours
          </h4>
          <ul className="font-body text-sm space-y-2 text-espresso/60">
            <li className="flex justify-between gap-4">
              <span>Monday to Friday</span>
              <span className="text-espresso/80">8:00 am to 5:00 pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="text-espresso/80">9:00 am to 5:00 pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="text-espresso/80">9:00 am to 4:00 pm</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold text-espresso mb-4">
            Find Us
          </h4>
          <address className="not-italic font-body text-sm text-espresso/60 space-y-2">
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
              className="font-body text-xs text-espresso/40 hover:text-gold transition-colors tracking-wide uppercase"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/The-Sweetest-Thing-Patisserie-100063706027211/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-espresso/40 hover:text-gold transition-colors tracking-wide uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-espresso/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-espresso/40">
            &copy; {year} The Sweetest Thing Patisserie. All rights reserved.
          </p>
          <p className="font-body text-xs text-espresso/35">
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
