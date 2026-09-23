"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/vehicles";
import { SplitText } from "@/components/motion/split-text";
import { ScrambleText } from "@/components/motion/scramble-text";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { RollingText } from "@/components/motion/rolling-text";

export function BrandExperience() {
  return (
    <section id="experiencia" className="relative z-10 py-24 sm:py-32 bg-[#060606] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting with subtle gold warmth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/[0.03] blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <div className="h-5 flex items-center">
                <ScrambleText
                  text="NewJetCar Premium Experience"
                  speed={22}
                  className="text-xs uppercase tracking-[0.35em] text-accent font-mono block font-medium"
                />
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-[0.1em] text-white leading-tight mt-2">
                <SplitText text="Conduzindo a" mode="char" stagger={0.03} />
                <br />
                <span className="text-gold-gradient inline-block">
                  <SplitText text="Excelência Automotiva" mode="char" stagger={0.03} delay={0.2} />
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                A <strong className="text-white font-medium">NewJetCar Premium</strong> consolidou-se como um polo de referência no mercado de automóveis multimarcas premium, esportivos de alta cilindrada e blindados em Vinhedo e no interior paulista.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Com curadoria criteriosa, cada veículo de nosso showroom é selecionado individualmente, submetido a rigorosa perícia técnica e vistoriado em mais de 150 pontos para garantir procedência irretocável, integridade estrutural e quilometragem comprovada.
              </p>
            </div>

            {/* Metrics Grid with Animated Numbers */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-accent block">
                  <AnimatedNumber value={100} suffix="%" />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mt-1 block">
                  Perícia Aprovada
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-accent block">
                  <AnimatedNumber value={15} prefix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mt-1 block">
                  Anos de Mercado
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-4xl font-serif font-bold text-accent block">
                  <ScrambleText text="VIP" speed={40} className="font-serif" />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mt-1 block">
                  Entrega Nacional
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20ao%20showroom%20da%20NewJetCar%20Premium.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-accent hover:bg-accent-hover text-black text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] group"
              >
                <RollingText
                  text="Agendar Visita Exclusiva"
                  accentClassName="text-neutral-900"
                />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Right: Editorial Visual Composition with Logo Badge Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full border border-white/15 bg-surface overflow-hidden shadow-2xl group">
              <Image
                src="https://image.webmotors.com.br/vmotors-images/2026/4/24/af5c29e6-e42b-441b-a9ba-8c4f20287750.webp?w=1080&h=720&b=black&s=fill&q=100"
                alt="Showroom NewJetCar Premium"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 backdrop-blur-md border border-accent/30 flex items-center justify-between">
                <div>
                  <ScrambleText
                    text="Vinhedo • São Paulo"
                    speed={25}
                    className="text-[10px] uppercase tracking-[0.25em] text-accent font-mono block"
                  />
                  <p className="text-xs font-mono text-white mt-1">
                    Atendimento privativo e espaço exclusivo para amantes da cultura automotiva.
                  </p>
                </div>
                <div className="relative w-10 h-8 shrink-0 ml-3">
                  <Image
                    src="/images/logo.png"
                    alt="Logo NewJetCar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
