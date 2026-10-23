import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',             label: 'Home'         },
  { to: '/menu',         label: 'Menu'         },
  { to: '/about',        label: 'Our Story'    },
  { to: '/gallery',      label: 'Gallery'      },
  { to: '/custom-cakes', label: 'Custom Cakes' },
  { to: '/contact',      label: 'Contact'      },
]

export default function Nav() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location                = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top enquiry bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-amber-50 border-b border-amber-100 text-xs font-body text-muted">
        <span>Have a question? Want to place an order or enquiry? <Link to="/custom-cakes" className="font-semibold text-espresso hover:text-gold transition-colors underline underline-offset-2">Click here to place your order</Link></span>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/sweetestthingpatisserie/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
          <a href="https://www.facebook.com/p/The-Sweetest-Thing-Patisserie-100063706027211/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Oval badge logo — replicating the original hanging sign */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="relative flex items-center justify-center w-[128px] h-[74px] md:w-[148px] md:h-[86px]">
            {/* Striped outer ring — alternating gold and pale cream, matching the sign's border */}
            <div
              className="absolute inset-0 rounded-[50%]"
              style={{ background: 'repeating-linear-gradient(90deg, #C9A040 0px, #C9A040 3px, #F7E88A 3px, #F7E88A 6px)' }}
            />
            {/* Thin dark inner ring — creates separation between stripes and content */}
            <div className="absolute inset-[5px] rounded-[50%]" style={{ background: '#B8902E' }} />
            {/* White interior of the oval */}
            <div className="absolute inset-[7px] rounded-[50%] group-hover:opacity-95 transition-opacity" style={{ background: '#FFFEF8' }} />
            {/* Text — mirroring the sign: small "The", large "Sweetest Thing", medium "Pâtisserie" */}
            <div className="relative z-10 text-center leading-none px-3">
              <div className="font-logo text-[9px] md:text-[10.5px] text-espresso leading-none">The</div>
              <div className="font-logo text-[15px] md:text-[17px] text-espresso leading-snug -mt-px">Sweetest Thing</div>
              <div className="font-logo text-[12px] md:text-[14px] text-espresso leading-none -mt-px">Pâtisserie</div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-espresso font-semibold'
                    : 'text-muted hover:text-espresso'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+27217864200"
            className="font-body text-sm text-muted hover:text-espresso transition-colors"
          >
            021 786 4200
          </a>
          <Link
            to="/custom-cakes"
            className="px-5 py-2.5 font-body text-sm font-bold rounded-full transition-colors shadow-sm hover:opacity-90"
            style={{ background: '#F5DFA0', color: '#2C2015' }}
          >
            Make Enquiry
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-espresso"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-amber-100 px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-body text-base py-1 ${
                    isActive ? 'text-espresso font-semibold' : 'text-muted'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/custom-cakes"
              className="mt-2 inline-block px-5 py-3 font-body text-sm font-bold rounded-full text-center"
              style={{ background: '#F5DFA0', color: '#2C2015' }}
            >
              Make Enquiry
            </Link>
            <a
              href="tel:+27217864200"
              className="inline-block px-5 py-3 border border-border text-espresso font-body text-sm font-semibold rounded-full text-center"
            >
              Call 021 786 4200
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
