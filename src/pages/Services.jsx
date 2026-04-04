import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2,
  Heart, Home as HomeIcon, Car, Users, TrendingUp,
  Clock, MapPin, Lightbulb, GraduationCap,
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

// ─── Service data ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id:         'personal-activities',
    icon:       Heart,
    title:      'Personal Activities',
    ndisLabel:  'Assistance with Personal Activities',
    tagline:    'Compassionate, respectful support with your daily personal care.',
    colour:     'from-brand-100 to-brand-50',
    iconColour: 'text-brand-700',
    desc: [
      'Personal care is deeply personal, and we treat it that way. Our support workers provide discreet, compassionate assistance with your daily activities, always working to your preferences, your pace, and your routine.',
      'Whether you need help with showering, dressing, grooming, or managing medications, we\'re here to help you start every day feeling your best, comfortably and confidently.',
    ],
    includes: [
      'Showering, bathing and personal hygiene',
      'Dressing and grooming assistance',
      'Medication prompting and management',
      'Mobility support and transfers',
      'Continence support',
      'Morning and evening routines',
    ],
  },
  {
    id:         'household-tasks',
    icon:       HomeIcon,
    title:      'Household Tasks',
    ndisLabel:  'Household Tasks',
    tagline:    'Practical home support so your space stays safe, tidy, and comfortable.',
    colour:     'from-slate-100 to-slate-50',
    iconColour: 'text-slate-600',
    desc: [
      'A safe, clean, and well-maintained home makes a real difference to your health, comfort, and independence. Our household support keeps your home environment running smoothly so you can focus on the things that matter most to you.',
      'We work around your preferences and existing routines, providing reliable, practical assistance that blends seamlessly into your daily life.',
    ],
    includes: [
      'Cleaning, vacuuming and mopping',
      'Laundry and ironing',
      'Meal preparation and cooking',
      'Grocery shopping and errands',
      'Home organisation and tidying',
      'Maintaining a safe living environment',
    ],
  },
  {
    id:         'travel-transport',
    icon:       Car,
    title:      'Travel & Transport',
    ndisLabel:  'Assist Travel and Transport',
    tagline:    'Safe, reliable transport so getting around never holds you back.',
    colour:     'from-violet-50 to-purple-50',
    iconColour: 'text-violet-600',
    desc: [
      'Getting around shouldn\'t be a barrier to living life fully. Our transport support ensures you can attend appointments, engage in activities, and connect with your community without the stress of navigating there alone.',
      'We provide flexible, person-centred transport tailored around your schedule and destination needs, so you\'re always where you need to be.',
    ],
    includes: [
      'Medical and therapy appointments',
      'Work and education commitments',
      'Community and social activities',
      'Shopping and daily errands',
      'Escorted travel and accompanying support',
      'Travel training and route familiarisation',
    ],
  },
  {
    id:         'group-centre-activities',
    icon:       Users,
    title:      'Group & Centre Activities',
    ndisLabel:  'Group and Centre Activities',
    tagline:    'Structured group programs that build skills, friendships, and a sense of belonging.',
    colour:     'from-sky-50 to-blue-50',
    iconColour: 'text-sky-600',
    desc: [
      'Our group and centre-based activities bring people together in a warm, welcoming environment where participants can socialise, build skills, and enjoy a genuine sense of community and purpose.',
      'Sessions are designed to be inclusive, enjoyable, and genuinely meaningful. Not just activities for the sake of it, but experiences that enrich the lives of everyone involved.',
    ],
    includes: [
      'Social and recreational group programs',
      'Arts, crafts and creative activities',
      'Cooking and life skills groups',
      'Fitness and wellbeing sessions',
      'Community outings as a group',
      'Peer connection and friendship building',
    ],
  },
  {
    id:         'life-stage-transitions',
    icon:       TrendingUp,
    title:      'Life Stage Transitions',
    ndisLabel:  'Assistance with Life Stage Transition',
    tagline:    "Dedicated support through life's biggest changes, so every new chapter starts well.",
    colour:     'from-emerald-50 to-green-50',
    iconColour: 'text-emerald-600',
    desc: [
      'Big life changes can feel daunting for anyone. For NDIS participants, transitions often come with added complexity. We provide dedicated support to help you navigate these changes smoothly, confidently, and on your own terms.',
      'Whether you\'re finishing school, moving into new accommodation, entering the workforce, or facing another significant shift, we\'re here to make the transition as positive as possible.',
    ],
    includes: [
      'School-to-adulthood transition planning',
      'Moving to new housing or living arrangements',
      'Entering or returning to work or study',
      'Goal planning for major life changes',
      'Connecting with relevant services and providers',
      'Emotional support through periods of change',
    ],
  },
  {
    id:         'daily-tasks-shared-living',
    icon:       Clock,
    title:      'Daily Tasks & Shared Living',
    ndisLabel:  'Daily Tasks and Shared Living',
    tagline:    'Consistent, respectful support with everyday living in a shared home environment.',
    colour:     'from-amber-50 to-orange-50',
    iconColour: 'text-amber-600',
    desc: [
      'Shared living works best when everyone has the support they need to feel comfortable, respected, and independent. Our daily living support in shared settings is tailored to each individual while remaining considerate of the whole household.',
      'We support you with the everyday tasks that keep life running smoothly, always prioritising your autonomy, your preferences, and the harmony of your living environment.',
    ],
    includes: [
      'Meal preparation and daily routines',
      'Household upkeep in shared settings',
      'Personal organisation and scheduling',
      'Coordination with housemates and providers',
      'Building everyday independence',
      'Overnight and weekend support where applicable',
    ],
  },
  {
    id:         'community-participation',
    icon:       MapPin,
    title:      'Community Participation',
    ndisLabel:  'Community Participation',
    tagline:    'Support to get out, connect, and play an active role in your community.',
    colour:     'from-rose-50 to-pink-50',
    iconColour: 'text-rose-600',
    desc: [
      'Staying connected to your community is one of the most important parts of a fulfilling life. Our community participation support helps you access activities, events, and social connections that bring you joy and a genuine sense of belonging.',
      'We\'ll support you to explore your interests, build new relationships, and become an engaged member of your local community, at your own pace and in your own way.',
    ],
    includes: [
      'Social and recreational outings',
      'Sport, fitness and leisure activities',
      'Attending community events and local groups',
      'Volunteering and civic participation',
      'Cultural, religious and community activities',
      'Building and maintaining meaningful friendships',
    ],
  },
  {
    id:         'innovative-community',
    icon:       Lightbulb,
    title:      'Innovative Community Participation',
    ndisLabel:  'Innovative Community Participation',
    tagline:    'Creative, flexible approaches to community engagement that build real confidence and independence.',
    colour:     'from-indigo-50 to-brand-50',
    iconColour: 'text-indigo-600',
    desc: [
      'Innovative Community Participation takes a fresh approach to how people connect with and contribute to their communities. Rather than following a fixed program, we work with you to design purposeful, engaging experiences that build real skills and lasting confidence.',
      'This support suits participants who want to explore new ways of participating in community life, pursue creative or entrepreneurial interests, or go beyond the boundaries of traditional support offerings.',
    ],
    includes: [
      'Goal-directed community projects',
      'Entrepreneurial and creative pursuits',
      'Leadership and advocacy opportunities',
      'Digital and technology-based participation',
      'Skills-focused community experiences',
      'Flexible, participant-led programming',
    ],
  },
  {
    id:         'life-skills',
    icon:       GraduationCap,
    title:      'Life Skills Development',
    ndisLabel:  'Development of Life Skills',
    tagline:    'Building the practical skills and confidence to live more independently, every day.',
    colour:     'from-brand-50 to-slate-50',
    iconColour: 'text-brand-700',
    desc: [
      'Independence isn\'t just about what you can do today. It\'s about building the skills and confidence to do more tomorrow. Our life skills development support is practical, encouraging, and always paced around your individual goals.',
      'We work with you to identify the skills that will make the biggest difference in your daily life, then provide structured, supportive guidance to help you build and strengthen them over time.',
    ],
    includes: [
      'Cooking, nutrition and meal planning',
      'Budgeting and money management',
      'Communication and social skills',
      'Planning, organisation and time management',
      'Health, hygiene and self-care routines',
      'Problem-solving and decision-making',
    ],
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────────── */}
      <section
        className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-36 pb-20 relative overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-600/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10 mb-5">
              Our Services
            </span>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Support services designed around your life.
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              We offer a comprehensive range of NDIS support services, each delivered
              with flexibility, genuine care, and respect for who you are. Contact us
              to discuss which supports are right for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick nav ───────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-40 overflow-x-auto" role="navigation" aria-label="Jump to service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 w-max sm:w-auto sm:flex-wrap">
            {SERVICES.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200
                           hover:bg-brand-100 hover:border-brand-300 transition-colors duration-150 whitespace-nowrap"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services list ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white" aria-label="All services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {SERVICES.map(({ id, icon: Icon, title, ndisLabel, tagline, colour, iconColour, desc, includes }, i) => (
              <AnimatedSection key={id} id={id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start
                  ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* ── Content ─────────────────────────────────────────── */}
                  <div>
                    {/* NDIS category label */}
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                      {ndisLabel}
                    </p>

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colour} flex items-center justify-center mb-5 border border-slate-100/80`}>
                      <Icon className={`w-7 h-7 ${iconColour}`} aria-hidden="true" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                      {title}
                    </h2>
                    <p className={`font-medium mb-5 ${iconColour}`}>{tagline}</p>

                    <div className="space-y-3.5 text-slate-600 text-sm leading-relaxed mb-8">
                      {desc.map((para, j) => <p key={j}>{para}</p>)}
                    </div>

                    <Link to="/contact" className="btn-primary text-sm">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* ── Includes card ────────────────────────────────────── */}
                  <div className={`rounded-2xl bg-gradient-to-br ${colour} border border-slate-100/80 p-7`}>
                    <h3 className="font-bold text-slate-700 mb-5 text-xs uppercase tracking-widest">
                      What's included
                    </h3>
                    <ul className="space-y-3.5" role="list">
                      {includes.map(item => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 ${iconColour} shrink-0 mt-0.5`} aria-hidden="true" />
                          <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-slate-200/50">
                      <p className="text-xs text-slate-500 italic leading-relaxed">
                        Contact us to discuss how this support can be tailored to your individual NDIS plan and goals.
                      </p>
                    </div>
                  </div>
                </div>

                {i < SERVICES.length - 1 && (
                  <hr className="mt-20 md:mt-28 border-slate-100" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-700 relative overflow-hidden" aria-labelledby="services-cta-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="services-cta-heading" className="text-3xl font-bold text-white mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-brand-200 mb-8 leading-relaxed">
              That's completely okay. Reach out and we'll guide you through your
              options. No pressure and no jargon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary shadow-accent">
                Talk to Us
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
