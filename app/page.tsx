import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Heart, 
  Target, 
  MapPin, 
  Users, 
  BookOpen,
  Building2,
  ArrowRight
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* HERO BANNER */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="bg-amber-500/10 text-amber-400 font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
              Our Leadership & Heritage
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Board of <span className="text-amber-500">Trustees</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders ensuring spiritual integrity, transparency, and holistic care for RACO beneficiaries.
            </p>
          </div>
        </section>

        {/* FOUNDATIONAL HISTORY */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">Faith-Based Care Center</span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Restoring Hope, Dignity & Future Opportunity
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The RACO Commission was established on October 17, 2003. Recognizing the desperate need for basic literacy among orphans and vulnerable children, RACO Schools was launched on September 18, 2007.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We provide 100% free Nursery and Primary education, complete with textbooks, uniforms, writing materials, and daily hot meals.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <Heart className="w-6 h-6 text-amber-500 mb-2" />
                  <h4 className="font-bold text-slate-900">Est. October 2003</h4>
                  <p className="text-xs text-slate-500">RACO Commission Founded</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <BookOpen className="w-6 h-6 text-amber-500 mb-2" />
                  <h4 className="font-bold text-slate-900">Est. September 2007</h4>
                  <p className="text-xs text-slate-500">Free RACO Schools Established</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide shelter, free quality basic education, healthcare, emotional stability, and vocational training to orphans and vulnerable children while empowering rural widows and the elderly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To eliminate rural illiteracy across Nigeria, expanding our reach from 400+ children to a target of over 3,000 beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOARD OF TRUSTEES ROSTER */}
        <section className="bg-slate-100 py-24 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-3">
                Governance & Leadership
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Board of Trustees</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm">
                Our board ensures financial transparency, spiritual integrity, and strategic impact across all RACO operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustees.map((trustee, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col">
                  <div className="h-72 relative bg-slate-200 overflow-hidden">
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        {trustee.role}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-2">{trustee.name}</h3>
                      <p className="text-xs font-semibold text-slate-500 mb-2">{trustee.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{trustee.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATIONAL CENTERS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Operational Centers</h2>
            <p className="text-slate-600 text-sm mt-2">RACO operates across two strategic locations in South-West Nigeria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Corporate Headquarters</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Light City - Ogun State</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Mission Control Tower, Light City, Itawo, Itamapako, Off Ijebu Ode - Epe Expressway, By GUTS FM Toll Gate, Ijebu Ode LGA.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-amber-500" /> Home of RACO School, Orphanage & Life Centre Clinic
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-slate-900 text-amber-500 rounded-xl shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lagos Take-Off Center</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">RACO Light House - Lagos State</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  33 Taiwo Adebambo Street, Araromi, Ibeju Agbe, Ibeju Lekki LGA, Lagos State.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-amber-500" /> Administrative Hub & Urban Outreach Coordination
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-slate-900 text-white py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Our Leadership Board</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Help us expand RACO Schools to reach over 3,000 children in rural communities.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition flex items-center gap-2"
            >
              Support Our Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
        }
          
