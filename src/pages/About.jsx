import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, Shield, Users, Sparkles,
  CheckCircle2, HeartHandshake, Star
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const VALUES = [
  {
    icon:  Heart,
    title: 'Respect',
    desc:  'We honour the dignity, autonomy, and individuality of every person we support.',
  },
  {
    icon:  Shield,
    title: 'Safety',
    desc:  'The safety and wellbeing of participants and their families is our highest priority.',
  },
  {
    icon:  Sparkles,
    title: 'Excellence',
    desc:  "We're committed to continuous improvement in the quality of care we provide.",
  },
  {
    icon:  HeartHandshake,
    title: 'Partnership',
    desc:  'We work alongside participants, families, and coordinators. Your voice is part of every decision.',
  },
  {
    icon:  Users,
    title: 'Inclusion',
    desc:  'We believe everyone deserves to participate fully in their community and society.',
  },
  {
    icon:  Star,
    title: 'Integrity',
    desc:  "We're honest, transparent, and accountable in everything we do.",
  },
]

const WHY_FAMILIES = [
  'We take the time to truly understand your situation',
  'Clear, jargon-free communication at every step',
  'Consistent, reliable carers you can trust',
  'Responsive to changes in your needs or plan',
  'Genuine partnership with families and support networks',
  'Committed to your long-term goals, not just short-term tasks',
]

export default function About() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-36 pb-20 relative overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-600/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-5">
              About Us
            </span>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              We're here for people, not just to provide a service.
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              AgileAbility was founded on a simple belief: that every person living
              with disability deserves flexible, respectful, and genuinely helpful support.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who We Are ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="who-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="badge mb-4">Who We Are</span>
              <h2 id="who-heading" className="section-heading mb-5">
                A team that genuinely cares
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  AgileAbility is an Australian NDIS support services provider built
                  around one core idea: that support should flex around the person, not
                  the other way around. We understand that every participant has a unique
                  story, unique goals, and unique needs.
                </p>
                <p>
                  Our team brings together experienced support workers, coordinators,
                  and care professionals who are united by a passion for making a real
                  difference in people's lives. We don't do one size fits all. We do
                  right size for you.
                </p>
                <p>
                  Whether you're a participant exploring support options, a parent
                  navigating the NDIS for the first time, or a support coordinator
                  looking for a reliable provider. We're here to make the journey easier.
                </p>
              </div>
            </AnimatedSection>

            {/* Placeholder image / visual */}
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center border border-brand-100 overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-brand-200 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-brand-700" aria-hidden="true" />
                    </div>
                    <p className="text-brand-600 font-medium text-sm">[Team photo placeholder]</p>
                    <p className="text-brand-400 text-xs mt-1">Replace with an image of your team</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card border border-slate-100 px-5 py-3.5">
                  <p className="text-2xl font-bold text-brand-700">30+</p>
                  <p className="text-xs text-slate-500">Participants supported</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-brand-700 rounded-2xl shadow-brand px-5 py-3.5">
                  <p className="text-2xl font-bold text-white">7+</p>
                  <p className="text-xs text-brand-200">Support services</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-brand-700 relative overflow-hidden" aria-labelledby="mission-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-6">
              Our Mission
            </span>
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              "To empower every person we support to live with greater independence,
              dignity, and choice."
            </h2>
            <p className="text-lg text-brand-200 leading-relaxed">
              We do this by building genuine relationships, delivering consistent quality,
              and always putting the participant at the centre of every decision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4">What We Stand For</span>
            <h2 id="values-heading" className="section-heading mb-4">Our values</h2>
            <p className="section-subheading mx-auto">
              These aren't just words on a wall. They're the principles that guide every
              interaction, every decision, and every support plan we create.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <div className="card p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Families Choose Us ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="families-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              {/* Placeholder image */}
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center border border-brand-100 overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-brand-100 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-brand-600" aria-hidden="true" />
                  </div>
                  <p className="text-brand-600 font-medium text-sm">[Family photo placeholder]</p>
                  <p className="text-brand-400 text-xs mt-1">Replace with a warm, inclusive image</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <span className="badge mb-4">Why Families Choose Us</span>
              <h2 id="families-heading" className="section-heading mb-6">
                Support you can genuinely count on
              </h2>
              <ul className="space-y-3.5" role="list">
                {WHY_FAMILIES.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Reach Out to Us
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-700 relative overflow-hidden" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="about-cta-heading" className="text-3xl font-bold text-white mb-4">
              Want to know more? Let's talk.
            </h2>
            <p className="text-brand-200 mb-8 leading-relaxed">
              We'd love to answer your questions, hear your story,
              and explore how we can support you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-white !text-brand-800 hover:bg-slate-100">
                Contact Us
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
