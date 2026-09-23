"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { VEHICLES, Vehicle } from "@/data/vehicles";
import { formatCurrency, formatKm } from "@/lib/utils";

interface HeroCinematicProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onExplore: () => void;
}

export function HeroCinematic({ onSelectVehicle, onExplore }: HeroCinematicProps) {
  const spotlightVehicles = VEHICLES.filter((v) => v.heroSpotlight);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const currentVehicle = spotlightVehicles[currentIndex] || spotlightVehicles[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % spotlightVehicles.length);
  }, [spotlightVehicles.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + spotlightVehicles.length) % spotlightVehicles.length);
  }, [spotlightVehicles.length]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay, handleNext]);

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-12">
      {/* Background radial spotlight with warm golden amber tint & floor reflection */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(45,38,20,0.35)_0%,rgba(10,10,10,0.95)_75%,#000000_100%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      {/* Subtle brand emblem watermark behind the car */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[240px] sm:h-[350px] opacity-[0.04] pointer-events-none z-0">
        <Image
          src="/images/logo.png"
          alt="Watermark NewJetCar"
          fill
          className="object-contain filter invert brightness-200"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Top subtle brand badge watermark */}
        <div className="text-center mb-2 sm:mb-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-accent/80 font-mono">
            {currentVehicle.heroTagline || "Coleção de Elite NewJetCar"}
          </span>
        </div>

        {/* Dynamic Vehicle Big Title */}
        <div className="text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm uppercase tracking-[0.35em] text-accent font-mono font-medium">
            {currentVehicle.brand}
          </div>
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold uppercase tracking-[0.12em] text-white">
            {currentVehicle.model}
          </h1>
        </div>

        {/* Central Vehicle Image Showcase */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[260px] sm:h-[380px] md:h-[460px] cursor-pointer group"
          onClick={() => onSelectVehicle(currentVehicle)}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Subtle gold floor reflection effect */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-accent/[0.05] blur-2xl rounded-full" />

          <Image
            src={currentVehicle.mainImage}
            alt={`${currentVehicle.brand} ${currentVehicle.model}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          {currentVehicle.armored && (
            <div className="absolute top-2 right-4 sm:right-8 flex items-center space-x-1.5 px-3 py-1 bg-black/80 border border-accent/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-accent font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span>Blindagem III-A</span>
            </div>
          )}
        </div>

        {/* Specs Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto w-full mt-4 sm:mt-6 border-y border-white/10 py-4 sm:py-5 backdrop-blur-sm bg-black/40">
          <div className="text-center border-r border-white/10 last:border-none">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
              Ano
            </span>
            <span className="text-sm sm:text-base font-mono font-medium text-white tracking-wider">
              {currentVehicle.year}
            </span>
          </div>

          <div className="text-center sm:border-r border-white/10 last:border-none">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
              Quilometragem
            </span>
            <span className="text-sm sm:text-base font-mono font-medium text-white tracking-wider">
              {formatKm(currentVehicle.km)}
            </span>
          </div>

          <div className="text-center border-r border-white/10 last:border-none">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
              Potência
            </span>
            <span className="text-sm sm:text-base font-mono font-medium text-white tracking-wider flex items-center justify-center space-x-1">
              <Zap className="w-3 h-3 text-accent" strokeWidth={1.5} />
              <span>{currentVehicle.power}</span>
            </span>
          </div>

          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">
              Investimento
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-accent tracking-wider">
              {formatCurrency(currentVehicle.price)}
            </span>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => onSelectVehicle(currentVehicle)}
            className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-black text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            Ficha Técnica & Dossiê
          </button>
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/20 bg-white/5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
          >
            Ver Todo o Estoque ({VEHICLES.length})
          </button>
        </div>
      </div>

      {/* Slide Navigation Progress Bar & Controls */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-6 flex items-center justify-between">
        {/* Slide Counter */}
        <div className="text-xs font-mono text-neutral-500 tracking-widest">
          0{currentIndex + 1} <span className="text-neutral-700">/</span> 0{spotlightVehicles.length}
        </div>

        {/* Progress Bars */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-1 max-w-xs sm:max-w-md mx-6">
          {spotlightVehicles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="h-1 flex-1 bg-white/15 relative overflow-hidden transition-all duration-300 cursor-pointer"
              aria-label={`Ir para slide ${idx + 1}`}
            >
              <div
                className={`h-full bg-accent transition-all duration-500 ${
                  currentIndex === idx ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="p-2.5 border border-white/10 hover:border-accent text-neutral-400 hover:text-accent transition-colors"
            aria-label="Slide Anterior"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 border border-white/10 hover:border-accent text-neutral-400 hover:text-accent transition-colors"
            aria-label="Próximo Slide"
          >
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
