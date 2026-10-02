import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  Heart,
  GraduationCap,
  Briefcase,
  Users,
  Stethoscope,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import type { Metadata } from "next";

// Google Search Console Canonical Metadata
export const metadata: Metadata = {
  title: "RACO Child Orphanage & School",
  description: "Faith-Based Care & Protection Center",
  alternates: {
    canonical: "https://racochildinitiative.org/",
  },
  verification: {
    google: "DUk79X4tBkUQMnv6fFmbsbIlBQItszIrtSt2HQu53dE",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

          {/* Animated background glow */}
          <div className="hero-glow absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">

            {/* Hero badge */}
            <span className="hero-item hero-item-1 bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Faith-Based Care & Protection Center
            </span>

            {/* Hero heading */}
            <h1 className="hero-item hero-item-2 text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Welcome to RACO Child{" "}
              <span className="text-amber-500">
                Orphanage and School
              </span>
            </h1>

            {/* Hero description */}
            <p className="hero-item hero-item-3 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              A faith-based care and protection center for orphans, vulnerable,
              and displaced poor children in rural communities. We are committed
              to providing hope, dignity, and a future through daily meals,
              shelter, welfare, education, and emotional support.
            </p>

            {/* Hero buttons */}
            <div className="hero-item hero-item-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm transition shadow-lg shadow-amber-500/10 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                Support Our Mission
              </Link>

              <Link
                href="/campaigns"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition border border-slate-700 flex items-center gap-2"
              >
                View Urgent Campaigns
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* URGENT CAMPAIGNS HOMEPAGE SUMMARY BANNER */}
        <section className="py-12 bg-amber-500/10 border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-3xl border border-amber-500/30 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex-shrink-0 flex items-center justify-center font-black shadow-md">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-full border border-amber-500/20">
                    Active Appeal • ₦27,000,000 Target
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-1">
                    Back-to-School Support & Material Fund
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    We are currently raising funds for tuition, textbooks,
                    uniforms, and daily school meals for hundreds of our
                    orphaned children. See our detailed campaign breakdown
                    and support today.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
                <Link
                  href="/campaigns"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition text-center"
                >
                  View Campaign Details
                </Link>

                <Link
                  href="/donate"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition text-center flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-slate-950" />
                  Donate Now
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* OVERVIEW / MISSION HIGHLIGHT */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
                Our Ultimate Goal
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
                Reintegrating Each Child For a Life of Purpose
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                Our ultimate goal is to formally reintegrate each child into
                society—well-equipped for a life of purpose and positive impact.
              </p>

              <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1">
                  Our Core Mission
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed">
                  To nurture and protect vulnerable children, educate the next
                  generation, and empower rural communities—especially women,
                  youths, and the aged—with tools, training, and opportunities
                  for sustainable development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <GraduationCap className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">
                  400+ Children
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Currently enrolled across rural communities receiving free
                  education and meals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">
                  3,000+ Target
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Expanding our reach to eradicate rural illiteracy in
                  underserved areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between sm:col-span-2">
                <Briefcase className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">
                  Sustainable Empowerment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Providing widows and youths with practical trade tools,
                  grinding machines, and vocational skills.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CORE PILLARS / PROGRAMS GRID */}
        <section className="bg-slate-100 py-24 border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
        What We Do
      </span>

      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Core Initiatives & Programs
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* RACO School */}
      <div className="program-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div className="program-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            RACO Orphanage School
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Completely free nursery and primary education. Every child
            receives free tuition, textbooks, writing materials, daily
            nutritious school lunch, uniforms, and clothing items.
          </p>
        </div>

        <Link
          href="/programs"
          className="program-link text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Empowering Women */}
      <div className="program-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div className="program-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Briefcase className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Empowering Rural Women
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Vocational training and startup tools for rural widows in
            tailoring, catering, farming, food vending, and
            pepper/cassava grinding businesses.
          </p>
        </div>

        <Link
          href="/programs"
          className="program-link text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Youth Skills */}
      <div className="program-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div className="program-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Users className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Youth Skills & Trades
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Hands-on training in motorbike repair, shoe/bag making,
            electrical, plumbing, carpentry, aluminum work, and modern
            agribusiness.
          </p>
        </div>

        <Link
          href="/programs"
          className="program-link text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Support for the Aged */}
      <div className="program-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
          <div className="program-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Heart className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Support for the Aged
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Extending love, daily meals, access to essential
            medications, and general welfare so no elderly person is
            left behind or forgotten.
          </p>
        </div>

        <Link
          href="/programs"
          className="program-link text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Medical Outreach */}
      <div className="program-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between md:col-span-2">
        <div>
          <div className="program-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Stethoscope className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Free Medical Outreach & "RACO Life Centre" Clinic
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            Consistent free healthcare services, medical outreaches,
            and consultations for children, women, the elderly, and
            the general public at our dedicated clinic.
          </p>
        </div>

        <Link
          href="/programs"
          className="program-link text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  </div>
