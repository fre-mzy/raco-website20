'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { ShieldAlert, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: "/Slide/IMG_20251113_073847~2.jpg", title: "RACO Community Outreach Moment 1" },
  { src: "/Slide/IMG_20251115_150221~2.jpg", title: "Field Program Snapshot" },
  { src: "/Slide/IMG_20251116_162956.jpg", title: "Community Engagement Activity" },
  { src: "/Slide/IMG_20251116_163632.jpg", title: "Welfare Distribution Program" },
  { src: "/Slide/IMG_20251116_174431.jpg", title: "Rural Development Session" },
  { src: "/Slide/IMG_20251116_174532~2.jpg", title: "Support Program Snapshot" },
  { src: "/Slide/IMG_20251116_180838.jpg", title: "Empowerment Initiative Moment" },
  { src: "/Slide/IMG_20251128_121422.jpg", title: "School & Community Activity" },
  { src: "/Slide/IMG_20251128_123422.jpg", title: "RACO Impact Snapshot" },
  { src: "/Slide/IMG_20251202_123011.jpg", title: "Child Care & Support" },
  { src: "/Slide/IMG_20251202_123023.jpg", title: "Community Welfare Program" },
  { src: "/Slide/IMG_20251207_175006.jpg", title: "Outreach Program Moment" },
  { src: "/Slide/IMG_20251208_073637~3.jpg", title: "RACO Orphanage School Children" },
  { src: "/Slide/IMG_20251212_130551.jpg", title: "Field Visit & Support" },
  { src: "/Slide/IMG_20251212_131717.jpg", title: "Community Welfare Action" },
  { src: "/Slide/IMG_20251213_083053.jpg", title: "Educational Support Activity" },
  { src: "/Slide/IMG_20251213_092640.jpg", title: "Scholars & Student Snapshot" },
  { src: "/Slide/IMG_20251219_125603.jpg", title: "Support for the Aged Ministry" },
  { src: "/Slide/IMG_20251219_125823.jpg", title: "Angel (from year 0 to 4+)" },
  { src: "/Slide/IMG_20251223_112730.jpg", title: "Mrs Daniel Elizabeth (ES)" },
  { src: "/Slide/IMG_20251223_114313_1.jpg", title: "" },
  { src: "/Slide/IMG_20251223_123121.jpg", title: "Media Team" },
  { src: "/Slide/IMG_20251223_123608.jpg", title: "Cultural Exchange" },
  { src: "/Slide/IMG_20251223_123639.jpg", title: "" },
  { src: "/Slide/IMG_20251223_134851.jpg", title: "Mr Stephen" },
  { src: "/Slide/IMG_20251223_135016.jpg", title: "" },
  { src: "/Slide/IMG_20251223_135034.jpg", title: "End of Year Outreach" },
  { src: "/Slide/IMG_20260612_181116.jpg", title: "Mid-Year Community Outreach" },
  { src: "/Slide/IMG_20260613_122541.jpg", title: "Field Monitoring & Support" },
  { src: "/Slide/IMG_20260801_093213.jpg", title: "Gate View" }
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Moments of Impact
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-base">
            Browse through captured moments of our school, welfare programs, and community outreaches.
          </p>
        </div>

        {/* Government Safety Disclaimer Banner */}
        <div className="bg-amber-50 border border-amber-500/30 rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-700 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-base font-bold text-amber-900">Safety & Privacy Notice</h2>
            <p className="text-amber-800/90 text-sm leading-relaxed">
              Please note that we are limited in the amount of pictures we can upload for safety reasons by the government.
            </p>
          </div>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-6 sm:p-8">
          {/* Main Display Image */}
          <div className="relative h-80 sm:h-[480px] w-full bg-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
            <Image 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].title} 
              fill 
              className="object-contain"
              priority
            />
            
            {/* Left/Right Arrow Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 bg-slate-900/70 hover:bg-slate-900 text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-3 rounded-full backdrop-blur-sm transition border border-white/10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter Badge */}
            <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Active Image Title */}
          <div className="mt-6 text-center">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-500/20">
              Featured Photo
            </span>
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mt-2">
              {galleryImages[currentIndex].title}
            </h3>
          </div>

          {/* Thumbnail Strip for Easy Navigation */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition ${
                  currentIndex === idx ? 'border-amber-500 scale-105 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
