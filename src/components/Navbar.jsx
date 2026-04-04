import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/services',   label: 'Services' },
  { to: '/ndis-info',  label: 'NDIS Info' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-100 shadow-soft">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-18 md:h-22">

          {/* ── Logo + NDIS stamp ───────────────────────────────────────── */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center"
              aria-label="AgileAbility – go to homepage"
            >
              <img
                src="/logo.png"
                alt="AgileAbility"
                className="h-14 md:h-18 w-auto object-contain"
              />
            </Link>

            <div className="hidden sm:block w-px h-12 rounded-full bg-slate-200" aria-hidden="true" />

            <img
              src="/ndisregistered.png"
              alt="NDIS Registered Provider"
              className="hidden sm:block h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* ── Desktop nav links ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-brand-700/10 text-brand-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+61403977416"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>0403 977 416</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get Started
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────────── */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          bg-white border-t border-slate-100 shadow-lg
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150
                ${isActive
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+61403977416"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600"
            >
              <Phone className="w-4 h-4 text-brand-700" aria-hidden="true" />
              0403 977 416
            </a>
            <Link to="/contact" className="btn-primary w-full text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
