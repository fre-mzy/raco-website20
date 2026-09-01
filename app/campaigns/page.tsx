import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Heart, GraduationCap, Stethoscope, AlertCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CampaignsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-red-500/10 text-red-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-red-500/20 inline-flex items-center gap-1.5 mb-4">
            <AlertCircle className="w-3.5 h-3.5" /> Urgent Community Appeals & Projects
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Active Campaigns & Urgent Needs</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base">
            Partner with us to meet critical funding goals for our children's education, healthcare, and daily welfare. Your support transforms rural communities.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="space-y-12 mb-20">
          {/* Campaign 1: Back to School */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Box */}
            <div className="lg:col-span-5 relative bg-slate-200 min-h-[300px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent lg:hidden z-10"></div>
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider z-0 flex flex-col items-center gap-2 text-center">
                <GraduationCap className="w-12 h-12 text-slate-400" />
                <span>[ Back-to-School Campaign Photo / Children Learning ]</span>
              </div>
              <span className="absolute top-4 left-4 z-20 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md">
                Priority Project
              </span>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" /> Academic Session Support
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Back-to-School Support & Material Fund
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  As a new academic session approaches, hundreds of our orphaned and vulnerable children across rural communities urgently need your help. The funds raised will directly cover tuition fees, free notebooks, textbooks, writing materials, school uniforms, sandals, and daily school meals to keep them learning and thriving.
                </p>

                {/* Progress Bar */}
                <div className="space-y-2 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Target Goal</span>
                    <span className="text-amber-600">₦14,000,000</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full w-1/3"></div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-right">Every contribution directly impacts a child's education.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <Link
                  href="/donate"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Heart className="w-4 h-4 fill-slate-950" /> Donate to Back-to-School
                </Link>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Secure & Verified
                </span>
              </div>
            </div>
          </div>

          {/* Campaign 2: Medical & Clinic */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Box */}
            <div className="lg:col-span-5 relative bg-slate-200 min-h-[300px] flex items-center justify-center p-8">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider z-0 flex flex-col items-center gap-2 text-center">
                <Stethoscope className="w-12 h-12 text-slate-400" />
                <span>[ RACO Life Centre Clinic & Medical Outreach Photo ]</span>
              </div>
              <span className="absolute top-4 left-4 z-20 bg-red-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md">
                Ongoing Need
              </span>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" /> Healthcare & Wellness
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  RACO Life Centre Clinic Supplies & Outreaches
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Stocking essential medications, first aid supplies, and provisions for free health checkups for rural children, widows, and the aged. Your support keeps our medical clinic active and fully stocked to serve those who cannot afford medical bills.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <Link
                  href="/donate"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Heart className="w-4 h-4 text-amber-400 fill-amber-400" /> Support Healthcare Fund
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
          }
