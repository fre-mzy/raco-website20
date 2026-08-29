import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  Stethoscope, 
  Briefcase, 
  Users, 
  Calendar,
  MessageCircle,
  Award,
  Sparkles
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="bg-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Faith-Based Care & Protection Center
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
              Restoring Hope & Dignity to <span className="text-amber-500">Vulnerable Children</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              RACO Child Orphanage provides meals, shelter, welfare, free quality education, and emotional support to orphans, vulnerable, and displaced children in rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/donate"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                Sponsor a Child <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/2348022628461"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> Quick Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* 2. IMPACT NUMBERS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white shadow-xl rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-8 text-center">
              <h3 className="text-4xl font-black text-amber-500 mb-1">400+</h3>
              <p className="text-slate-700 font-bold">Current Children Reached</p>
              <p className="text-xs text-slate-400 mt-1">Across rural communities</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">3,000</h3>
              <p className="text-slate-700 font-bold">Target Reach Goal</p>
              <p className="text-xs text-slate-400 mt-1">Eradicating rural illiteracy</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-black text-slate-900 mb-1">100% Free</h3>
              <p className="text-slate-700 font-bold">Tuition, Uniforms & Meals</p>
              <p className="text-xs text-slate-400 mt-1">Full educational sponsorship</p>
            </div>
          </div>
        </section>

        {/* 3. CORE INITIATIVES GRID */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Community Initiatives</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
              We empower rural communities through child protection, education, youth skills acquisition, and support for widows and the elderly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">RACO Orphanage School</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Free nursery & primary education, textbooks, writing materials, daily lunches, and uniforms for rural children.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empowering Rural Women</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vocational training and startup tools for widows in tailoring, catering, farming, food vending, and grinding businesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Skills Training</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hands-on technical training in motorbike repair, carpentry, plumbing, electrical work, and agribusiness for self-reliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Medical Outreach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Community healthcare outreaches and free medical services offered consistently at our RACO Life Centre clinic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Support for the Aged</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Providing daily meals, essential medication, and general welfare support to elderly citizens in rural areas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Societal Reintegration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipping children with practical life skills, moral education, and emotional stability to transition into productive adults.
              </p>
            </div>
          </div>
        </section>

        {/* 4. ANNUAL EVENTS CALENDAR */}
        <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Annual Operational Calendar</span>
              <h2 className="text-3xl font-extrabold sm:text-4xl mt-2">Key Events & Celebrations</h2>
              <p className="text-slate-400 mt-2 max-w-xl mx-auto">
                Join us throughout the year as we celebrate our milestones and empower local communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/80">
                <span className="bg-amber-500/10 text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-3">May 1st</span>
                <h4 className="text-lg font-bold mb-2">Light City Foundational Laying Day</h4>
                <p className="text-slate-300 text-sm">Commemorating the growth and infrastructure development of our care center.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/80">
                <span className="bg-amber-500/10 text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-3">July 26th</span>
                <h4 className="text-lg font-bold mb-2">Combined Graduation & Thanksgiving</h4>
                <p className="text-slate-300 text-sm">Celebrating the academic progress of students graduating from RACO schools.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/80">
                <span className="bg-amber-500/10 text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-3">September 18th</span>
                <h4 className="text-lg font-bold mb-2">RACO Schools Founding Day</h4>
                <p className="text-slate-300 text-sm">Celebrating years of continuous free education for rural children since 2007.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/80">
                <span className="bg-amber-500/10 text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-3">October 17th</span>
                <h4 className="text-lg font-bold mb-2">RACO Commission Annual Thanksgiving</h4>
                <p className="text-slate-300 text-sm">Reflecting on God's faithfulness and impact through the commission since 2003.</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/80 md:col-span-2 lg:col-span-2">
                <span className="bg-amber-500/10 text-amber-400 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-3">December 19th – 23rd</span>
                <h4 className="text-lg font-bold mb-2">Annual Christmas Grace Fun Fair & Widows Ceremony</h4>
                <p className="text-slate-300 text-sm">Five days of festivities, gift distributions, and empowering rural widows with tools and capital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION BANNER */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-amber-500 text-slate-950 rounded-3xl p-10 sm:p-16 text-center shadow-xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
              Transform a Child's Future Today
            </h2>
            <p className="text-slate-900 font-medium text-lg max-w-2xl mx-auto mb-8">
              Your donation directly provides food, free education, uniforms, and medical care to a child in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                Make a Donation
              </Link>
              <Link
                href="/students"
                className="bg-white/90 hover:bg-white text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                View Our University Scholars
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
        }
