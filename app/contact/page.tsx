import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900">Get in Touch</h1>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">
            Reach out to our team for volunteer opportunities, visitation schedules, or sponsorship inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-amber-500" /> Corporate Headquarters (Ogun State)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mission Control Tower, Light City, Itawo, Itamapako,<br />
                Off Ijebu Ode - Epe Expressway, By GUTS FM Toll Gate,<br />
                Ijebu Ode LGA, Ogun State.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> +234 802 262 8461 / 09060562048</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> +234 802 699 4164</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="text-amber-500" /> Official Take-off Center (Lagos State)
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                <strong>RACO Light House</strong><br />
                33 Taiwo Adebambo Street, Araromi, Ibeju Agbe,<br />
                Ibeju Lekki LGA, Lagos State.
              </p>
              <p className="text-xs text-slate-400">Official execution center for the RACO mandate.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
            }
