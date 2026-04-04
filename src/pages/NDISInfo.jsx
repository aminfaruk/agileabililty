import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, AlertCircle, ChevronDown, ChevronUp,
  BookOpen, Users, FileText, Lightbulb, HelpCircle
} from 'lucide-react'
import { useState } from 'react'
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
        <span className="shrink-0 text-brand-600">
          {open
            ? <ChevronUp className="w-5 h-5" aria-hidden="true" />
            : <ChevronDown className="w-5 h-5" aria-hidden="true" />
          }
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

const ELIGIBILITY = [
  'Have a permanent and significant disability caused by a neurological, intellectual, cognitive, sensory, physical, or psychiatric impairment',
  'Be under 65 years of age when you first access the NDIS',
  'Be an Australian citizen, permanent resident, or a Protected Special Category Visa holder',
  'Live in an area where the NDIS is available (now nationwide)',
]

const STEPS = [
  {
    number: '1',
    icon:   HelpCircle,
    title:  'Check your eligibility',
    desc:   'Review the NDIS eligibility criteria above or contact the NDIA directly on 1800 800 110 to discuss your situation.',
  },
  {
    number: '2',
    icon:   FileText,
    title:  'Submit an Access Request',
    desc:   'Complete an NDIS Access Request Form with supporting evidence from your treating health professionals about your disability and its impact on your daily life.',
  },
  {
    number: '3',
    icon:   Users,
    title:  'Attend a planning meeting',
    desc:   "If approved, you'll meet with an NDIA planner or Local Area Coordinator to discuss your goals, needs, and what supports will be funded in your plan.",
  },
  {
    number: '4',
    icon:   BookOpen,
    title:  'Receive your NDIS plan',
    desc:   'Your personalised NDIS plan will outline your funded supports and budgets. You can then choose providers like AgileAbility to deliver your services.',
  },
  {
    number: '5',
    icon:   Lightbulb,
    title:  'Start using your supports',
    desc:   "Once your plan is in place, contact us! We'll help you understand your plan and get your supports started as smoothly as possible.",
  },
]

const PLAN_TYPES = [
  {
    title: 'Agency Managed',
    desc:  'The NDIA manages your funding directly. Providers must be registered with the NDIS to deliver your supports.',
    colour: 'bg-brand-50 border-brand-200',
  },
  {
    title: 'Plan Managed',
    desc:  'A plan manager handles the financial side of your plan. You can use both registered and unregistered providers.',
    colour: 'bg-sky-50 border-sky-200',
  },
  {
    title: 'Self Managed',
    desc:  'You manage your own funding and can choose any provider, registered or not. This gives you maximum flexibility.',
    colour: 'bg-emerald-50 border-emerald-200',
  },
]

const FAQS = [
  {
    q: 'How long does it take to get an NDIS plan?',
    a: 'The time varies depending on your circumstances and the NDIA\'s processing times. It can take anywhere from a few weeks to several months from submitting your access request to receiving your plan. Contact the NDIA or your Local Area Coordinator for an update on your specific situation.',
  },
  {
    q: 'Can I change providers if I\'m not happy with my current one?',
    a: 'Yes. You have the right to choose and change your service providers at any time. You may need to give notice as per your service agreement, but you are not locked in. If you\'d like to explore switching to AgileAbility, we\'re happy to talk through the process with you.',
  },
  {
    q: 'What\'s the difference between support coordination and plan management?',
    a: 'Support coordination helps you understand and implement your NDIS plan, connecting you with providers and building your capacity to navigate the system. Plan management focuses on the financial side, covering invoice payments and budget tracking. Some participants have funding for both.',
  },
  {
    q: 'Can family members or carers be paid through the NDIS?',
    a: 'In limited circumstances, immediate family members can be paid through the NDIS, but this is generally only approved where there are exceptional circumstances and no other suitable provider is available. Contact the NDIA for guidance specific to your situation.',
  },
  {
    q: 'What happens if my needs change during my plan?',
    a: 'You can request a plan review if your circumstances or needs change significantly. Contact your NDIA planner or support coordinator to discuss requesting an unscheduled review.',
  },
  {
    q: 'How do I make a complaint about an NDIS provider?',
    a: 'You can raise concerns directly with your provider in the first instance. If unresolved, you can contact the NDIS Quality and Safeguards Commission, which is the independent regulator responsible for NDIS providers.',
  },
]

