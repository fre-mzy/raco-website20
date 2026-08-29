'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              RACO <span className="text-amber-500">Child</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition">About</Link>
            <Link href="/programs" className="hover:text-amber-500 transition">Programs</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20"
            >
              Donate Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 font-medium">
          <Link href="/" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/programs" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link href="/contact" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            href="/donate"
            className="block text-center bg-amber-500 text-slate-950 font-bold py-3 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
