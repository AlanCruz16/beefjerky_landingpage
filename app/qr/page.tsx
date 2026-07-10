"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";


export default function QrPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simular guardado
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="flex flex-col h-dvh w-full overflow-hidden select-none">
      {/* SECCIÓN 1: TEAL (Original) */}
      <section
        className="flex-1 bg-brand-teal flex flex-col justify-center items-center text-center p-6 text-brand-cream relative"
      >
        {/* Logo Casa Lavinia */}
        <div className="mt-2 animate-fade-in flex flex-col items-center z-10 -mb-4 md:-mb-8">
          <Image
            src="/logos/logo-blanco.svg"
            alt="Casa Lavinia Logo"
            width={400}
            height={160}
            className="h-24 md:h-32 w-auto object-contain drop-shadow-md scale-125"
            priority
          />
        </div>

        {/* Palabra BEEF */}
        <div className="w-full flex justify-center items-center z-20">
          <div className="overflow-hidden pb-6 px-4 -mb-6 pt-2">
            <motion.h1 
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1, delay: 0.2 }}
              className="font-mauren text-[28vw] md:text-[22vh] leading-none tracking-tight select-none uppercase transform scale-y-110 scale-105 drop-shadow-xl"
            >
              BEEF
            </motion.h1>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: ROJO (Chiltepín) */}
      <section
        className="flex-1 bg-brand-red flex flex-col justify-center items-center text-center p-4 text-brand-cream relative"
      >
        {/* Palabra JERKY */}
        <div className="w-full flex justify-center z-20">
          <div className="overflow-hidden pb-6 px-4 -mb-6 mt-4 md:mt-8 pt-2">
            <motion.h1 
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1, delay: 0.4 }}
              className="font-mauren text-[28vw] md:text-[22vh] leading-none tracking-tight select-none uppercase transform scale-y-110 scale-105 drop-shadow-xl"
            >
              JERKY
            </motion.h1>
          </div>
        </div>
        {/* Coming Soon bar */}
        <div className="mt-2 tracking-[0.15em] text-xs md:text-sm font-sans font-bold bg-brand-charcoal text-brand-cream py-1 px-4 rounded-sm animate-fade-in-delayed">
          CARNE SECA • COMING SOON
        </div>
      </section>

      {/* SECCIÓN 3: ÁMBAR (BBQ) */}
      <section
        className="flex-1 bg-brand-amber flex flex-col justify-between items-center text-center p-6 text-brand-cream relative"
      >
        {/* Subtitle / Hook */}
        <div className="flex-1 flex items-center justify-center max-w-sm px-4">
          <p className="font-sans text-base md:text-lg font-bold leading-snug tracking-wide uppercase">
            Próximamente tu snack alto en proteína favorito
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-sm px-4 mb-4">
          {submitted ? (
            <div className="bg-brand-charcoal text-brand-cream rounded-full py-3 px-6 text-sm font-bold animate-bounce-once">
              ¡LISTO! TE AVISAREMOS ANTES QUE A NADIE 🌵
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo..."
                className="flex-1 bg-white text-brand-charcoal rounded-full px-5 py-3 text-sm focus:outline-none placeholder:text-gray-400 font-medium"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-charcoal hover:bg-black text-brand-cream rounded-full px-6 py-3 text-sm font-bold tracking-wider transition-colors active:scale-95 disabled:opacity-50"
              >
                {loading ? "..." : "ENTÉRATE"}
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-1.5 opacity-90">
          <span className="text-[10px] tracking-widest font-sans font-semibold">
            ORGULLOSAMENTE SONORENSE
          </span>
          <div className="flex gap-3 text-sm font-sans font-semibold items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/casalaviniamx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 active:scale-95 transition-transform flex items-center gap-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              <span>@casalaviniamx</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
