export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-amber-500">
        RACO Child Orphanage & School
      </h1>
      <p className="max-w-xl text-slate-300 text-lg mb-8">
        Restoring hope, providing quality education, and transforming lives for vulnerable children.
      </p>
      <a
        href="/about"
        className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition"
      >
        View Our Leadership
      </a>
    </main>
  );
}
