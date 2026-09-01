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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Faith-Based Care & Protection Center
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Welcome to RACO Child <span className="text-amber-500">Orphanage and School</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              A faith-based care and protection center for orphans, vulnerable, and displaced poor children in rural communities. We are committed to providing hope, dignity, and a future through daily meals, shelter, welfare, education, and emotional support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm transition shadow-lg shadow-amber-500/10 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-slate-950" /> Support Our Mission
              </Link>
              <Link
                href="/campaigns"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition border border-slate-700 flex items-center gap-2"
              >
                View Urgent Campaigns <ArrowRight className="w-4 h-4" />
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
                    Active Appeal • ₦14,000,000 Target
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-1">
                    Back-to-School Support & Material Fund
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    We are currently raising funds for tuition, textbooks, uniforms, and daily school meals for hundreds of our orphaned children. See our detailed campaign breakdown and support today.
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
                  <Heart className="w-3.5 h-3.5 fill-slate-950" /> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW / MISSION HIGHLIGHT */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">Our Ultimate Goal</span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl leading-tight">
                Reintegrating Each Child For a Life of Purpose
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Our ultimate goal is to formally reintegrate each child into society—well-equipped for a life of purpose and positive impact.
              </p>
              <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1">Our Core Mission</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  To nurture and protect vulnerable children, educate the next generation, and empower rural communities—especially women, youths, and the aged—with tools, training, and opportunities for sustainable development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <GraduationCap className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">400+ Children</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Currently enrolled across rural communities receiving free education and meals.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">3,000+ Target</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Expanding our reach to eradicate rural illiteracy in underserved areas.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between sm:col-span-2">
                <Briefcase className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">Sustainable Empowerment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Providing widows and youths with practical trade tools, grinding machines, and vocational skills.</p>
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
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Core Initiatives & Programs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* RACO School */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">RACO Orphanage School</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Completely free nursery and primary education. Every child receives free tuition, textbooks, writing materials, daily nutritious school lunch, uniforms, and clothing items.
                  </p>
                </div>
                <Link href="/programs" className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Empowering Women */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Empowering Rural Women</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Vocational training and startup tools for rural widows in tailoring, catering, farming, food vending, and pepper/cassava grinding businesses.
                  </p>
                </div>
                <Link href="/programs" className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Youth Skills */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Youth Skills & Trades</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Hands-on training in motorbike repair, shoe/bag making, electrical, plumbing, carpentry, aluminum work, and modern agribusiness.
                  </p>
                </div>
                <Link href="/programs" className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Support for the Aged */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Support for the Aged</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Extending love, daily meals, access to essential medications, and general welfare so no elderly person is left behind or forgotten.
                  </p>
                </div>
                <Link href="/programs" className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Medical Outreach */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between md:col-span-2">
                <div>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Free Medical Outreach & "RACO Life Centre" Clinic</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Consistent free healthcare services, medical outreaches, and consultations for children, women, the elderly, and the general public at our dedicated clinic.
                  </p>
                </div>
                <Link href="/programs" className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ANNUAL EVENTS & CELEBRATIONS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
              Calendar Highlights
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Annual Events & Celebrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">May 1st</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Light City Foundational Laying Day</h4>
              <p className="text-slate-600 text-xs">Commemorating the foundation of our ministry base.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">July 26th</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Combined Graduation & Thanksgiving</h4>
              <p className="text-slate-600 text-xs">Celebrating student promotions and academic milestones.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">September 18th</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">RACO Schools Founding Day</h4>
              <p className="text-slate-600 text-xs">Marking years of free basic education since 2007.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">October 17th</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">RACO Commission Annual Thanksgiving</h4>
              <p className="text-slate-600 text-xs">Giving thanks for God's grace since establishment in 2003.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-2">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-1">December 19th – 23rd</span>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Christmas Grace Fun Fair & Widows Ceremony</h4>
              <p className="text-slate-600 text-xs">Our joyful year-end celebration featuring festivities and rural widows empowerment grants.</p>
            </div>
          </div>
        </section>

        {/* LOCATIONS SECTION */}
        <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
                Where to Find Us
              </span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Locations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lagos State */}
              <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Lagos State</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" /> RACO Light House
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  33 Taiwo Adebambo Street, Araromi, Ibeju Agbe, Ibeju Lekki LGA, Lagos State.
                </p>
                <div className="bg-slate-900/60 p-4 rounded-xl text-xs text-amber-300 border border-slate-700/60">
                  ✅ Official take-off center for fully executing the RACO mandate.
                </div>
              </div>

              {/* Ogun State */}
              <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Ogun State (Headquarters)</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" /> Topaz Gardens, Light City
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Itawo, Itamapako, Off Ijebu Ode - Epe Expressway, By GUTS FM, Toll Gate, Off Oduagboju Bus Stop, Ijebu Ode LGA, Ogun State.
                </p>
                <div className="bg-slate-900/60 p-4 rounded-xl text-xs text-amber-300 border border-slate-700/60">
                  Mission Control Tower & Home of RACO Primary School, Orphanage & Clinic.
                </div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="mt-12 bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-wrap justify-between items-center gap-6">
              <div>
                <h4 className="font-bold text-white text-base">Need to get in touch?</h4>
                <p className="text-xs text-slate-400 mt-1">Call us or reach out instantly via WhatsApp.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:08022628461" className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-slate-900 px-4 py-3 rounded-xl border border-slate-700">
                  <Phone className="w-4 h-4" /> 0802 262 8461
                </a>
                 <a 
                  href="https://wa.me/2349060562048" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-5 py-3 rounded-xl transition shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp (+234 906 056 2048)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
