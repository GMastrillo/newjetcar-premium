"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck, Zap, Gauge, Calendar, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { Vehicle, COMPANY_INFO } from "@/data/vehicles";
import { formatCurrency, formatKm } from "@/lib/utils";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function VehicleDetailModal({ vehicle, onClose }: VehicleDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (vehicle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá! Estava navegando no showroom da NewJetCar Premium e me interessei pelo ${vehicle.brand} ${vehicle.model} (${vehicle.year}) no valor de ${formatCurrency(vehicle.price)}. Gostaria de verificar a disponibilidade e receber mais detalhes.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 bg-[#0c0c0c] border border-white/15 w-full max-w-5xl my-auto shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top bar with close button */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/70">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono">
              Ficha Técnica Pericial
            </span>
            <span className="text-neutral-600 font-mono">/</span>
            <span className="text-xs uppercase tracking-wider text-accent font-mono font-medium">
              {vehicle.brand}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-white/15 hover:border-accent text-neutral-400 hover:text-accent transition-colors"
            aria-label="Fechar Dossiê"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Vehicle Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono block mb-1">
                {vehicle.brand}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase tracking-wider text-white">
                {vehicle.model}
              </h2>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                {vehicle.version}
              </p>
            </div>

            <div className="md:text-right">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                Valor para Negociação
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-accent">
                {formatCurrency(vehicle.price)}
              </span>
            </div>
          </div>

          {/* Large Image Showcase */}
          <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/10 flex items-center justify-center p-6">
            <Image
              src={vehicle.mainImage}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain p-4 filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)]"
            />

            {vehicle.armored && (
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1.5 bg-black/85 border border-accent/50 backdrop-blur-md text-[10px] uppercase tracking-widest text-accent font-mono">
                <ShieldCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span>Blindagem Homologada Nível III-A</span>
              </div>
            )}
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-surface p-5 border border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                Ano de Fabricação
              </span>
              <span className="text-sm font-mono text-white font-medium flex items-center space-x-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                <span>{vehicle.year}</span>
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                Quilometragem
              </span>
              <span className="text-sm font-mono text-white font-medium flex items-center space-x-1.5 mt-0.5">
                <Gauge className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                <span>{formatKm(vehicle.km)}</span>
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                Potência Máxima
              </span>
              <span className="text-sm font-mono text-white font-medium flex items-center space-x-1.5 mt-0.5">
                <Zap className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                <span>{vehicle.power}</span>
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
                Combustível
              </span>
              <span className="text-sm font-mono text-white font-medium mt-0.5 block">
                {vehicle.fuel}
              </span>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-4 pb-2 border-b border-white/10">
              Especificações Técnicas
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Motorização</span>
                <span className="text-white text-right">{vehicle.engine}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Transmissão</span>
                <span className="text-white text-right">{vehicle.transmission}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Cor Exterior</span>
                <span className="text-white text-right">{vehicle.color}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Portas</span>
                <span className="text-white text-right">{vehicle.doors} portas</span>
              </div>
              {vehicle.acceleration && (
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Aceleração (0 a 100 km/h)</span>
                  <span className="text-accent text-right font-semibold">{vehicle.acceleration}</span>
                </div>
              )}
              {vehicle.topSpeed && (
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-500 uppercase">Velocidade Máxima</span>
                  <span className="text-white text-right">{vehicle.topSpeed}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Blindagem</span>
                <span className="text-white text-right">
                  {vehicle.armored ? "Sim (Nível III-A)" : "Não blindado"}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-500 uppercase">Final de Placa</span>
                <span className="text-white text-right">{vehicle.plateEnd}</span>
              </div>
            </div>
          </div>

          {/* Description & Curatorship */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-3 pb-2 border-b border-white/10">
              Avaliação do Consultor & Histórico
            </h4>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Features / Items list */}
          {vehicle.features && vehicle.features.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-accent font-mono mb-4 pb-2 border-b border-white/10">
                Destaques e Opcionais de Fábrica
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="p-6 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-neutral-400 font-mono">
            <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span>Showroom: {COMPANY_INFO.phoneDisplay}</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3 border border-white/15 hover:border-white/30 text-xs uppercase tracking-widest text-neutral-300 transition-colors"
            >
              Voltar ao Showroom
            </button>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3 bg-accent hover:bg-accent-hover text-black text-xs uppercase tracking-[0.2em] font-bold transition-colors shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={1.5} />
              <span>Negociar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
