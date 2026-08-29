'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, PlayCircle, Sparkles } from 'lucide-react';

// Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// List of gallery images inside public/gallery/
const galleryImages = [
  { src: '/gallery/photo1.jpg', title: 'School & Classroom Life', caption: 'Free education and daily meals for 400+ rural children.' },
  { src: '/gallery/photo2.jpg', title: 'Widow Empowerment Program', caption: 'Providing trade tools, equipment, and startup capital.' },
  { src: '/gallery/photo3.jpg', title: 'Youth Technical Training', caption: 'Hands-on skill acquisition and agribusiness workshops.' },
  { src: '/gallery/photo4.jpg', title: 'Free Medical Outreach', caption: 'Consultations and care at the RACO Life Centre Clinic.' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-amber-500/10 text-amber-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Media Showcase
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Photo & Video Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-base">
            Explore our community outreach, school activities, and empowerment programs in real-time slideshows and video highlights.
          </p>
        </div>

        {/* PHOTO SLIDESHOW CAROUSEL */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl">
              <Camera className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Photo Albums Slideshow</h2>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-2 sm:p-4">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, EffectFade]}
              effect="fade"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]"
            >
              {galleryImages.map((image, idx) => (
                <SwiperSlide key={idx} className="relative bg-slate-950">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay Gradient with Captions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
                      RACO Impact Gallery
                    </span>
                    <h3 className="text-white font-extrabold text-xl sm:text-3xl">{image.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">{image.caption}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* FEATURED VIDEO SHOWCASE */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-slate-900 text-amber-500 rounded-xl">
              <PlayCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Video Highlights</h2>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-inner">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="RACO Orphanage School & Community Outreach Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="pt-5 px-2">
              <h3 className="font-extrabold text-xl text-slate-900">RACO School & Empowerment Outreach Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Watch our story, featuring student classroom activities, widow trade equipment setup, and medical outreach programs at Light City.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
                    }
