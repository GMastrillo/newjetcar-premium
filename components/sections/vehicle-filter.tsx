"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { BRANDS, Vehicle } from "@/data/vehicles";

export interface FilterState {
  searchQuery: string;
  brand: string;
  model: string;
  yearMin: string;
  yearMax: string;
  priceMin: string;
  priceMax: string;
  armoredOnly: boolean;
  fuelType: string;
}

interface VehicleFilterProps {
  vehicles: Vehicle[];
  filterState: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalFilteredCount: number;
}

export function VehicleFilter({
  vehicles,
  filterState,
  onFilterChange,
  onReset,
  totalFilteredCount,
}: VehicleFilterProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Available models based on selected brand
  const availableModels = useMemo(() => {
    let list = vehicles;
    if (filterState.brand) {
      list = list.filter((v) => v.brand.toLowerCase() === filterState.brand.toLowerCase());
    }
    return Array.from(new Set(list.map((v) => v.model))).sort();
  }, [vehicles, filterState.brand]);

  const handleBrandChange = (brand: string) => {
    onFilterChange({
      ...filterState,
      brand,
      model: "", // reset model when brand changes
    });
  };

  const handleModelChange = (model: string) => {
    onFilterChange({
      ...filterState,
      model,
    });
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filterState.brand) count++;
    if (filterState.model) count++;
    if (filterState.yearMin || filterState.yearMax) count++;
    if (filterState.priceMin || filterState.priceMax) count++;
    if (filterState.armoredOnly) count++;
    if (filterState.fuelType) count++;
    if (filterState.searchQuery) count++;
    return count;
  }, [filterState]);

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-6 sm:px-8 w-full">
      <div className="bg-glass-card border border-white/10 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Section mini label */}
          <div className="pr-4 lg:border-r border-white/10 min-w-[200px]">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono block">
              Curadoria de Estoque
            </span>
            <span className="text-base sm:text-lg font-serif font-semibold text-white tracking-wide">
              Encontre seu veículo
            </span>
          </div>

          {/* Quick Filter Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
            
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar modelo ou versão..."
                value={filterState.searchQuery}
                onChange={(e) => onFilterChange({ ...filterState, searchQuery: e.target.value })}
                className="w-full bg-black/60 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors tracking-wide font-mono"
              />
              <Search className="absolute right-3.5 top-3 w-4 h-4 text-neutral-500 pointer-events-none" strokeWidth={1.5} />
            </div>

            {/* Brand Dropdown */}
            <div className="relative">
              <select
                value={filterState.brand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full bg-black/60 border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors tracking-wider uppercase font-mono cursor-pointer appearance-none"
              >
                <option value="" className="bg-[#111111]">Todas as Marcas</option>
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand} className="bg-[#111111]">
                    {brand}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-3.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neutral-400 w-0 h-0" />
            </div>

            {/* Model Dropdown */}
            <div className="relative">
              <select
                value={filterState.model}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full bg-black/60 border border-white/15 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-accent transition-colors tracking-wider uppercase font-mono cursor-pointer appearance-none"
              >
                <option value="" className="bg-[#111111]">
                  {filterState.brand ? `Modelos ${filterState.brand}` : "Todos os Modelos"}
                </option>
                {availableModels.map((model) => (
                  <option key={model} value={model} className="bg-[#111111]">
                    {model}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-3.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neutral-400 w-0 h-0" />
            </div>
          </div>

          {/* Action Buttons: Advanced Filter & Results */}
          <div className="flex items-center space-x-3 pt-2 lg:pt-0 lg:pl-4 lg:border-l border-white/10">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 border border-white/20 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-widest text-white transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span>Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-mono">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={onReset}
                className="p-2.5 border border-white/15 hover:border-red-500/50 text-neutral-400 hover:text-white transition-colors"
                title="Limpar Filtros"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Counter Strip */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Exibindo {totalFilteredCount} {totalFilteredCount === 1 ? "veículo selecionado" : "veículos selecionados"}</span>
          {filterState.brand && (
            <span className="text-accent uppercase tracking-wider">
              Filtro Ativo: {filterState.brand} {filterState.model && `/ ${filterState.model}`}
            </span>
          )}
        </div>
      </div>

      {/* Advanced Filter Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e0e0e] border border-white/15 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  Pesquisa Avançada
                </span>
                <h3 className="text-xl font-serif uppercase tracking-wider text-white">
                  Refinar Filtros do Showroom
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-5">
              {/* Marcas & Modelos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Marca
                  </label>
                  <select
                    value={filterState.brand}
                    onChange={(e) => handleBrandChange(e.target.value)}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white font-mono"
                  >
                    <option value="">Todas</option>
                    {BRANDS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Modelo
                  </label>
                  <select
                    value={filterState.model}
                    onChange={(e) => handleModelChange(e.target.value)}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white font-mono"
                  >
                    <option value="">Todos</option>
                    {availableModels.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Combustível & Blindagem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Propulsão / Combustível
                  </label>
                  <select
                    value={filterState.fuelType}
                    onChange={(e) => onFilterChange({ ...filterState, fuelType: e.target.value })}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white font-mono"
                  >
                    <option value="">Todos os Tipos</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Híbrido">Híbrido</option>
                    <option value="Elétrico">Elétrico</option>
                    <option value="Flex">Flex</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Blindagem
                  </label>
                  <div className="flex items-center space-x-4 pt-1.5">
                    <label className="flex items-center space-x-2 text-xs text-neutral-300 font-mono cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterState.armoredOnly}
                        onChange={(e) => onFilterChange({ ...filterState, armoredOnly: e.target.checked })}
                        className="accent-accent w-4 h-4 cursor-pointer"
                      />
                      <span>Apenas Veículos Blindados (Nível III-A)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Faixas de Preço e Ano */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Investimento Máximo (R$)
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 500000"
                    value={filterState.priceMax}
                    onChange={(e) => onFilterChange({ ...filterState, priceMax: e.target.value })}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block mb-1.5">
                    Ano Mínimo
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 2020"
                    value={filterState.yearMin}
                    onChange={(e) => onFilterChange({ ...filterState, yearMin: e.target.value })}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-xs text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
              <button
                onClick={onReset}
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white font-mono transition-colors"
              >
                Limpar Tudo
              </button>

              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
              >
                Aplicar Filtros ({totalFilteredCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
