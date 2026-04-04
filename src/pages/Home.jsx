import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Star, Users, Heart, Shield, Sparkles,
  HandHeart, Home as HomeIcon, Car,
  MapPin, Clock, HeartHandshake, Lightbulb, GraduationCap, TrendingUp,
} from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '30+', label: 'Participants Supported' },
  { value: '7+',   label: 'Support Services' },
  { value: '100%', label: 'Person-Centred Care' },
  { value: '5★',   label: 'Trusted by Families' },
]

const WHY_US = [
  {
    icon: Heart,
    title: 'Person-Centred Approach',
    desc:  'We listen first. Every support plan is built around your goals, preferences, and lifestyle. Never a one-size-fits-all template.',
  },
  {
    icon: Shield,
    title: 'Safe and Trustworthy',
    desc:  'Our team is thoroughly screened, trained, and committed to your safety and wellbeing at every interaction.',
  },
  {
    icon: Sparkles,
    title: 'Flexible and Responsive',
    desc:  "Life doesn't follow a schedule, and neither do we. We adapt quickly to your changing needs and circumstances.",
  },
  {
    icon: Users,
    title: 'Experienced Support Team',
    desc:  'Our carers and coordinators bring genuine care and professional expertise to every participant they support.',
  },
]

const SERVICES_PREVIEW = [
  { icon: Heart,          title: 'Personal Activities',              desc: 'Compassionate, respectful support with your daily personal care, delivered with dignity at every step.' },
  { icon: HomeIcon,       title: 'Household Tasks',                  desc: 'Practical help around the home so your space stays safe, tidy, and comfortable.' },
  { icon: Car,            title: 'Travel & Transport',               desc: 'Safe, reliable transport to appointments, activities, and everywhere in between.' },
  { icon: Users,          title: 'Group & Centre Activities',        desc: 'Structured group programs that build skills, friendships, and a sense of belonging.' },
  { icon: TrendingUp,     title: 'Life Stage Transitions',           desc: "Dedicated support through life's biggest changes, so every new chapter starts well." },
  { icon: Clock,          title: 'Daily Tasks & Shared Living',      desc: 'Consistent support with everyday living in a shared home environment.' },
  { icon: MapPin,         title: 'Community Participation',          desc: 'Support to get out, connect, and play an active role in your community.' },
  { icon: Lightbulb,      title: 'Innovative Community Participation', desc: 'Creative, flexible approaches to community engagement that build lasting independence.' },
  { icon: GraduationCap,  title: 'Life Skills Development',          desc: 'Building everyday skills and confidence to live more independently.' },
]

const STEPS = [
  {
    number: '01',
    title:  'Reach Out',
    desc:   "Give us a call or fill in our contact form. There are no complicated processes. Just a friendly conversation to get started.",
  },
  {
    number: '02',
    title:  'Free Consultation',
    desc:   "We'll meet with you (in person or online) to understand your goals, your NDIS plan, and what support looks like for you.",
  },
  {
    number: '03',
    title:  'Your Support Plan',
    desc:   'Together we create a personalised support plan that reflects your needs, preferences, and what you want to achieve.',
  },
  {
    number: '04',
    title:  'Ongoing Support',
    desc:   "We get to work, and we check in regularly to make sure your support is always working well for you.",
  },
]

const TESTIMONIALS = [
  {
    name:    'Sarah M.',
    role:    'NDIS Participant',
    rating:  5,
    content: "AgileAbility changed everything for us. From day one, they genuinely listened and built a support plan that actually works for our family. I can't recommend them highly enough.",
    initial: 'S',
    colour:  'bg-brand-100 text-brand-700',
  },
  {
    name:    'David & Linda T.',
    role:    'Parents of an NDIS Participant',
    rating:  5,
    content: "As parents, we were nervous about choosing the right provider. AgileAbility put our minds at ease with their transparency, patience, and genuine care for our son's independence.",
    initial: 'D',
    colour:  'bg-slate-100 text-slate-700',
  },
  {
    name:    'Priya N.',
    role:    'Support Coordinator',
    rating:  5,
    content: "I refer clients to AgileAbility regularly because I know they'll be well cared for. The team is responsive, professional, and truly committed to participant outcomes.",
    initial: 'P',
    colour:  'bg-accent-100 text-accent-700',
  },
]

