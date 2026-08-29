'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { 
  Heart, 
  Copy, 
  Check, 
  CreditCard, 
  Globe, 
  Building2, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function Donate() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* HERO HEADER */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
              <Heart className="w-3.5 h-3.5 fill-amber-400" /> Direct Support & Giving
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Invest in a Child's <span className="text-amber-500">Future Today</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every donation provides 100% free education, hot daily meals, uniforms, books, and shelter to over 400 vulnerable children and orphans across Ogun and Lagos State.
            </p>
          </div>
        </section>

        {/* GIVING TIER / SPONSORSHIP CARDS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feed a Child */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Feed A Child Initiative</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Provide nutritious hot meals every single day for a child attending RACO Primary School.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold py-2 border-b border-slate-100">
                    <span className="text-slate-500">Daily Meal Cost</span>
                    <span className="text-slate-900 font-bold">₦1,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold py-2 border-b border-slate-100">
                    <span className="text-slate-500">Weekly Feeding</span>
                    <span className="text-slate-900 font-bold">₦5,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold py-2">
                    <span className="text-slate-500">Monthly Feeding</span>
                    <span className="text-amber-600 font-extrabold text-base">₦20,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to School */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full">
                Most Needed
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Back 2 School Kit</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Sponsor a complete learning kit: Textbooks, notebooks, school shoes, bag, and two custom uniforms.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold py-2 border-b border-slate-800">
                    <span className="text-slate-400">Uniforms & Shoes</span>
                    <span className="text-amber-400 font-bold">₦25,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold py-2">
                    <span className="text-slate-400">Full Annual Educational Kit</span>
                    <span className="text-amber-400 font-extrabold text-base">₦50,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Education */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Higher Education Fund</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Support our 34 undergraduates and JAMB scholars through university tuition, housing, and stipends.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold py-2 border-b border-slate-100">
                    <span className="text-slate-500">JAMB Prep & Exam Fee</span>
                    <span className="text-slate-900 font-bold">₦15,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold py-2">
                    <span className="text-slate-500">Annual University Sponsorship</span>
                    <span className="text-amber-600 font-extrabold text-base">₦150,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANK DETAILS SECTION */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Official Direct Bank Transfer Accounts</h2>
            <p className="text-slate-600 text-sm mt-2">
              All contributions are managed under the legal entity <strong>RACO CHILD AND RURAL CARE INITIATIVE</strong>.
            </p>
          </div>

          {/* NAIRA ACCOUNTS */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900">Naira (NGN) Donation Accounts</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* GTBank */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">GTBank (Primary)</span>
                  <p className="text-xs text-slate-500 mt-3 font-semibold">Account Name</p>
                  <p className="text-xs font-bold text-slate-900">RACO CHILD AND RURAL CARE INITIATIVE</p>
                  <p className="text-xs text-slate-500 mt-2 font-semibold">Account Number</p>
                  <p className="text-2xl font-black text-amber-600 font-mono tracking-wider">0013429462</p>
                </div>
                <button
                  onClick={() => handleCopy('0013429462', 'gtb-ngn')}
                  className="mt-4 w-full py-2 px-3 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  {copiedAccount === 'gtb-ngn' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedAccount === 'gtb-ngn' ? 'Copied to Clipboard' : 'Copy Account Number'}
                </button>
              </div>

              {/* FCMB */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-slate-100 text-slate-800 px-2 py-0.5 rounded">FCMB</span>
                  <p className="text-xs text-slate-500 mt-3 font-semibold">Account Name</p>
                  <p className="text-xs font-bold text-slate-900">RACO CHILD AND RURAL CARE INITIATIVE</p>
                  <p className="text-xs text-slate-500 mt-2 font-semibold">Account Number</p>
                  <p className="text-2xl font-black text-amber-600 font-mono tracking-wider">4668537042</p>
                </div>
                <button
                  onClick={() => handleCopy('4668537042', 'fcmb-ngn')}
                  className="mt-4 w-full py-2 px-3 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  {copiedAccount === 'fcmb-ngn' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedAccount === 'fcmb-ngn' ? 'Copied to Clipboard' : 'Copy Account Number'}
                </button>
              </div>

              {/* Polaris */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Polaris Bank</span>
                  <p className="text-xs text-slate-500 mt-3 font-semibold">Account Name</p>
                  <p className="text-xs font-bold text-slate-900">RACO CHILD AND RURAL CARE INITIATIVE</p>
                  <p className="text-xs text-slate-500 mt-2 font-semibold">Account Number</p>
                  <p className="text-2xl font-black text-amber-600 font-mono tracking-wider">1770634650</p>
                </div>
                <button
                  onClick={() => handleCopy('1770634650', 'polaris-ngn')}
                  className="mt-4 w-full py-2 px-3 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  {copiedAccount === 'polaris-ngn' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedAccount === 'polaris-ngn' ? 'Copied to Clipboard' : 'Copy Account Number'}
                </button>
              </div>
            </div>
          </div>

          {/* INTERNATIONAL FX ACCOUNTS */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900">International Domiciliary Accounts (GTBank)</h3>
            </div>

            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">USD Account ($)</span>
                  <p className="text-2xl font-black font-mono mt-1 text-white">0013429486</p>
                  <p className="text-xs text-slate-400 mt-1">GTBank Nigeria • USD Domiciliary</p>
                </div>
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">EUR Account (€)</span>
                  <p className="text-2xl font-black font-mono mt-1 text-white">0013429503</p>
                  <p className="text-xs text-slate-400 mt-1">GTBank Nigeria • EUR Domiciliary</p>
                </div>
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">GBP Account (£)</span>
                  <p className="text-2xl font-black font-mono mt-1 text-white">0013429493</p>
                  <p className="text-xs text-slate-400 mt-1">GTBank Nigeria • GBP Domiciliary</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-4">
                <div>
                  <strong>Account Name:</strong> RACO CHILD AND RURAL CARE INITIATIVE
                </div>
                <div>
                  <strong>SWIFT Code:</strong> GTBINGNLAIFP | <strong>Bank Code:</strong> 058-152272
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONFIRMATION / DONATION CONTACT */}
        <section className="bg-amber-500/10 border-y border-amber-500/20 py-12 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Notify Us of Your Transfer / Corporate Partnership</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              For transfer receipts, physical donations (food, books, clothes), or corporate partnership inquiries, please contact our Executive Supervisor.
            </p>
            <div className="inline-flex flex-wrap justify-center items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm text-sm font-semibold">
              <span className="flex items-center gap-2 text-slate-900">
                <PhoneCall className="w-4 h-4 text-amber-600" /> Mrs. Elizabeth Adesoye - Daniel (Executive Supervisor)
              </span>
              <span className="text-slate-300">|</span>
              <a href="tel:08022628461" className="text-amber-600 font-bold hover:underline">08022628461</a>
              <a href="tel:08033032434" className="text-amber-600 font-bold hover:underline">08033032434</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
                    }
            
