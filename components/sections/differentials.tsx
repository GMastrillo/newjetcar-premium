"use client";

import { ShieldCheck, Truck, KeyRound, Eye } from "lucide-react";

export function Differentials() {
  const pillars = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Curadoria Pericial Rigorosa",
      subtitle: "Laudo Cautelar 100% Aprovado",
      description:
        "Cada veículo passa por análise microscópica de estrutura, pintura, histórico de leilões, sinistros e verificação eletrônica com scanners homologados pelas montadoras.",
    },
    {
      number: "02",
      icon: Truck,
      title: "Entrega VIP em Todo o Brasil",
      subtitle: "Transporte Fechado com Seguro Total",
      description:
        "Logística dedicada e confidencial. Seu novo veículo é transportado diretamente até a sua residência ou hangar em caminhão plataforma fechado e climatizado.",
    },
    {
      number: "03",
      icon: KeyRound,
      title: "Consignação Estratégica",
      subtitle: "Liquidez com Discrição e Segurança",
      description:
        "Posicionamos seu superesportivo perante uma seleta base de colecionadores e investidores qualificados em todo o território nacional, preservando sua privacidade.",
    },
    {
      number: "04",
      icon: Eye,
      title: "Especialistas em Blindados",
      subtitle: "Assessoria Técnica Nível III-A",
      description:
        "Supervisão de vidros sem delaminação, mantas balísticas de aramada/polietileno e certificação junto aos órgãos de fiscalização com garantia de integridade.",
    },
  ];

  return (
    <section id="diferenciais" className="relative z-10 py-24 sm:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-accent font-mono block mb-2">
            Padrão de Excelência
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-[0.1em] text-white">
            Pilares NewJetCar
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light mt-3 leading-relaxed">
            Uma abordagem consultiva e sob medida para quem exige o mais alto grau de sofisticação e transparência em negócios automotivos.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#0a0a0a] border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="font-serif text-3xl font-bold text-neutral-600 group-hover:text-accent transition-colors">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-accent font-mono block mb-1.5">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-semibold uppercase tracking-wider text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="h-[1px] w-6 bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
