"use client";

import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Gauge, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Vehicle } from "@/data/vehicles";
import { formatCurrency, formatKm } from "@/lib/utils";
import { SplitText } from "@/components/motion/split-text";
import { ScrambleText } from "@/components/motion/scramble-text";
import { RollingText } from "@/components/motion/rolling-text";

interface ShowroomGridProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export function ShowroomGrid({ vehicles, onSelectVehicle }: ShowroomGridProps) {
  return (
    <section id="showroom" className="relative z-10 py-20 sm:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <ScrambleText
                text="Curadoria de Alto Padrão"
                speed={20}
                className="text-xs uppercase tracking-[0.35em] text-accent font-mono"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-[0.1em] text-white">
              <SplitText text="Showroom Exclusivo" mode="char" stagger={0.03} />
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            <p className="border-l-2 border-accent pl-4">
              Cada exemplar passa por rigorosa checagem mecânica, histórico de procedência e laudo cautelar 100% aprovado. Seleção personalizada de veículos esportivos e premium.
            </p>
          </div>
        </div>

        {/* Vehicles Grid */}
        {vehicles.length === 0 ? (
          <div className="py-24 text-center border border-white/10 bg-surface/50 mt-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono block mb-2">
              Nenhum veículo encontrado
            </span>
            <p className="text-white text-lg font-serif mb-6">
              Nenhum exemplar corresponde aos critérios selecionados.
            </p>
            <p className="text-neutral-400 text-xs max-w-md mx-auto">
              Utilize nosso serviço de Bespoke Concierge abaixo para encomendar seu modelo sob medida.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {vehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onSelectVehicle(vehicle)}
                className="group relative bg-[#090909] border border-white/10 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)]"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-[#141414] to-[#070707] overflow-hidden flex items-center justify-center p-4">
                  {/* Subtle top floor reflection */}
                  <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

                  <Image
                    src={vehicle.mainImage}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Armored badge */}
                  {vehicle.armored && (
                    <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-2.5 py-1 bg-black/90 border border-accent/40 backdrop-blur-md text-[9px] uppercase tracking-widest text-accent font-mono">
                      <ShieldCheck className="w-3 h-3 text-accent" strokeWidth={1.5} />
                      <span>Blindado</span>
                    </div>
                  )}

                  {/* Hover action badge in Gold */}
                  <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1 px-3 py-1 bg-accent text-black text-[10px] uppercase tracking-widest font-bold shadow-md">
                    <RollingText text="Ficha Técnica" accentClassName="text-neutral-900" />
                    <ArrowUpRight className="w-3 h-3 ml-1" strokeWidth={2} />
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 border-t border-white/5">
                  <div>
                    {/* Brand in minimal tracking */}
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent/80 font-mono block mb-1">
                      {vehicle.brand}
                    </span>

                    {/* Model Title */}
                    <h3 className="text-lg sm:text-xl font-serif font-bold uppercase tracking-wider text-white group-hover:text-gold-light transition-colors duration-300 line-clamp-1">
                      {vehicle.model}
                    </h3>

                    {/* Micro specs */}
                    <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-neutral-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-neutral-500" strokeWidth={1.5} />
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Gauge className="w-3 h-3 text-neutral-500" strokeWidth={1.5} />
                        <span>{formatKm(vehicle.km)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono block">
                        Investimento
                      </span>
                      <span className="text-base sm:text-lg font-mono font-bold text-accent transition-colors">
                        {formatCurrency(vehicle.price)}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-white/15 group-hover:border-accent flex items-center justify-center text-neutral-400 group-hover:text-accent transition-colors">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
