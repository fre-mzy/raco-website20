import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, MessageCircle, Building2, Facebook, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Reach Out To Us
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Contact Our Centers</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base">
            Get in touch for child sponsorship, inquiries, partnerships, or to visit our headquarters and ministry centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Corporate HQ */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 uppercase px-2.5 py-1 rounded-full">
                Main Headquarters
              </span>
              <h3 className="font-extrabold text-xl text-slate-900 mt-3 mb-2">Light City - Ogun State</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Mission Control Tower, Light City, Itawo, Itamapako, Off Ijebu Ode - Epe Expressway, By GUTS FM Toll Gate, Ijebu Ode LGA, Ogun State.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Home of RACO Primary School, Orphanage & Life Centre Clinic.
            </div>
          </div>

          {/* Lagos Take-Off Center */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 bg-slate-100 uppercase px-2.5 py-1 rounded-full">
                Lagos Center
              </span>
              <h3 className="font-extrabold text-xl text-slate-900 mt-3 mb-2">RACO Light House</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                33 Taiwo Adebambo Street, Araromi, Ibeju Agbe, Ibeju Lekki Local Government Area, Lagos State.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Administrative Hub & Urban Outreach Coordination Center.
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-amber-400 mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Direct Support Lines
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-slate-300">Hotlines:</span>
                  <span className="text-amber-400 font-bold">+234 802 262 8461 / 09060562048</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-slate-300">Website:</span>
                  <span className="text-slate-200">www.rachchildinitiative.org</span>
                </li>
                <li className="flex items-center gap-3 pt-2">
                  <Facebook className="w-4 h-4 text-amber-400" />
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xs text-amber-400 hover:underline">
                    Connect on official Facebook Page
                  </a>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/2348022628461"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" /> Instant WhatsApp Chat
            </a>
          </div>
        </div>

        {/* EMBEDDED GOOGLE MAP */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-xl text-slate-900 mb-4 px-2">Headquarters Map Location</h3>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-slate-100">
            <iframe
              title="RACO Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.024701294862!2d3.900000!3d6.800000!2m3!1f0!1f0!0f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsOCNDgnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
