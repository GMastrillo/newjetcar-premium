"use client";

import { useState, useMemo } from "react";
import { VEHICLES, Vehicle, COMPANY_INFO } from "@/data/vehicles";
import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { KineticTicker } from "@/components/motion/kinetic-ticker";
import { VehicleFilter, FilterState } from "@/components/sections/vehicle-filter";
import { ShowroomGrid } from "@/components/sections/showroom-grid";
import { BrandExperience } from "@/components/sections/brand-experience";
import { Differentials } from "@/components/sections/differentials";
import { BespokeConcierge } from "@/components/sections/bespoke-concierge";
import { VehicleDetailModal } from "@/components/modals/vehicle-detail-modal";
import { MessageSquare } from "lucide-react";

const initialFilterState: FilterState = {
  searchQuery: "",
  brand: "",
  model: "",
  yearMin: "",
  yearMax: "",
  priceMin: "",
  priceMax: "",
  armoredOnly: false,
  fuelType: "",
};

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [filterState, setFilterState] = useState<FilterState>(initialFilterState);

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      // Search Query
      if (filterState.searchQuery) {
        const query = filterState.searchQuery.toLowerCase();
        const matchesQuery =
          vehicle.brand.toLowerCase().includes(query) ||
          vehicle.model.toLowerCase().includes(query) ||
          vehicle.version.toLowerCase().includes(query) ||
          vehicle.color.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Brand
      if (filterState.brand && vehicle.brand.toLowerCase() !== filterState.brand.toLowerCase()) {
        return false;
      }

      // Model
      if (filterState.model && vehicle.model.toLowerCase() !== filterState.model.toLowerCase()) {
        return false;
      }

      // Year Min
      if (filterState.yearMin) {
        const startYear = parseInt(vehicle.year.split("/")[0], 10);
        if (startYear < parseInt(filterState.yearMin, 10)) return false;
      }

      // Year Max
      if (filterState.yearMax) {
        const endYear = parseInt(vehicle.year.split("/")[1] || vehicle.year.split("/")[0], 10);
        if (endYear > parseInt(filterState.yearMax, 10)) return false;
      }

      // Price Min
      if (filterState.priceMin && vehicle.price < parseFloat(filterState.priceMin)) {
        return false;
      }

      // Price Max
      if (filterState.priceMax && vehicle.price > parseFloat(filterState.priceMax)) {
        return false;
      }

      // Armored only
      if (filterState.armoredOnly && !vehicle.armored) {
        return false;
      }

      // Fuel Type
      if (filterState.fuelType && vehicle.fuel !== filterState.fuelType) {
        return false;
      }

      return true;
    });
  }, [filterState]);

  const handleResetFilters = () => {
    setFilterState(initialFilterState);
  };

  const handleExploreShowroom = () => {
    const el = document.getElementById("showroom");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* 01. Hero Cinematic Showcase */}
      <HeroCinematic
        onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
        onExplore={handleExploreShowroom}
      />

      {/* Kinetic Luxury Ticker Runway */}
      <KineticTicker />

      {/* 02. Interactive Vehicle Filter */}
      <VehicleFilter
        vehicles={VEHICLES}
        filterState={filterState}
        onFilterChange={setFilterState}
        onReset={handleResetFilters}
        totalFilteredCount={filteredVehicles.length}
      />

      {/* 03. Showroom Grid */}
      <ShowroomGrid
        vehicles={filteredVehicles}
        onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
      />

      {/* Secondary Kinetic Ethos Ticker */}
      <KineticTicker
        items={[
          "LAUDO CAUTELAR 100% APROVADO",
          "BLINDAGEM NÍVEL III-A CERTIFICADA",
          "CONSIGNAÇÃO ESTRATÉGICA DISCRETA",
          "ENTREGA NACIONAL EM CAMINHÃO FECHADO",
          "ATENDIMENTO PRIVATIVO EM VINHEDO",
          "SUPERESPORTIVOS SOB ENCOMENDA",
        ]}
        speedSeconds={40}
        className="bg-[#050505] border-white/5 py-3.5"
      />

      {/* 04. Brand Experience Narrative */}
      <BrandExperience />

      {/* 05. 4 Pillars Differentials */}
      <Differentials />

      {/* 06. Bespoke Concierge / Car Hunter */}
      <BespokeConcierge />

      {/* 07. Technical Dossier Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />

      {/* Floating WhatsApp VIP Button (Black & Gold) */}
      <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappRaw}&text=Olá,%20estava%20navegando%20no%20site%20da%20NewJetCar%20Premium%20e%20gostaria%20de%20mais%20informações.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 px-4 py-3 bg-black/90 hover:bg-black border border-accent/40 hover:border-accent text-white shadow-[0_4px_25px_rgba(212,175,55,0.2)] backdrop-blur-md transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
            <MessageSquare className="w-4 h-4" strokeWidth={1.5} />
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-[9px] uppercase tracking-widest text-accent font-mono block font-medium">
              Concierge Direto
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-white group-hover:text-accent transition-colors">
              Chamar no WhatsApp
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
