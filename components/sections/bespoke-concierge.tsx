"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/vehicles";

export function BespokeConcierge() {
  const [formData, setFormData] = useState({
    model: "",
    name: "",
    phone: "",
    email: "",
    armoredPreference: "Indiferente",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.model || !formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar um veículo pelo Bespoke Concierge da NewJetCar Premium:\n\n` +
      `• Modelo desejado: ${formData.model}\n` +
      `• Nome: ${formData.name}\n` +
      `• WhatsApp/Telefone: ${formData.phone}\n` +
      `• E-mail: ${formData.email || "Não informado"}\n` +
      `• Blindagem: ${formData.armoredPreference}`
    );

    // Open WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="concierge" className="relative z-10 py-24 sm:py-32 bg-[#080808] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-accent/25 p-8 sm:p-14 shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.35em] text-accent font-mono block mb-2 font-medium">
              Bespoke Car Hunter & Encomendas
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase tracking-[0.1em] text-white">
              Não encontrou o modelo <br />
              <span className="text-gold-gradient">que estava buscando?</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-3 leading-relaxed">
              Nossa equipe de consultoria internacional localiza exemplares raros, configurações exclusivas e superesportivos sob encomenda com laudo pericial certificado.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-serif uppercase tracking-wider text-white">
                Solicitação Encaminhada
              </h3>
              <p className="text-xs font-mono text-neutral-400 max-w-md mx-auto">
                Sua encomenda foi enviada diretamente para a mesa de atendimento VIP da NewJetCar. Um consultor entrará em contato em instantes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 border border-accent/40 text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black font-semibold transition-colors"
              >
                Fazer Nova Encomenda
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Modelo & Versão Desejada *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Porsche 911 GT3 ou BMW M3 Competition"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 focus:border-accent px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dr. Roberto Alencar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 focus:border-accent px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    WhatsApp ou Telefone Direto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 focus:border-accent px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    E-mail Corporativo / Pessoal
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 focus:border-accent px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="pt-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-2">
                  Preferência quanto à Blindagem
                </label>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
                  {["Indiferente", "Exigir Blindagem Nível III-A", "Somente Não-Blindado"].map((pref) => (
                    <label key={pref} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="armoredPreference"
                        value={pref}
                        checked={formData.armoredPreference === pref}
                        onChange={(e) => setFormData({ ...formData, armoredPreference: e.target.value })}
                        className="accent-accent"
                      />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Legal disclaimer */}
              <div className="text-[10px] font-mono text-neutral-500 leading-relaxed pt-2">
                Ao enviar seus dados, você autoriza a NewJetCar Premium a entrar em contato com ofertas exclusivas e consultoria sob medida, em conformidade com as diretrizes da LGPD.
              </div>

              {/* Submit CTA in Gold */}
              <div className="pt-2 flex justify-center sm:justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-3.5 bg-accent hover:bg-accent-hover text-black text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>Solicitar Encomenda VIP</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
