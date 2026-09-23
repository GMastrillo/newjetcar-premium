"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/vehicles";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contato" className="relative z-10 bg-black border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Address with Official Logo */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3.5 group">
              <div className="relative w-12 h-10 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="NewJetCar Premium Logo"
                  width={52}
                  height={40}
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                />
              </div>

              <div>
                <span className="font-serif text-xl tracking-[0.22em] font-bold text-white uppercase block group-hover:text-gold-light transition-colors">
                  NEWJETCAR
                </span>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="h-[1px] w-3 bg-accent" />
                  <span className="text-[9px] tracking-[0.38em] text-accent uppercase font-mono font-medium">
                    PREMIUM MOTORS
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
              Conduzindo a excelência automotiva.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-neutral-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p>{COMPANY_INFO.address}</p>
                  <p>{COMPANY_INFO.city} - {COMPANY_INFO.state} • CEP {COMPANY_INFO.cep}</p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center space-x-1 mt-1 text-[11px]"
                  >
                    <span>Ver no Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0" strokeWidth={1.5} />
                <span className="text-neutral-400">{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Contact Direct Line */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-mono block font-medium">
              Atendimento Especializado
            </span>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                  Telefone Showroom
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-lg font-mono text-white hover:text-accent transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                  WhatsApp Concierge
                </span>
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20falar%20com%20a%20NewJetCar%20Premium.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-accent hover:underline flex items-center space-x-2 font-medium"
                >
                  <span>{COMPANY_INFO.whatsappDisplay}</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4 text-accent fill-none stroke-current" strokeWidth={1.5} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>{COMPANY_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-mono block font-medium">
              Navegação
            </span>

            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-neutral-400 font-mono">
              <li>
                <button
                  onClick={() => scrollTo("showroom")}
                  className="hover:text-accent transition-colors text-left"
                >
                  Estoque de Veículos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("experiencia")}
                  className="hover:text-accent transition-colors text-left"
                >
                  A Experiência NewJetCar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("concierge")}
                  className="hover:text-accent transition-colors text-left"
                >
                  Bespoke Car Hunter
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("diferenciais")}
                  className="hover:text-accent transition-colors text-left"
                >
                  Diferenciais & Perícia
                </button>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20saber%20sobre%20consignação%20de%20veículo.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors text-left"
                >
                  Consignação Premium
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
          <div>
            © 2026 {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Política de Privacidade
            </span>
            <span>•</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Conformidade LGPD
            </span>
          </div>

          <div className="text-neutral-600">
            Black & Gold Luxury Edition
          </div>
        </div>

      </div>
    </footer>
  );
}
