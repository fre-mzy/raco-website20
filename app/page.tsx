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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Faith-Based Care & Protection Center
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Welcome to RACO Child{" "}
              <span className="text-amber-500">
                Orphanage and School
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              A faith-based care and protection center for orphans, vulnerable,
              and displaced poor children in rural communities. We are committed
              to providing hope, dignity, and a future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-sm transition shadow-lg flex items-center gap-2"
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
      </main>

      <Footer />
    </div>
  );
}
