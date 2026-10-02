'use client';

import { useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function MotionProvider() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add('motion-ready');

    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
      return;
    }

    document.documentElement.classList.remove('reduce-motion');

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section')
    );

    sections.forEach((section) => {
      section.classList.add('motion-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, [reduceMotion]);

  return null;
}
