'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X, MessageCircle, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight leading-none">
                RACO <span className="text-amber-500">Child</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                Orphanage & School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-slate-300 text-sm">
            <Link href="/" className="hover:text-amber-500 transition">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition">About & Trustees</Link>
            <Link href="/programs" className="hover:text-amber-500 transition">Programs</Link>
            <Link href="/students" className="hover:text-amber-500 transition">University Scholars</Link>
            <Link href="/gallery" className="hover:text-amber-500 transition">Gallery & Videos</Link>
            <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
            
            {/* Social & Direct Contact Buttons */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-amber-500 transition p-1.5 rounded-lg hover:bg-slate-800"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/2348022628461" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl transition flex items-center gap-2 text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>

              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition shadow-lg shadow-amber-500/20"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 font-medium text-sm">
          <Link href="/" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>About & Trustees</Link>
          <Link href="/programs" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Our Programs</Link>
          <Link href="/students" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>University Scholars</Link>
          <Link href="/gallery" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Gallery & Videos</Link>
          <Link href="/contact" className="block py-2 text-slate-300 hover:text-amber-500" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <a 
            href="https://wa.me/2348022628461" 
            target="_blank" 
            rel="noreferrer" 
            className="block text-center bg-emerald-600 text-white font-bold py-3 rounded-xl"
          >
            Chat on WhatsApp
          </a>
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
