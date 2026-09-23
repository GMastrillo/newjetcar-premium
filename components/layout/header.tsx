"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Search, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/vehicles";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/95 via-black/50 to-transparent py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Left: Estoque & Experiência */}
          <div className="hidden lg:flex items-center space-x-7 w-1/3">
            <button
              onClick={() => scrollToSection("showroom")}
              className="text-xs uppercase tracking-[0.22em] text-white hover:text-accent transition-colors flex items-center space-x-2 font-medium group"
            >
              <Search className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span>Estoque</span>
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-accent transition-colors"
            >
              Experiência
            </button>
          </div>

          {/* Center: Brand Luxury Logo with Official Emblem */}
          <div className="flex items-center justify-center lg:w-1/3 text-center">
            <Link
              href="/"
              className="group flex items-center space-x-3.5 tracking-tight"
            >
              <div className="relative w-12 h-10 sm:w-14 sm:h-11 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="NewJetCar Premium Logo"
                  width={56}
                  height={44}
                  priority
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col items-start text-left">
                <span className="font-serif text-lg sm:text-xl tracking-[0.22em] font-bold text-white uppercase group-hover:text-gold-light transition-colors leading-none">
                  NEWJETCAR
                </span>
                <div className="flex items-center space-x-1.5 mt-1">
                  <span className="h-[1px] w-3 bg-accent" />
                  <span className="text-[9px] tracking-[0.38em] text-accent uppercase font-mono font-medium">
                    PREMIUM MOTORS
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Concierge, Contato & VIP Concierge Button */}
          <div className="hidden lg:flex items-center justify-end space-x-7 w-1/3">
            <nav className="flex items-center space-x-6 text-xs uppercase tracking-[0.2em] text-neutral-400">
              <button
                onClick={() => scrollToSection("concierge")}
                className="hover:text-accent transition-colors"
              >
                Concierge
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="hover:text-accent transition-colors"
              >
                Contato
              </button>
            </nav>

            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20um%20atendimento%20VIP%20na%20NewJetCar%20Premium.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 border border-accent/40 bg-accent/10 hover:bg-accent hover:text-black text-accent hover:border-accent text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
            >
              <span>Atendimento VIP</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20da%20NewJetCar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-accent/50 bg-accent/10 text-accent text-[10px] uppercase tracking-wider font-semibold"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-accent transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden animate-in fade-in duration-300">
          
          <div className="flex items-center space-x-3 pb-6 border-b border-white/10">
            <Image
              src="/images/logo.png"
              alt="Logo NewJetCar"
              width={48}
              height={36}
              className="object-contain"
            />
            <div>
              <span className="font-serif text-lg font-bold uppercase tracking-widest text-white block">
                NEWJETCAR
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-accent font-mono">
                PREMIUM MOTORS
              </span>
            </div>
          </div>

          <nav className="flex flex-col space-y-6 my-auto py-6">
            <button
              onClick={() => scrollToSection("showroom")}
              className="text-left text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-2 border-b border-white/10"
            >
              Estoque & Veículos
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-left text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-2 border-b border-white/10"
            >
              A Experiência
            </button>
            <button
              onClick={() => scrollToSection("concierge")}
              className="text-left text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-2 border-b border-white/10"
            >
              Bespoke Concierge
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-left text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-2 border-b border-white/10"
            >
              Diferenciais & Perícia
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-2xl font-serif uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-2 border-b border-white/10"
            >
              Localização & Contato
            </button>
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              {COMPANY_INFO.address} — {COMPANY_INFO.city}, {COMPANY_INFO.state}
            </div>
            <div className="text-sm text-neutral-300 flex items-center space-x-2 font-mono">
              <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20um%20atendimento%20VIP%20na%20NewJetCar%20Premium.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3.5 bg-accent hover:bg-accent-hover text-black text-center text-xs uppercase tracking-[0.25em] font-bold transition-colors"
            >
              Falar com um Consultor
            </a>
          </div>
        </div>
      )}
    </>
  );
}
