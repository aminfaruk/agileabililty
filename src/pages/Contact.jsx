import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
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

const CONTACT_METHODS = [
  {
    icon:    Phone,
    title:   'Phone',
    detail:  '0403 977 416',
    sub:     'Mon – Fri, 8:30 am – 5:00 pm AEST',
    href:    'tel:+61403977416',
    colour:  'bg-brand-100 text-brand-700',
  },
  {
    icon:    Mail,
    title:   'Email',
    detail:  'admin@agileability.com.au',
    sub:     'We aim to reply within 1 business day',
    href:    'mailto:admin@agileability.com.au',
    colour:  'bg-sky-100 text-sky-700',
  },
  {
    icon:    MapPin,
    title:   'Office',
    detail:  'Punchbowl, NSW 2196',
    sub:     'By appointment only',
    href:    'https://maps.google.com/?q=Punchbowl+NSW+2196',
    colour:  'bg-emerald-100 text-emerald-700',
  },
  {
    icon:    Clock,
    title:   'Hours',
    detail:  'Mon – Fri: 8:30 am – 5:00 pm',
    sub:     'After-hours support available for participants',
    href:    null,
    colour:  'bg-violet-100 text-violet-700',
  },
]

const ENQUIRY_TYPES = [
  'I\'m a new participant looking for support',
  'I\'m a family member or carer',
  'I\'m a support coordinator',
  'I\'m a plan manager',
  'I have a general enquiry',
  'Other',
]

const INITIAL_FORM = {
  firstName:   '',
  lastName:    '',
  email:       '',
  phone:       '',
  enquiryType: '',
  message:     '',
  consent:     false,
}

