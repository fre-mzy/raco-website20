import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RACO Child Orphanage & School | Faith-Based Care & Empowerment',
  description: 'Providing shelter, free basic education, healthcare, widow empowerment, and youth training in rural Nigeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
