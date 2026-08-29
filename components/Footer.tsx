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
              Dedicated to restoring hope, providing education, and giving every vulnerable child a safe place to grow.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition">About Leadership</Link></li>
              <li><Link href="/programs" className="hover:text-amber-500 transition">Our Programs</Link></li>
              <li><Link href="/donate" className="hover:text-amber-500 transition">Make a Donation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>Residential Care & Housing</li>
              <li>Primary & Basic Education</li>
              <li>Healthcare & Nutrition</li>
              <li>Community Outreach</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-amber-500 shrink-0" /> Lagos, Nigeria</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-500 shrink-0" /> +234 800 000 0000</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-500 shrink-0" /> info@racochild.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} RACO Child Orphanage & School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
