import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Link from 'next/link';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Stethoscope, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* HERO BANNER */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Holistic Community Development
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Our Core <span className="text-amber-500">Programs & Impact</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover how RACO Child Initiative transforms rural communities through free education, vocational training, healthcare, and welfare support.
            </p>
          </div>
        </section>

        {/* PROGRAMS DETAILED SECTIONS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Program 1: RACO Orphanage School */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded">
                Pillar 01
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">RACO Orphanage & Primary School</h2>
              <p className="text-slate-600 leading-relaxed">
                Established on September 18, 2007, our school provides 100% free Nursery and Primary education to children in rural communities. We eliminate financial barriers by providing free textbooks, notebooks, writing materials, custom uniforms, school shoes, and daily hot lunches.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> 100% Free Tuition & Learning Materials
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Daily Nutritious School Lunch Program
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Academic tracking from Primary to University level
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-3xl h-80 sm:h-96 flex items-center justify-center text-slate-500 font-bold border border-slate-300">
              [ School & Classroom Photo Placeholder ]
            </div>
          </div>

          {/* Program 2: Rural Widows Empowerment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-3xl h-80 sm:h-96 flex items-center justify-center text-slate-500 font-bold border border-slate-300 order-2 lg:order-1">
              [ Widow Empowerment Photo Placeholder ]
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded">
                Pillar 02
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Empowering Rural Widows</h2>
              <p className="text-slate-600 leading-relaxed">
                Widows in rural areas often face extreme economic hardship. RACO equips them with practical vocational skills and startup capital, including cassava and pepper grinding machines, sewing equipment, and food vending support to ensure financial independence.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Tailoring & Catering Training
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Cassava & Pepper Grinding Machine Distribution
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Annual December Widows Empowerment Ceremony
                </li>
              </ul>
            </div>
          </div>

          {/* Program 3: Youth Vocational Training */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded">
                Pillar 03
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Youth Skills & Vocational Workshops</h2>
              <p className="text-slate-600 leading-relaxed">
                To combat youth unemployment and rural migration, we provide hands-on technical training in high-demand trades such as motorbike mechanics, electrical installation, plumbing, carpentry, shoe making, and modern agribusiness.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Technical Trades (Electrical, Plumbing, Carpentry)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Agribusiness & Modern Farming
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Tool grants upon completion
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-3xl h-80 sm:h-96 flex items-center justify-center text-slate-500 font-bold border border-slate-300">
              [ Youth Training Photo Placeholder ]
            </div>
          </div>

          {/* Program 4: RACO Life Centre Clinic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-3xl h-80 sm:h-96 flex items-center justify-center text-slate-500 font-bold border border-slate-300 order-2 lg:order-1">
              [ Medical Outreach Photo Placeholder ]
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded">
                Pillar 04
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Free Medical Outreach & Clinic</h2>
              <p className="text-slate-600 leading-relaxed">
                Access to basic healthcare is a major challenge in rural settlements. The RACO Life Centre clinic provides ongoing free medical consultations, essential malaria and infection treatments, deworming campaigns for children, and periodic full-scale community health outreaches.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Free Medical Consultations & Screenings
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Essential Drug & Medication Distribution
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Special care and welfare for rural elderly citizens
                </li>
              </ul>
            </div>
          </div>

        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="bg-slate-900 text-white py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-4">Support Our Community Initiatives</h2>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              Your partnership allows us to sustain free schooling, healthcare, and widow empowerment across Ogun and Lagos State.
            </p>
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm transition inline-flex items-center gap-2"
            >
              Make a Donation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
                  }
                
