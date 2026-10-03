import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Heart, 
  Target, 
  MapPin, 
  BookOpen,
  Building2,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

// Board of Trustees & Executive Leadership Roster
const trustees = [
  {
    name: "The Visionary",
    title: "Founder & Visionary Leader",
    role: "Leadership & Vision",
    image: "/trustees/IMG-20260814-WA0032(1).jpg",
    bio: "Pioneered the vision of RACO Commission and RACO Schools to eliminate rural illiteracy and restore hope."
  },
  {
    name: "Deacon Osas",
    title: "Member, Board of Trustees",
    role: "Governance & Operations",
    image: "/trustees/Screenshot_20260814-121416~2.jpg",
    bio: "Overseeing strategic operations and community outreach programs."
  },
  {
    name: "Deacon Obong",
    title: "Member, Board of Trustees",
    role: "Welfare & Stewardship",
    image: "/trustees/Screenshot_20260814-121421~2.jpg",
    bio: "Dedicated to financial accountability and resource management for beneficiaries."
  },
  {
    name: "Sister Ekeng",
    title: "Member, Board of Trustees",
    role: "Child Protection & Care",
    image: "/trustees/Screenshot_20260814-121425~2.jpg",
    bio: "Focusing on child welfare, educational materials, and daily feeding programs."
  },
  {
    name: "Otunba",
    title: "Member, Board of Trustees",
    role: "Community Relations",
    image: "/trustees/Screenshot_20260814-121431~2.jpg",
    bio: "Fostering partnerships with local government and rural community leaders."
  },
  {
    name: "Oluwaseunfunmi",
    title: "Member, Board of Trustees",
    role: "Youth & Development",
    image: "/trustees/Screenshot_20260814-121438~2.jpg",
    bio: "Directing youth vocational skills acquisition and agribusiness initiatives."
  },
  {
    name: "Pastor Peter",
    title: "Member, Board of Trustees",
    role: "Spiritual Guidance & Welfare",
    image: "/trustees/Screenshot_20260814-121442~2.jpg",
    bio: "Providing spiritual mentorship, moral education, and psychological support."
  },
  {
    name: "Mrs. Elizabeth Daniel",
    title: "Member, Board of Trustees",
    role: "Widows Empowerment",
    image: "/trustees/b90d831db93148018a0916ba207277b0.jpg",
    bio: "Leading empowerment initiatives and trade setups for rural widows."
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="flex-grow">
        {/* HERO BANNER */}
        <section className="bg-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Our Leadership & Heritage
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Board of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Trustees</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders ensuring spiritual integrity, absolute transparency, and holistic care for every RACO beneficiary.
            </p>
          </div>
        </section>

        {/* FOUNDATIONAL HISTORY */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full inline-block">
                Faith-Based Care Center
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                Restoring Hope, Dignity & Future Opportunity
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                The RACO Commission was established on October 17, 2003. Recognizing the desperate need for basic literacy among orphans and vulnerable children, RACO Schools was launched on September 18, 2007.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We provide 100% free Nursery and Primary education, complete with textbooks, uniforms, writing materials, and daily hot meals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Est. October 2003</h4>
                  <p className="text-xs text-slate-500 mt-1">RACO Commission Founded</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Est. September 2007</h4>
                  <p className="text-xs text-slate-500 mt-1">Free RACO Schools Established</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide shelter, free quality basic education, healthcare, emotional stability, and vocational training to orphans and vulnerable children while empowering rural widows and the elderly.
                </p>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-amber-500/10 rounded-full pointer-events-none blur-2xl"></div>
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mb-4 font-bold">
                  <ShieldCheck className="w-6 h-6 fill-slate-950 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Our Vision</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To eliminate rural illiteracy across Nigeria, expanding our reach from 400+ children to a target of over 3,000 beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOARD OF TRUSTEES ROSTER */}
        <section className="bg-slate-100/80 py-24 border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="bg-amber-500/10 text-amber-600 font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
                Governance & Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Board of Trustees</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm">
                Our board ensures financial transparency, spiritual integrity, and strategic impact across all RACO operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustees.map((trustee, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
                >
                  <div className="h-72 relative bg-slate-200 overflow-hidden">
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-500/10 px-2.5 py-1 rounded-md">
                        {trustee.role}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900 mt-3">{trustee.name}</h3>
                      <p className="text-xs font-bold text-slate-500 mb-3">{trustee.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{trustee.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATIONAL CENTERS */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
              Our Locations
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-3">Our Operational Centers</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-lg mx-auto">RACO operates across two strategic locations in South-West Nigeria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-5">
              <div className="p-3.5 bg-amber-500/10 text-amber-600 rounded-2xl shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-md">
                  Corporate Headquarters
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-2">Light City - Ogun State</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Mission Control Tower, Light City, Itawo, Itamapako, Off Ijebu Ode - Epe Expressway, By GUTS FM Toll Gate, Ijebu Ode LGA.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" /> Home of RACO School, Orphanage & Life Centre Clinic
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-5">
              <div className="p-3.5 bg-slate-900 text-amber-500 rounded-2xl shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md">
                  Lagos Center
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-2">RACO Light House - Lagos State</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  33 Taiwo Adebambo Street, Araromi, Ibeju Agbe, Ibeju Lekki LGA, Lagos State.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" /> Administrative Hub & Urban Outreach Coordination
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-slate-950 text-white py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.1),transparent_60%)] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Partner With Our Leadership Board</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Help us expand RACO Schools to reach over 3,000 children in rural communities. Every contribution directly impacts a child's future.
            </p>
            <div className="flex justify-center">
              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition shadow-lg flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Support Our Mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