</section>

        {/* ANNUAL EVENTS & CELEBRATIONS */}
<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  <div className="text-center mb-16">
    <span className="event-heading inline-block bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 mb-3">
      Calendar Highlights
    </span>

    <h2 className="event-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
      Annual Events & Celebrations
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* May */}
    <div className="event-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="event-date">
        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">
          May 1st
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-lg mb-2">
        Light City Foundational Laying Day
      </h4>

      <p className="text-slate-600 text-xs leading-relaxed">
        Commemorating the foundation of our ministry base.
      </p>
    </div>

    {/* July */}
    <div className="event-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="event-date">
        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">
          July 26th
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-lg mb-2">
        Combined Graduation & Thanksgiving
      </h4>

      <p className="text-slate-600 text-xs leading-relaxed">
        Celebrating student promotions and academic milestones.
      </p>
    </div>

    {/* September */}
    <div className="event-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="event-date">
        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">
          September 18th
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-lg mb-2">
        RACO Schools Founding Day
      </h4>

      <p className="text-slate-600 text-xs leading-relaxed">
        Marking years of free basic education since 2007.
      </p>
    </div>

    {/* October */}
    <div className="event-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="event-date">
        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">
          October 17th
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-lg mb-2">
        RACO Commission Annual Thanksgiving
      </h4>

      <p className="text-slate-600 text-xs leading-relaxed">
        Giving thanks for God's grace since establishment in 2003.
      </p>
    </div>

    {/* December */}
    <div className="event-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-2">
      <div className="event-date">
        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">
          December 19th – 23rd
        </span>
      </div>

      <h4 className="font-bold text-slate-900 text-lg mb-2">
        Christmas Grace Fun Fair & Widows Ceremony
      </h4>

      <p className="text-slate-600 text-xs leading-relaxed">
        Our joyful year-end celebration featuring festivities and
        rural widows empowerment grants.
      </p>
    </div>

  </div>
</section>

        {/* LOCATIONS */}
<section className="bg-white py-20 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <span className="location-heading inline-block bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 mb-3">
        Where We Serve
      </span>

      <h2 className="location-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Our Locations
      </h2>

      <p className="location-heading max-w-2xl mx-auto mt-4 text-slate-600 text-sm leading-relaxed">
        RACO serves children, families, widows, and communities across
        Lagos and Ogun States through our care, education, empowerment,
        and outreach programmes.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Lagos */}
      <div className="location-card group bg-slate-50 rounded-3xl border border-slate-200 p-8">

        <div className="flex items-start gap-5">

          <div className="location-icon shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <MapPin className="w-7 h-7" />
          </div>

          <div>
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
              Lagos State
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              RACO Light House
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              33 Taiwo Adebambo Street, Araromi, Ibeju Agbe,
              Ibeju Lekki LGA, Lagos State.
            </p>
          </div>

        </div>

        <div className="location-divider mt-8 mb-6 h-px bg-slate-200" />

        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>RACO Light House • Lagos</span>
        </div>

      </div>

      {/* Ogun */}
      <div className="location-card group bg-slate-50 rounded-3xl border border-slate-200 p-8">

        <div className="flex items-start gap-5">

          <div className="location-icon shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <MapPin className="w-7 h-7" />
          </div>

          <div>
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
              Ogun State • Headquarters
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              Light City Headquarters
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Topaz Gardens, Light City, Itawo, Itamapako,
              Off Ijebu Ode - Epe Expressway, By GUTS FM,
              Toll Gate, Off Oduagboju Bus Stop, Ijebu Ode LGA,
              Ogun State.
            </p>
          </div>

        </div>

        <div className="location-divider mt-8 mb-6 h-px bg-slate-200" />

        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>RACO Headquarters • Ogun State</span>
        </div>

      </div>

    </div>
  </div>
</section>

            {/* CONTACT CTA */}
<section className="contact-cta relative overflow-hidden bg-slate-900 py-16">
  <div className="contact-cta-glow absolute inset-0 pointer-events-none" />

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="contact-cta-content text-center">

      <span className="contact-cta-item inline-flex items-center gap-2 bg-white/5 text-amber-400 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
        <MessageCircle className="w-3.5 h-3.5" />
        Get in Touch
      </span>

      <h2 className="contact-cta-item text-3xl sm:text-4xl font-extrabold text-white">
        Be Part of the RACO Mission
      </h2>

      <p className="contact-cta-item max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
        Whether you want to support a child, partner with us,
        volunteer, or learn more about our work, we'd love to hear
        from you.
      </p>

      <div className="contact-cta-item flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

        <a
          href="tel:08022628461"
          className="cta-button contact-action group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/10"
        >
          <Phone className="contact-action-icon w-4 h-4" />
          <span>0802 262 8461</span>
        </a>

        <a
          href="https://wa.me/2349060562048"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button contact-action group inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20"
        >
          <MessageCircle className="contact-action-icon w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>

      </div>

    </div>
  </div>