export default function Contact() {
  const [form,        setForm]        = useState(INITIAL_FORM)
  const [submitted,   setSubmitted]   = useState(false)
  const [errors,      setErrors]      = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validate() {
    const e = {}
    if (!form.firstName.trim())   e.firstName   = 'Please enter your first name.'
    if (!form.lastName.trim())    e.lastName    = 'Please enter your last name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                  e.email       = 'Please enter a valid email address.'
    if (!form.enquiryType)        e.enquiryType = 'Please select an enquiry type.'
    if (!form.message.trim() || form.message.trim().length < 10)
                                  e.message     = 'Please include a brief message (at least 10 characters).'
    if (!form.consent)            e.consent     = 'Please confirm you have read our privacy notice.'
    return e
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setIsSubmitting(true)
    try {
      const payload = {
        _subject: `New Enquiry from ${form.firstName} ${form.lastName} — AgileAbility Website`,
        _replyto: form.email,
        'First Name': form.firstName,
        'Last Name': form.lastName,
        'Email': form.email,
        'Phone': form.phone || 'Not provided',
        'Enquiry Type': form.enquiryType,
        'Message': form.message,
      }

      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', { // replace with your Formspree endpoint ID
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.errors?.[0]?.message || 'Submission failed')

      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-36 pb-20 relative overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-5">
              Contact Us
            </span>
            <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Let's start a conversation.
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              We'd love to hear from you. Whether you're exploring your options,
              ready to get started, or just have a question. Our team is happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <h2 id="contact-sidebar-heading" className="text-2xl font-bold text-slate-900 mb-2">
                  Get in touch
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our team is friendly, approachable, and always happy to take
                  the time to answer your questions. No pressure and no jargon.
                </p>
              </AnimatedSection>

              <div className="space-y-4">
                {CONTACT_METHODS.map(({ icon: Icon, title, detail, sub, href, colour }, i) => (
                  <AnimatedSection key={title} delay={i * 80}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-5 flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${colour} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">{title}</p>
                        {href ? (
                          <a href={href} className="text-sm font-semibold text-slate-900 hover:text-brand-700 transition-colors duration-150">
                            {detail}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-900">{detail}</p>
                        )}
                        <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Reassurance */}
              <AnimatedSection delay={400}>
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">
                        No obligation, no pressure
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Reaching out is just a conversation. We won't pressure you
                        to sign up. Our goal is simply to help you understand your options.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={100}>
                <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 md:p-10">
                  {submitted ? (
                    /* Success state */
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8 text-brand-700" aria-hidden="true" />
                      </div>
                      <h2 id="contact-form-heading" className="text-2xl font-bold text-slate-900 mb-3">
                        Thank you for reaching out!
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                        We've received your message and will be in touch within one
                        business day. We look forward to speaking with you.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary text-sm"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 id="contact-form-heading" className="text-2xl font-bold text-slate-900 mb-2">
                        Send us an enquiry
                      </h2>
                      <p className="text-slate-500 text-sm mb-8">
                        Fill in the form below and we'll get back to you within one business day.
                      </p>

                      <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
                        <div className="space-y-5">
                          {/* Name row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                                First name <span className="text-rose-500" aria-hidden="true">*</span>
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={form.firstName}
                                onChange={handleChange}
                                className={`input-field ${errors.firstName ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                                placeholder="Jane"
                                aria-required="true"
                                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                              />
                              {errors.firstName && (
                                <p id="firstName-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                  {errors.firstName}
                                </p>
                              )}
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                                Last name <span className="text-rose-500" aria-hidden="true">*</span>
                              </label>
                              <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={form.lastName}
                                onChange={handleChange}
                                className={`input-field ${errors.lastName ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                                placeholder="Smith"
                                aria-required="true"
                                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                              />
                              {errors.lastName && (
                                <p id="lastName-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                  {errors.lastName}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                              Email address <span className="text-rose-500" aria-hidden="true">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              value={form.email}
                              onChange={handleChange}
                              className={`input-field ${errors.email ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                              placeholder="jane.smith@email.com"
                              aria-required="true"
                              aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                              <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                {errors.email}
                              </p>
                            )}
                          </div>

                          {/* Phone */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                              Phone number <span className="text-slate-400 font-normal">(optional)</span>
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              value={form.phone}
                              onChange={handleChange}
                              className="input-field"
                              placeholder="04xx xxx xxx"
                            />
                          </div>

                          {/* Enquiry type */}
                          <div>
                            <label htmlFor="enquiryType" className="block text-sm font-medium text-slate-700 mb-1.5">
                              I am... <span className="text-rose-500" aria-hidden="true">*</span>
                            </label>
                            <select
                              id="enquiryType"
                              name="enquiryType"
                              value={form.enquiryType}
                              onChange={handleChange}
                              className={`input-field ${errors.enquiryType ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                              aria-required="true"
                              aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
                            >
                              <option value="">Select an option...</option>
                              {ENQUIRY_TYPES.map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            {errors.enquiryType && (
                              <p id="enquiryType-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                {errors.enquiryType}
                              </p>
                            )}
                          </div>

                          {/* Message */}
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                              Your message <span className="text-rose-500" aria-hidden="true">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              value={form.message}
                              onChange={handleChange}
                              className={`input-field resize-none ${errors.message ? 'border-rose-400 focus:ring-rose-400' : ''}`}
                              placeholder="Tell us a bit about your situation and how we can help..."
                              aria-required="true"
                              aria-describedby={errors.message ? 'message-error' : undefined}
                            />
                            {errors.message && (
                              <p id="message-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                {errors.message}
                              </p>
                            )}
                          </div>

                          {/* Consent */}
                          <div>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                name="consent"
                                id="consent"
                                checked={form.consent}
                                onChange={handleChange}
                                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 shrink-0"
                                aria-describedby={errors.consent ? 'consent-error' : undefined}
                              />
                              <span className="text-xs text-slate-600 leading-relaxed">
                                I understand that the information I provide will be used to respond to my enquiry.
                                I have read and acknowledge the privacy notice. My information will not be shared
                                with third parties without my consent.{' '}
                                <span className="text-rose-500" aria-hidden="true">*</span>
                              </span>
                            </label>
                            {errors.consent && (
                              <p id="consent-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                {errors.consent}
                              </p>
                            )}
                          </div>

                          {/* Submit error */}
                          {errors.submit && (
                            <p className="text-xs text-rose-500 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                              {errors.submit}
                            </p>
                          )}

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            aria-busy={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Enquiry
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                              </>
                            )}
                          </button>

                          <p className="text-xs text-slate-400 text-center">
                            <span className="text-rose-400">*</span> Required fields.
                            We aim to respond within one business day.
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────────────────────────── */}
      <section className="h-72 md:h-96" aria-label="Office location map">
        <iframe
          title="AgileAbility office location - Punchbowl NSW 2196"
          src="https://maps.google.com/maps?q=Punchbowl+NSW+2196,+Australia&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
