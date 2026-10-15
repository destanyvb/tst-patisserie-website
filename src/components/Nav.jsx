import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',             label: 'Home'         },
  { to: '/menu',         label: 'Menu'         },
  { to: '/about',        label: 'Our Story'    },
  { to: '/gallery',      label: 'Gallery'      },
  { to: '/custom-cakes', label: 'Custom Cakes' },
  { to: '/contact',      label: 'Find Us'      },
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
          ? 'bg-parchment/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-parchment/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo / wordmark */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-lg md:text-xl font-semibold text-espresso tracking-wide">
            The Sweetest Thing
          </span>
          <span className="text-[10px] font-body font-light text-muted tracking-[0.15em] uppercase">
            Patisserie · Simon's Town
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          <a
            href="tel:+27217864200"
            className="ml-2 px-5 py-2 bg-espresso text-cream font-body text-sm font-semibold rounded-full tracking-wide hover:bg-espresso/90 transition-colors"
          >
            021 786 4200
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-espresso"
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
        <div className="md:hidden bg-parchment border-t border-border px-4 pb-6">
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
            <a
              href="tel:+27217864200"
              className="mt-2 inline-block px-5 py-3 bg-espresso text-cream font-body text-sm font-semibold rounded-full text-center"
            >
              Call 021 786 4200
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
