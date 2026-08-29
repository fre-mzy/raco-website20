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
  Calendar 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-6">
              Faith-Based Care & Protection Center
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Restoring Hope for <span className="text-amber-500">Vulnerable Children</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Providing meals, shelter, free nursery & primary education, welfare, and emotional support to orphans and displaced children in rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                Sponsor a Child <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition border border-slate-700"
              >
                Learn Our Mission
              </Link>
            </div>
          </div>
        </section>

        {/* Reach Impact Numbers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white shadow-xl rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-amber-500 mb-1">400+</h3>
              <p className="text-slate-600 font-semibold">Current Children Reached</p>
              <p className="text-xs text-slate-400 mt-1">Across rural communities</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">3,000</h3>
              <p className="text-slate-600 font-semibold">Target Reach Goal</p>
              <p className="text-xs text-slate-400 mt-1">To eradicate rural illiteracy</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">100% Free</h3>
              <p className="text-slate-600 font-semibold">Tuition, Uniforms & Meals</p>
              <p className="text-xs text-slate-400 mt-1">Full educational sponsorship</p>
            </div>
          </div>
        </section>

        {/* What We Do - Programs */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Core Initiatives</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
              We empower entire rural communities by caring for children, youth, widows, and the aged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">RACO Orphanage School</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Free nursery & primary education, textbooks, daily lunches, writing materials, and school uniforms for rural children.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empowering Rural Women</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vocational training and startup tools for widows in tailoring, catering, farming, and cassava grinding businesses.
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
                Regular community healthcare outreaches and free medical services at our dedicated RACO Life Centre clinic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Support for the Aged</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Providing daily meals, essential medication access, and general welfare to elderly citizens ensuring no one is forgotten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reintegration & Welfare</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipping every child with emotional support, moral guidance, and practical tools to successfully integrate into society.
              </p>
            </div>
          </div>
        </section>

        {/* Annual Events Highlight */}
        <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Annual Events & Celebrations</h2>
              <p className="text-slate-400 mt-2">Key milestones in our yearly operational calendar</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">July 26th</span>
                <h4 className="text-lg font-bold mb-2">Combined Graduation & Thanksgiving</h4>
                <p className="text-slate-300 text-sm">Celebrating educational achievements of students across our rural schools.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">September 18th</span>
                <h4 className="text-lg font-bold mb-2">RACO Schools Founding Day</h4>
                <p className="text-slate-300 text-sm">Commemorating our educational legacy serving rural communities since 2007.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-bold text-sm block mb-1">Dec 19th – 23rd</span>
                <h4 className="text-lg font-bold mb-2">Christmas Grace Fun Fair & Widows Ceremony</h4>
                <p className="text-slate-300 text-sm">Annual community celebration and empowerment tool distribution for rural widows.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
      }
