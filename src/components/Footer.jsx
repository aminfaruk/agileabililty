import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart, ExternalLink, Linkedin } from 'lucide-react'

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const SERVICES = [
  'Personal Activities',
  'Household Tasks',
  'Travel & Transport',
  'Group & Centre Activities',
  'Life Stage Transitions',
  'Daily Tasks & Shared Living',
  'Community Participation',
  'Innovative Community Participation',
  'Life Skills Development',
]

const QUICK_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/services',  label: 'Our Services' },
  { to: '/ndis-info', label: 'NDIS Information' },
  { to: '/contact',   label: 'Contact Us' },
]

const SOCIAL = [
  {
    href:  'https://www.instagram.com/agileability',
    label: 'AgileAbility on Instagram',
    icon:  InstagramIcon,
  },
  {
    href:  'https://www.linkedin.com/company/agile-ability-pty-ltd/',
    label: 'AgileAbility on LinkedIn',
    icon:  Linkedin,
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-block mb-5"
              aria-label="AgileAbility home"
            >
              <img
                src="/logo.png"
                alt="AgileAbility"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Flexible, person-centred NDIS support services tailored to your goals,
              your needs, and your life.
            </p>
            <p className="text-xs text-slate-500 italic mb-6">
              "Flexible support, tailored to your ability."
            </p>

            {/* Social media */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                             text-slate-400 hover:text-white hover:bg-white/15 hover:border-white/20
                             transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-150"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3.5" role="list">
              <li>
                <a
                  href="tel:+61403977416"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-400 transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" aria-hidden="true" />
                  <span>0403 977 416</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@agileability.com.au"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-brand-400 transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" aria-hidden="true" />
                  <span>admin@agileability.com.au</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" aria-hidden="true" />
                  <span>
                    Punchbowl, NSW 2196<br />
                    Australia
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors duration-150"
              >
                Send us an enquiry
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
              <span>© {new Date().getFullYear()} AgileAbility. All rights reserved.</span>
              <span>ABN: 89 676 730 957</span>
              <span>NDIS Support Services</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-accent-500 fill-accent-500" aria-hidden="true" />
              <span>in Australia</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-600 text-center sm:text-left leading-relaxed max-w-3xl">
            The information on this website is general in nature and does not constitute professional advice.
            Please contact us directly to discuss your individual needs and circumstances.
          </p>
        </div>
      </div>
    </footer>
  )
}