export default function NDISInfo() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-36 pb-20 relative overflow-hidden"
        aria-labelledby="ndis-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-5">
              NDIS Information
            </span>
            <h1 id="ndis-hero-heading" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Understanding the NDIS in Plain Language.
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              The National Disability Insurance Scheme can feel complicated at first.
              We've broken it down into simple, easy-to-understand information
              to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Please note:</strong> The information on this page is general in nature and is not a substitute
              for personalised advice. Every person's NDIS situation is unique. We recommend contacting the NDIA
              directly on <a href="tel:1800800110" className="font-semibold underline">1800 800 110</a> or
              speaking with a Local Area Coordinator for guidance specific to your circumstances.
            </p>
          </div>
        </div>
      </div>

      {/* ── What is the NDIS ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="what-ndis-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="badge mb-4">What is the NDIS?</span>
              <h2 id="what-ndis-heading" className="section-heading mb-5">
                Australia's national support scheme for people with disability
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  The <strong>National Disability Insurance Scheme (NDIS)</strong> is
                  an Australian Government initiative that provides funding for supports
                  and services to eligible people with a permanent and significant disability.
                </p>
                <p>
                  The NDIS is managed by the <strong>National Disability Insurance Agency (NDIA)</strong>.
                  The scheme recognises that every person is different, so instead of a
                  one-size-fits-all approach, it creates individual plans that reflect each
                  person's unique goals, needs, and circumstances.
                </p>
                <p>
                  The NDIS is not a welfare payment. It is a long-term investment in
                  the lives of people with disability, funding supports that help
                  participants live more independently, participate in their communities,
                  and reach their potential.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { number: '600,000+', label: 'Australians currently supported by the NDIS' },
                  { number: '$35B+',    label: 'Annual investment in disability supports' },
                  { number: '10,000+', label: 'Registered NDIS providers nationwide' },
                  { number: 'All ages', label: 'Support from children through to retirement age' },
                ].map(({ number, label }) => (
                  <div key={label} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-3xl font-extrabold text-brand-700 mb-1">{number}</p>
                    <p className="text-xs text-slate-500 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Who can access ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="eligibility-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge mb-4">Eligibility</span>
              <h2 id="eligibility-heading" className="section-heading mb-4">
                Who can access the NDIS?
              </h2>
              <p className="section-subheading mx-auto">
                To access the NDIS, you generally need to meet the following criteria.
                Contact the NDIA for a full assessment of your eligibility.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-soft">
              <ul className="space-y-4" role="list">
                {ELIGIBILITY.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-500 italic">
                  Early childhood support is available for children under 9 with developmental delay or disability,
                  regardless of diagnosis. Contact your local Early Childhood partner for more information.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How to get started ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="getting-started-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="badge mb-4">Getting Started</span>
            <h2 id="getting-started-heading" className="section-heading mb-4">
              How to access the NDIS
            </h2>
            <p className="section-subheading mx-auto">
              The process can take some time, but it's very manageable once you
              understand the steps involved.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-3xl mx-auto">
            {STEPS.map(({ number, icon: Icon, title, desc }, i) => (
              <AnimatedSection key={number} delay={i * 80}>
                <div className="flex gap-5 items-start bg-white rounded-2xl border border-slate-200 shadow-soft p-6 hover:border-brand-200 hover:shadow-card transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-4 h-4 text-brand-600" aria-hidden="true" />
                      <h3 className="font-bold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plan types ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="plan-types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">Plan Management</span>
            <h2 id="plan-types-heading" className="section-heading mb-4">
              How is my NDIS funding managed?
            </h2>
            <p className="section-subheading mx-auto">
              There are three ways your NDIS plan can be managed. The right choice
              depends on your preferences and circumstances.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLAN_TYPES.map(({ title, desc, colour }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className={`rounded-2xl border p-7 h-full ${colour} hover:-translate-y-1 transition-transform duration-200`}>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Not sure which option suits you? Your NDIA planner or a support coordinator
              can help you decide. <Link to="/contact" className="text-brand-600 font-semibold hover:underline">Contact us</Link> if you'd like to discuss your options.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What to expect ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-brand-700 relative overflow-hidden" aria-labelledby="expect-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-4">
                What to Expect
              </span>
              <h2 id="expect-heading" className="text-3xl font-bold text-white mb-4">
                Working with a support provider
              </h2>
              <p className="text-brand-200 leading-relaxed">
                Once your plan is in place and you've chosen a provider, here's what a
                great support experience should look like.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'An initial conversation',       desc: 'A good provider will take the time to understand your goals, preferences, and what you want your life to look like.' },
                { title: 'A service agreement',           desc: 'You\'ll receive a clear, written agreement outlining the supports to be provided, the costs, and your rights.' },
                { title: 'Consistent, reliable support',  desc: 'Your support worker should arrive on time, respect your home and privacy, and deliver support the way you prefer.' },
                { title: 'Regular check-ins',             desc: 'Your provider should check in regularly to make sure the support is working well and adjust if needed.' },
                { title: 'Your rights respected',         desc: 'You have the right to make choices about your own life. A good provider will support your independence, not undermine it.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors duration-150">
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-brand-200 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="ndis-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">FAQs</span>
            <h2 id="ndis-faq-heading" className="section-heading mb-4">
              Common NDIS questions
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {FAQS.map(faq => (
              <AnimatedSection key={faq.q}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100" aria-labelledby="ndis-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="ndis-cta-heading" className="section-heading mb-4">
              Ready to talk to someone?
            </h2>
            <p className="section-subheading mx-auto mb-8">
              Whether you have questions about the NDIS or want to discuss your support
              options, we're here and happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact AgileAbility
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
