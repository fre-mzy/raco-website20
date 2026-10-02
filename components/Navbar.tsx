'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  Menu,
  X,
  MessageCircle,
  Facebook,
} from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About & Trustees', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'University Scholars', href: '/university-scholars' },
  { name: 'Gallery & Videos', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const reduceMotion = useReducedMotion();

  /* --------------------------------
     NAVBAR SCROLL STATE
  -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* --------------------------------
     CLOSE MOBILE MENU ON ROUTE CHANGE
  -------------------------------- */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* --------------------------------
     PREVENT BODY SCROLL WHEN MENU OPEN
  -------------------------------- */

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* --------------------------------
     ESC KEY CLOSE
  -------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
              : 'bg-white/90 backdrop-blur-sm py-5'
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-amber-500
                  transition-transform duration-300
                  group-hover:scale-105
                  group-active:scale-95
                "
              >
                <Heart
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                />
              </div>

              <div className="hidden sm:block">
                <p className="font-bold leading-tight text-slate-900">
                  RACO
                </p>

                <p className="text-xs text-slate-500">
                  Child Orphanage & School
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' &&
                    pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      group relative px-4 py-2
                      text-sm font-medium
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'text-amber-600'
                          : 'text-slate-700 hover:text-amber-600'
                      }
                    `}
                  >
                    {link.name}

                    {/* Animated underline */}
                    <span
                      className={`
                        absolute bottom-0 left-4 right-4 h-0.5
                        origin-left rounded-full bg-amber-500
                        transition-transform duration-300
                        ease-out
                        ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-3">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  rounded-full p-2
                  text-slate-600
                  transition-all duration-300
                  hover:bg-slate-100
                  hover:-translate-y-0.5
                  hover:text-blue-600
                "
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  rounded-full p-2
                  text-slate-600
                  transition-all duration-300
                  hover:bg-slate-100
                  hover:-translate-y-0.5
                  hover:text-green-600
                "
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <Link
                href="/donate"
                className="
                  cta-button
                  inline-flex items-center gap-2
                  rounded-full
                  bg-amber-500
                  px-5 py-2.5
                  text-sm font-semibold
                  text-white
                  shadow-sm
                  hover:bg-amber-600
                  hover:shadow-md
                "
              >
                <Heart
                  className="h-4 w-4"
                  fill="currentColor"
                />

                Donate
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                lg:hidden
                rounded-xl p-2
                text-slate-800
                transition-all duration-300
                hover:bg-slate-100
                active:scale-95
              "
            >
              <span
                className={`
                  block transition-transform duration-300
                  ${isOpen ? 'rotate-90' : 'rotate-0'}
                `}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden
            border-t border-slate-100
            bg-white
            transition-all duration-500
            ease-out
            ${
              isOpen
                ? 'max-h-[calc(100vh-80px)] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' &&
                    pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      rounded-xl px-4 py-3
                      text-base font-medium
                      transition-all duration-300
                      ${
                        isOpen
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-4 opacity-0'
                      }
                      ${
                        isActive
                          ? 'bg-amber-50 text-amber-600'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-amber-600'
                      }
                    `}
                    style={{
                      transitionDelay: reduceMotion
                        ? '0ms'
                        : `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div
              className={`
                mt-4 border-t border-slate-100 pt-4
                transition-all duration-500
                ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-3 opacity-0'
                }
              `}
            >
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="
                  cta-button
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-amber-500
                  px-5 py-3
                  font-semibold
                  text-white
                  shadow-sm
                  hover:bg-amber-600
                  hover:shadow-md
                "
              >
                <Heart
                  className="h-5 w-5"
                  fill="currentColor"
                />

                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
