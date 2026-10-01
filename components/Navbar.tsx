'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, MessageCircle, Facebook } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  // Scroll handler for subtle navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About & Trustees', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'University Scholars', href: '/students' },
    { name: 'Gallery & Videos', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
          : 'bg-slate-900 py-4 border-b border-slate-800/60'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950 transition-transform group-hover:scale-105">
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
          <div className="hidden lg:flex items-center gap-4 font-medium text-slate-300 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'text-amber-400 bg-slate-800/90 font-semibold shadow-sm'
                      : 'hover:text-amber-400 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Social & Direct Contact Buttons */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-amber-400 transition p-1.5 rounded-lg hover:bg-slate-800"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/2348022628461" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 text-xs font-bold active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>

              <Link
                href="/donate"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="px-4 space-y-2 font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-slate-800 font-semibold'
                    : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 text-slate-300 bg-slate-800 hover:bg-slate-700 py-2.5 rounded-xl text-xs font-semibold transition"
              >
                <Facebook className="w-4 h-4 text-blue-400" /> Facebook
              </a>
              <a 
                href="https://wa.me/2348022628461" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold transition"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>
            </div>
            <Link
              href="/donate"
              className="block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-md transition"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
          }
                  
