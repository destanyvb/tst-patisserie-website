import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#EBF6FA' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand — striped oval badge */}
        <div>
          <div className="relative flex items-center justify-center w-[120px] h-[68px] mb-5">
            <div
              className="absolute inset-0 rounded-[50%]"
              style={{ background: 'repeating-linear-gradient(90deg, #C8A865 0px, #C8A865 4px, #FAE9A0 4px, #FAE9A0 8px)' }}
            />
            <div className="absolute inset-[9px] rounded-[50%]" style={{ background: '#FAF7F2' }} />
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

        {/* Opening Hours */}
        <div>
          <h4 className="font-display text-base font-semibold text-espresso mb-4">
            Opening Hours
          </h4>
          <ul className="font-body text-sm space-y-2 text-espresso/70">
            <li className="flex gap-3">
              <span className="w-24 flex-shrink-0 font-medium text-espresso/80">Mon to Fri</span>
              <span>8:00 am to 5:00 pm</span>
            </li>
            <li className="flex gap-3">
              <span className="w-24 flex-shrink-0 font-medium text-espresso/80">Saturday</span>
              <span>9:00 am to 5:00 pm</span>
            </li>
            <li className="flex gap-3">
              <span className="w-24 flex-shrink-0 font-medium text-espresso/80">Sunday</span>
              <span>9:00 am to 4:00 pm</span>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-base font-semibold text-espresso mb-4">
            Contact Us
          </h4>
          <div className="space-y-3">
            <a
              href="mailto:tstpatisserie@gmail.com"
              className="flex items-center gap-3 font-body text-sm text-espresso/70 hover:text-gold transition-colors"
            >
              <Mail size={16} strokeWidth={1.8} className="flex-shrink-0" />
              tstpatisserie@gmail.com
            </a>
            <a
              href="https://www.instagram.com/sweetestthingpatisserie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-espresso/70 hover:text-gold transition-colors"
            >
              <span className="flex-shrink-0"><IgIcon /></span>
              @sweetestthingpatisserie
            </a>
            <a
              href="https://www.facebook.com/p/The-Sweetest-Thing-Patisserie-100063706027211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-espresso/70 hover:text-gold transition-colors"
            >
              <span className="flex-shrink-0"><FbIcon /></span>
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom blue block */}
      <div style={{ background: '#1B4965' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-cream/70">
            &copy; {year} The Sweetest Thing Patisserie. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/50">
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
