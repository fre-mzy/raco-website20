import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, GraduationCap, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-6">
              Nurturing & Empowering Every Child
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Restoring Hope for <span className="text-amber-500">Vulnerable Children</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              We provide shelter, quality basic education, healthcare, and emotional support to orphaned and vulnerable children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2"
              >
                Sponsor a Child <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition border border-slate-700"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white shadow-xl rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">150+</h3>
              <p className="text-slate-500 font-medium text-sm">Children Housed & Educated</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">100%</h3>
              <p className="text-slate-500 font-medium text-sm">School Attendance Rate</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-1">3 Meals</h3>
              <p className="text-slate-500 font-medium text-sm">Provided Daily Per Child</p>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What We Do</h2>
            <p className="text-slate-600 max-w-xl mx-auto mt-3">
              Our holistic care model focuses on providing sustainable support across three core areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Care</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safe, clean, and warm accommodations providing children with family-like security and constant care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Education</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Access to formal schooling, learning materials, and guidance to build a prosperous future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Health & Wellbeing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Regular medical checkups, balanced nutrition, and emotional support programs for every child.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

