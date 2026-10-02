import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  MapPin,
  Phone,
  MessageCircle,
  Building2,
  Facebook,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* PAGE HEADER */}
        <div className="contact-page-header text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Reach Out To Us
          </span>

          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Contact Our Centers
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            Get in touch for child sponsorship, inquiries, partnerships,
            volunteering, or to visit our headquarters and ministry centers.
          </p>
        </div>

        {/* CONTACT CENTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* CORPORATE HQ */}
          <div className="contact-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">

            <div>
              <div className="contact-card-icon w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 uppercase px-2.5 py-1 rounded-full">
                Main Headquarters
              </span>

              <h3 className="font-extrabold text-xl text-slate-900 mt-3 mb-2">
                Light City - Ogun State
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Topaz Gardens, Light City, Itawo, Itamapako,
                Off Ijebu Ode - Epe Expressway, By GUTS FM,
                Toll Gate, Off Oduagboju Bus Stop, Ijebu Ode LGA,
                Ogun State.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Home of RACO Primary School, Orphanage & Life Centre Clinic.
            </div>
          </div>

          {/* LAGOS CENTER */}
          <div className="contact-card bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">

            <div>
              <div className="contact-card-icon w-12 h-12 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold text-slate-800 bg-slate-100 uppercase px-2.5 py-1 rounded-full">
                Lagos Center
              </span>

              <h3 className="font-extrabold text-xl text-slate-900 mt-3 mb-2">
                RACO Light House
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                33 Taiwo Adebambo Street, Araromi, Ibeju Agbe,
                Ibeju Lekki Local Government Area, Lagos State.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Administrative Hub & Urban Outreach Coordination Center.
            </div>
          </div>

          {/* COMMUNICATION CHANNELS */}
<div className="contact-card contact-card-dark bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">

  <div>

    <div className="mb-7">
      <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">
        Get In Touch
      </span>

      <h3 className="font-extrabold text-2xl text-white mt-2">
        Contact RACO
      </h3>

      <p className="text-slate-400 text-xs leading-relaxed mt-2">
        Reach us directly through WhatsApp or any of our official
        telephone hotlines.
      </p>
    </div>

    <div className="space-y-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/2347080004902"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-line flex items-center justify-between gap-3 group bg-white/5 border border-white/10 rounded-xl px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
          </span>

          <span className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Official WhatsApp
            </span>

            <span className="text-sm text-slate-200 font-semibold">
              0708 000 4902
            </span>
          </span>
        </span>

        <span className="text-emerald-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
          Chat →
        </span>
      </a>

      {/* Hotline 1 */}
      <a
        href="tel:08022628461"
        className="contact-line flex items-center justify-between gap-3 group bg-white/5 border border-white/10 rounded-xl px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-amber-400" />
          </span>

          <span className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Hotline 1 (ES)
            </span>

            <span className="text-sm text-slate-200 font-semibold">
              0802 262 8461
            </span>
          </span>
        </span>

        <Phone className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
      </a>

      {/* Hotline 2 */}
      <a
        href="tel:09060562048"
        className="contact-line flex items-center justify-between gap-3 group bg-white/5 border border-white/10 rounded-xl px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-amber-400" />
          </span>

          <span className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Hotline 2
            </span>

            <span className="text-sm text-slate-200 font-semibold">
              0906 056 2048
            </span>
          </span>
        </span>

        <Phone className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
      </a>

      {/* Hotline 3 */}
      <a
        href="tel:08026994164"
        className="contact-line flex items-center justify-between gap-3 group bg-white/5 border border-white/10 rounded-xl px-4 py-3.5"
      >
        <span className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-amber-400" />
          </span>

          <span className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
              Hotline 3
            </span>

            <span className="text-sm text-slate-200 font-semibold">
              0802 699 4164
            </span>
          </span>
        </span>

        <Phone className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
      </a>

    </div>

    {/* FACEBOOK */}
    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
      <Facebook className="w-4 h-4 text-amber-400" />

      <span className="text-xs text-slate-400">
        Connect with RACO on Facebook
      </span>
    </div>

  </div>

  {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/2347080004902"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-whatsapp mt-8 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md"
  >
    <MessageCircle className="w-5 h-5 fill-current" />
    Chat With Us on WhatsApp
  </a>

</div>

        {/* LOCATION INFORMATION */}
        <div className="contact-location-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-16">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <div>
              <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">
                Visit Us
              </span>

              <h3 className="font-bold text-xl text-slate-900 mt-1">
                Our Headquarters Location
              </h3>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <MapPin className="w-4 h-4 text-amber-500" />
              Ogun State, Nigeria
            </div>

          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-slate-100">
            <iframe
              title="RACO Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.024701294862!2d3.900000!3d6.800000!2m3!1f0!1f0!0f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsOCNDgnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
