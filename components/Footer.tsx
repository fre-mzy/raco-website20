import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Heart className="w-5 h-5 text-amber-500 fill-current" />
              <span>RACO Child Orphanage</span>
            </div>
            <p className="text-sm leading-relaxed">
              A faith-based care and protection center providing hope, dignity, and a future to orphans and vulnerable children in rural communities.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-amber-500 transition">Our Programs</Link></li>
              <li><Link href="/donate" className="hover:text-amber-500 transition">Make a Donation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Core Initiatives</h4>
            <ul className="space-y-2 text-sm">
              <li>Free Nursery & Primary School</li>
              <li>Rural Women & Widow Empowerment</li>
              <li>Youth Skills & Vocational Training</li>
              <li>Free Medical Outreach & Life Centre</li>
              <li>Support for the Aged</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact & Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>Mission Control Tower, Light City, Itawo, Itamapako, Ijebu Ode LGA, Ogun State</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+234 802 262 8461 / 09060562048</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>info@racochildinitiative.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RACO Child Orphanage & School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
