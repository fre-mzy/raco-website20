import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, ExternalLink, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Mission & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Heart className="w-5 h-5 text-amber-500 fill-current" />
              <span>RACO Child Orphanage</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A faith-based care and protection center providing hope, dignity, meals, shelter, education, and emotional support to vulnerable children.
            </p>
            <div className="pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-xs text-amber-500 font-semibold hover:underline"
              >
                <Facebook className="w-4 h-4" /> Visit Our Facebook Page <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition">About Us & Trustees</Link></li>
              <li><Link href="/programs" className="hover:text-amber-500 transition">Core Programs</Link></li>
              <li><Link href="/students" className="hover:text-amber-500 transition">University Scholars</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-500 transition">Photo & Video Albums</Link></li>
              <li><Link href="/donate" className="hover:text-amber-500 transition">Support & Sponsorship</Link></li>
            </ul>
          </div>

          {/* Core Initiatives */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Outreach Focus</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Free Nursery & Primary School</li>
              <li>Rural Widows Empowerment</li>
              <li>Youth Skills & Vocational Training</li>
              <li>Support for the Aged</li>
              <li>Free Medical Outreach & Life Centre</li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span><strong>HQ:</strong> Light City, Itawo, Itamapako, Ijebu Ode LGA, Ogun State</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span><strong>Lagos:</strong> 33 Taiwo Adebambo St, Araromi, Ibeju Lekki LGA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+234 802 262 8461</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>www.rachchildinitiative.org</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} RACO Child Orphanage & School. All rights reserved.</p>
          <p>Faith-Based Non-Profit & Rural Empowerment Center</p>
        </div>
      </div>
    </footer>
  );
}