const FAQS = [
  {
    q: 'What is the NDIS and who can access it?',
    a: 'The National Disability Insurance Scheme (NDIS) is an Australian government program that funds supports and services for people with a permanent and significant disability. Eligibility is assessed by the NDIA. Visit our NDIS Information page to learn more.',
  },
  {
    q: "Do I need to be registered with the NDIS before contacting you?",
    a: "You don't need to have everything sorted before reaching out to us. Whether you're just exploring your options or ready to start, we're happy to have an initial conversation and help point you in the right direction.",
  },
  {
    q: 'How quickly can support start?',
    a: "Once we've had an initial conversation and completed the necessary paperwork, we work as quickly as possible to get your support in place. Contact us to discuss your timeline.",
  },
  {
    q: 'Can I change my supports if my needs change?',
    a: "Absolutely. We understand that life and needs change over time. We regularly review your support plan and are always open to adjusting things to make sure your support continues to work well for you.",
  },
  {
    q: 'What areas do you service?',
    a: 'We currently service participants across Greater Sydney and surrounding suburbs. Contact us to confirm we can support you in your location.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-sm leading-snug">{q}</span>
        <span className="shrink-0 text-brand-700">
          {open
            ? <ChevronUp className="w-5 h-5"   aria-hidden="true" />
            : <ChevronDown className="w-5 h-5" aria-hidden="true" />
          }
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden
                   bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800"
        aria-labelledby="hero-heading"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full bg-brand-700/20 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-600/5 blur-3xl" />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/*
          Two-column layout on xl+:
          - Left: headline, CTA, trust indicators
          - Right: stat cards (push-based, no absolute overlap)
        */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
          <div className="max-w-3xl">

            {/* ── Text column ─────────────────────────────────────────────── */}
            <div>
              {/* Badge */}
              <div className="animate-fade-in animation-fill-both animation-delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
                NDIS Support Services · Australia
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="animate-fade-up animation-fill-both animation-delay-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              >
                Supporting your journey{' '}
                <span className="text-accent-400">to greater independence.</span>
              </h1>

              {/* Subheading */}
              <p className="animate-fade-up animation-fill-both animation-delay-300 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
                We provide flexible, person-centred NDIS support services tailored
                to your goals, your needs, and your life. Whether you're just starting
                out or looking for a new provider. We're here to help.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up animation-fill-both animation-delay-400 flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="btn-primary text-base px-7 py-4 shadow-accent">
                  Get Started
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link to="/services" className="btn-ghost text-base px-7 py-4">
                  Our Services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="animate-fade-up animation-fill-both animation-delay-500 flex flex-wrap items-center gap-x-6 gap-y-2">
                {[
                  'Free initial consultation',
                  'No lock-in contracts',
                  'Flexible support options',
                ].map(item => (
                  <span key={item} className="flex items-center gap-2 text-white/65 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ChevronDown className="w-6 h-6 text-white/30" />
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-700 py-10" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl font-extrabold text-white mb-1">{value}</dt>
                <dd className="text-sm text-brand-200 font-medium">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4">Why AgileAbility</span>
            <h2 id="why-heading" className="section-heading mb-4">
              Support that puts you first
            </h2>
            <p className="section-subheading mx-auto">
              We believe great support starts with truly understanding the person.
              Here's what makes us different.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="card p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg leading-snug">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4">What We Offer</span>
            <h2 id="services-heading" className="section-heading mb-4">
              A range of supports,{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">designed around you</span>
            </h2>
            <p className="section-subheading mx-auto">
              From coordination to daily care, we offer a comprehensive range of NDIS
              support services to help you live the life you choose.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_PREVIEW.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 70}>
                <Link
                  to="/services"
                  className="card p-6 h-full flex flex-col group"
                  aria-label={`Learn more about ${title}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-brand-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{desc}</p>
                  <span className="mt-4 text-sm font-semibold text-accent-600 flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 relative overflow-hidden"
        aria-labelledby="how-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-600/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-4">
              How It Works
            </span>
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Getting started is simpler<br className="hidden sm:block" /> than you might think
            </h2>
            <p className="text-lg text-brand-200 max-w-xl mx-auto">
              We've made the process as straightforward and stress-free as possible.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STEPS.map(({ number, title, desc }, i) => (
              <AnimatedSection key={number} delay={i * 120}>
                <div className="relative bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 h-full hover:bg-white/12 transition-colors duration-200">
                  <div className="text-5xl font-black text-white/10 leading-none mb-4 select-none">
                    {number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-brand-200 leading-relaxed">{desc}</p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-brand-700 border border-white/20 items-center justify-center" aria-hidden="true">
                      <ArrowRight className="w-3 h-3 text-accent-400" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Journey
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4">What People Say</span>
            <h2 id="testimonials-heading" className="section-heading mb-4">
              Trusted by participants and families
            </h2>
            <p className="section-subheading mx-auto">
              Don't just take our word for it. Here's what the people we support have to say.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, rating, content, initial, colour }, i) => (
              <AnimatedSection key={name} delay={i * 120}>
                <figure className="card p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-slate-600 leading-relaxed italic flex-1 mb-6">
                    "{content}"
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${colour} flex items-center justify-center font-bold text-sm shrink-0`} aria-hidden="true">
                      {initial}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{name}</p>
                      <p className="text-xs text-slate-500">{role}</p>
                    </div>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <p className="text-xs text-slate-400 italic">
              * Testimonials are illustrative of the experiences of people we support. Details have been changed to protect privacy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ Preview ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">Common Questions</span>
            <h2 id="faq-heading" className="section-heading mb-4">
              Frequently asked questions
            </h2>
            <p className="section-subheading mx-auto">
              Have a question? We've answered some of the most common ones below.
              You're always welcome to contact us directly.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {FAQS.map(faq => (
              <AnimatedSection key={faq.q}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-sm text-slate-500 mb-4">Still have questions? We'd love to hear from you.</p>
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-brand-700 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-900/40 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
              <HeartHandshake className="w-8 h-8 text-brand-200" aria-hidden="true" />
            </div>
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-brand-200 mb-10 max-w-xl mx-auto">
              Let's have a conversation. No pressure and no obligations. Just a genuine
              chat about how we can support you or your loved one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary shadow-accent">
                Get in Touch Today
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/ndis-info" className="btn-ghost">
                Learn About the NDIS
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
