export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: number;
  price: number;
  featured?: boolean;
  heroSpotlight?: boolean;
  heroTagline?: string;
  armored: boolean; // Blindado
  engine: string; // Ex: 3.4 V6, 5.0 V8, 3.0 Turbo
  power: string; // Ex: 330 cv
  transmission: string; // PDK 7m, Automático 10m, Manual 6m
  fuel: "Gasolina" | "Diesel" | "Híbrido" | "Flex" | "Elétrico";
  acceleration?: string; // 0-100 km/h
  topSpeed?: string;
  color: string;
  doors: number;
  plateEnd: string;
  mainImage: string;
  gallery: string[];
  description: string;
  features: string[];
}

export const COMPANY_INFO = {
  name: "NewJetCar Premium",
  city: "Vinhedo",
  state: "SP",
  address: "Av. Independência, 5605 - Santa Rosa",
  cep: "13289-054",
  phoneDisplay: "(19) 3876-5388",
  phoneRaw: "551938765388",
  whatsappDisplay: "(19) 99712-5474",
  whatsappRaw: "5519997125474",
  instagram: "@newjetcarpremium",
  instagramUrl: "https://www.instagram.com/newjetcarpremium/",
  hours: "Seg a Sex: 08:30 às 18:30 | Sáb: 08:30 às 13:00",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Independência,+5605+-+Santa+Rosa,+Vinhedo+-+SP",
};

export const VEHICLES: Vehicle[] = [
  {
    id: "porsche-cayman-r",
    slug: "porsche-cayman-3-4-r",
    brand: "Porsche",
    model: "Cayman 3.4 R",
    version: "3.4 R I6 24V Gasolina 2P PDK",
    year: "2012/2012",
    km: 18450,
    price: 549000,
    featured: true,
    heroSpotlight: true,
    heroTagline: "There Is No Substitute",
    armored: false,
    engine: "3.4 Boxer 6 cilindros",
    power: "330 cv",
    transmission: "PDK Dupla Embreagem 7 Marchas",
    fuel: "Gasolina",
    acceleration: "4.7s",
    topSpeed: "282 km/h",
    color: "Prata GT Metálico",
    doors: 2,
    plateEnd: "9",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/4/24/af5c29e6-e42b-441b-a9ba-8c4f20287750.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/4/24/af5c29e6-e42b-441b-a9ba-8c4f20287750.webp?w=1080&h=720&b=black&s=fill&q=100",
      "https://image.webmotors.com.br/vmotors-images/2026/2/20/95aa2ddf-7d94-4cbf-a8cd-60350cb465a7.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Exemplar de colecionador. Versão R rara e numerada, 55kg mais leve que o Cayman S, bancos concha em fibra de carbono, rodas forjadas ultraleves e diferencial de deslizamento limitado mecânico. Laudo pericial 100% aprovado.",
    features: [
      "Bancos Concha em Fibra de Carbono",
      "Sport Chrono Package Plus",
      "Escapamento Esportivo com Válvula Ativa",
      "Suspensão Esportiva Rebaixada 20mm",
      "Freios com Pinças Vermelhas",
      "Interior em Alcântara com Costuras Vermelhas",
      "Diferencial Autoblocante (LSD)",
      "Faróis Bi-Xênon Direcionais"
    ]
  },
  {
    id: "ford-mustang-mach-1",
    slug: "ford-mustang-mach-1-5-0-v8",
    brand: "Ford",
    model: "Mustang Mach 1",
    version: "5.0 V8 Ti-VCT Mach 1 SelectShift",
    year: "2022/2022",
    km: 11200,
    price: 498000,
    featured: true,
    heroSpotlight: true,
    heroTagline: "Born to Dominate",
    armored: false,
    engine: "5.0 V8 Coyote",
    power: "483 cv",
    transmission: "Automático de 10 Marchas",
    fuel: "Gasolina",
    acceleration: "4.3s",
    topSpeed: "250 km/h",
    color: "Cinza Fighter Jet",
    doors: 2,
    plateEnd: "1",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "A lendária série Mach 1 une o bloco V8 de 483 cv com calibrações de pista derivadas do Shelby GT350. Sistema de arrefecimento reforçado de transmissão e diferencial, suspensão adaptativa MagneRide e sistema de escape ativo de 4 saídas.",
    features: [
      "Suspensão Ativa MagneRide",
      "Freios Brembo de 6 Pistões",
      "Sistema de Som Bang & Olufsen de 1000W",
      "Modo Pista com Line Lock (Track Apps)",
      "Bancos Esportivos Aquecidos e Ventilados",
      "Painel Digital Configurável de 12 Polegadas",
      "Faixas Exclusivas Mach 1 com Destaque Laranja",
      "Rodas 19 Pol com Pneus Michelin Pilot Sport 4S"
    ]
  },
  {
    id: "mercedes-gle-400d",
    slug: "mercedes-benz-gle-400d-4matic",
    brand: "Mercedes-Benz",
    model: "GLE 400d AMG",
    version: "3.0 V6 Diesel 4MATIC 9G-Tronic",
    year: "2021/2021",
    km: 34500,
    price: 680000,
    featured: true,
    heroSpotlight: true,
    heroTagline: "Sovereign Luxury",
    armored: true,
    engine: "3.0 6 Cilindros Turbodiesel",
    power: "330 cv / 71,4 kgfm",
    transmission: "9G-Tronic Automático",
    fuel: "Diesel",
    acceleration: "5.7s",
    topSpeed: "245 km/h",
    color: "Preto Obsidiana Metálico",
    doors: 4,
    plateEnd: "7",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/3/28/ede5dc4d-7e4a-415a-b44d-7c2a618fad33.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/3/28/ede5dc4d-7e4a-415a-b44d-7c2a618fad33.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Blindagem nível III-A certificada com vidros de alta transparência óptica. Pacote visual AMG Line completo, teto solar translúcido blindado, suspensão a ar AIRMATIC ajustável e pacote de assistência à condução semiautônoma.",
    features: [
      "Blindagem Nível III-A com Certificação",
      "Pacote AMG Line Exterior e Interior",
      "Suspensão Pneumática AIRMATIC",
      "Sistema de Som Burmester Surround",
      "Duas Telas de 12.3 Pol MBUX com Comandos por Voz",
      "Faróis Multibeam LED com Facho Adaptativo",
      "Câmeras 360 Graus com Visão 3D",
      "Tração Integral Permanente 4MATIC"
    ]
  },
  {
    id: "bmw-328i-sedan",
    slug: "bmw-328i-2-8-sedan-e36",
    brand: "BMW",
    model: "328i Sedan (E36)",
    version: "2.8 Sedan 24V Gasolina 4P Automático",
    year: "1996/1997",
    km: 72000,
    price: 125000,
    featured: true,
    heroSpotlight: false,
    armored: false,
    engine: "2.8 6 em Linha M52B28",
    power: "193 cv / 28,5 kgfm",
    transmission: "Automático 5 Marchas ZF",
    fuel: "Gasolina",
    acceleration: "7.3s",
    topSpeed: "236 km/h",
    color: "Azul Montreal Metálico",
    doors: 4,
    plateEnd: "8",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/6/15/981c03d7-7c82-43bc-a872-a7217e87c2aa.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/6/15/981c03d7-7c82-43bc-a872-a7217e87c2aa.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Joia da geração E36 em estado de preservação exemplar. Motor aspirado de 6 cilindros com ronco inconfundível, interior em couro original intacto, ar-condicionado digital bizona e manual do proprietário.",
    features: [
      "Motor M52 2.8 L6 24V",
      "Bancos em Couro Elétricos com Memória",
      "Teto Solar Elétrico Original",
      "Rodas Originais Style 30",
      "Computador de Bordo OBC 18 Botões",
      "Controle de Tração ASC+T",
      "Manual e Chave Reserva Originais"
    ]
  },
  {
    id: "volkswagen-fusca-1300",
    slug: "volkswagen-fusca-1-3-l-classico",
    brand: "Volkswagen",
    model: "Fusca 1300 Clássico",
    version: "1.3 L 8V Gasolina 2P Manual",
    year: "1974/1974",
    km: 41000,
    price: 75000,
    featured: true,
    heroSpotlight: false,
    armored: false,
    engine: "1.3 Boxer 4 Cilindros Refrigerado a Ar",
    power: "46 cv",
    transmission: "Manual de 4 Marchas",
    fuel: "Gasolina",
    color: "Azul Pavão",
    doors: 2,
    plateEnd: "4",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/4/27/67dd3dfe-eae9-42bc-8a5f-62bef6b49e6b.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/4/27/67dd3dfe-eae9-42bc-8a5f-62bef6b49e6b.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Ícone automotivo mundial. Veículo com restauração minuciosa no padrão de fábrica, mecânica revisada, pintura impecável e alto índice de originalidade. Apto a placa preta de coleção.",
    features: [
      "Restauração Padrão Concurso",
      "Estofamento Padrão Original em Courvin",
      "Volante Cálice com Aro de Buzina Cromado",
      "Para-choques com Batentes Originais",
      "Pneus Faixa Branca",
      "Chave Original"
    ]
  },
  {
    id: "fiat-500-abarth",
    slug: "fiat-500-1-4-abarth-turbo",
    brand: "Fiat",
    model: "500 Abarth Turbo",
    version: "1.4 Abarth 16V Turbo Gasolina 2P Manual",
    year: "2015/2015",
    km: 48900,
    price: 115000,
    featured: true,
    heroSpotlight: false,
    armored: false,
    engine: "1.4 16V MultiAir Turbo",
    power: "167 cv / 23 kgfm",
    transmission: "Manual de 5 Marchas",
    fuel: "Gasolina",
    acceleration: "6.9s",
    topSpeed: "214 km/h",
    color: "Branco Bianco Gara",
    doors: 2,
    plateEnd: "3",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/6/2/1d73cc1e-6db5-41e4-8516-06938793144b.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/6/2/1d73cc1e-6db5-41e4-8516-06938793144b.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Puro sangue italiano. O verdadeiro Pocket Rocket com câmbio manual e ronco encorpado de dupla saída. Bancos concha Abarth, modo Sport com sobrepressão de turbo e diferencial com controle de vetorização de torque (TTC).",
    features: [
      "Modo Sport com Overboost no Turbo",
      "Sistema TTC (Torque Transfer Control)",
      "Bancos Concha Abarth em Couro Nero",
      "Dupla Saída de Escapamento Cromada",
      "Sistema de Som Beats com Subwoofer",
      "Teto Solar Panorâmico Elétrico",
      "Manômetro de Pressão do Turbo no Painel"
    ]
  },
  {
    id: "audi-a3-sedan",
    slug: "audi-a3-1-8-ambition",
    brand: "Audi",
    model: "A3 Sedan Ambition",
    version: "1.8 TFSI 16V Gasolina 4P S-Tronic",
    year: "2016/2016",
    km: 68500,
    price: 109000,
    featured: false,
    armored: false,
    engine: "1.8 TFSI Turbo com Injeção Direta/Indireta",
    power: "180 cv",
    transmission: "S-Tronic Dupla Embreagem 7m",
    fuel: "Gasolina",
    acceleration: "7.3s",
    topSpeed: "235 km/h",
    color: "Branco Geleira",
    doors: 4,
    plateEnd: "5",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/2/20/95aa2ddf-7d94-4cbf-a8cd-60350cb465a7.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/2/20/95aa2ddf-7d94-4cbf-a8cd-60350cb465a7.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Versão topo de linha Ambition com motor 1.8 TFSI de 180 cv e suspensão traseira multilink. Teto solar elétrico Open Sky, faróis bi-xênon com DRL em LED e Audi Drive Select.",
    features: [
      "Teto Solar Panorâmico Open Sky",
      "Audi Drive Select com 5 Modos de Condução",
      "Faróis Bi-Xênon com DRL em LED",
      "Bancos Esportivos em Couro com Ajuste Elétrico",
      "Paddle Shifts no Volante Multifuncional",
      "Central MMI com Navegação GPS",
      "Rodas de Liga Leve Aro 17"
    ]
  },
  {
    id: "volkswagen-polo-gts",
    slug: "volkswagen-polo-1-4-250-tsi-gts",
    brand: "Volkswagen",
    model: "Polo GTS",
    version: "1.4 250 TSI GTS Automático",
    year: "2024/2024",
    km: 9800,
    price: 139000,
    featured: false,
    armored: false,
    engine: "1.4 250 TSI Flex Turbo",
    power: "150 cv / 25,5 kgfm",
    transmission: "Automático de 6 Marchas Tiptronic",
    fuel: "Flex",
    acceleration: "8.3s",
    topSpeed: "206 km/h",
    color: "Cinza Platinum Metálico",
    doors: 4,
    plateEnd: "6",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Esportivo compacto com faróis IQ.Light Matrix de LED com fita iluminada na grade. Bancos esportivos inteiriços com bordado GTS, painel Active Info Display de 10.25 pol e seletor de modos de condução com ronco amplificado.",
    features: [
      "Faróis IQ.Light Matrix com DRL Integrado",
      "Painel 100% Digital Active Info Display",
      "Central Multimídia VW Play de 10.1 Pol",
      "Bancos Esportivos Inteiriços GTS",
      "Carregador de Celular por Indução",
      "Ar-condicionado Digital Climatronic Touch",
      "Rodas Aro 18 com Pneus de Perfil Baixo"
    ]
  },
  {
    id: "brm-m11",
    slug: "brm-m-11-1-6-manual",
    brand: "BRM",
    model: "M-11 Buggy",
    version: "1.6 Gasolina Manual",
    year: "2023/2023",
    km: 1200,
    price: 98000,
    featured: false,
    armored: false,
    engine: "1.6 8V Traseiro",
    power: "75 cv",
    transmission: "Manual de 4 Marchas",
    fuel: "Gasolina",
    color: "Laranja Solar Metálico",
    doors: 2,
    plateEnd: "0",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/7/17/a4bda517-9a2e-4f7d-afa2-3380f681cb32.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/7/17/a4bda517-9a2e-4f7d-afa2-3380f681cb32.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Exclusivo buggy BRM M-11 praticamente zero quilômetro. Chassi tubular reforçado, carroceria em fibra de alta resistência, santantônio integral cromado e acabamento náutico.",
    features: [
      "Carroceria em Fibra de Vidro Naval",
      "Santantônio e Protetores em Inox Polido",
      "Bancos Concha Náuticos Impermeáveis",
      "Rodas Esportivas de Tala Larga",
      "Faróis de Milha Auxiliares em LED",
      "Estepe Traseiro com Capa Protetora"
    ]
  },
  {
    id: "toyota-corolla-cross-xrx",
    slug: "toyota-corolla-cross-1-8-hybrid-xrx",
    brand: "Toyota",
    model: "Corolla Cross XRX",
    version: "1.8 VVT-i Hybrid Flex XRX CVT",
    year: "2023/2024",
    km: 19500,
    price: 178000,
    featured: false,
    armored: false,
    engine: "1.8 Híbrido Flex com Motor Elétrico",
    power: "122 cv Combinados",
    transmission: "Automático Hybrid Transaxle e-CVT",
    fuel: "Híbrido",
    acceleration: "11.2s",
    topSpeed: "170 km/h",
    color: "Branco Lunar Perolizado",
    doors: 4,
    plateEnd: "2",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/7/31/365a70e6-1c54-4e20-b1bf-4f20535e68a8.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/7/31/365a70e6-1c54-4e20-b1bf-4f20535e68a8.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Economia e confiabilidade Toyota com acabamento premium XRX. Teto solar elétrico, pacote Toyota Safety Sense com piloto automático adaptativo e frenagem autônoma de emergência.",
    features: [
      "Toyota Safety Sense (ACC + Alerta de Colisão)",
      "Teto Solar Elétrico",
      "Bancos em Couro Bege com Ajuste Elétrico para o Motorista",
      "Ar-condicionado Digital Dual Zone",
      "Faróis Full LED com Projetores",
      "Consumo de até 17,8 km/l na Cidade"
    ]
  },
  {
    id: "mercedes-c180-exclusive",
    slug: "mercedes-benz-c-180-exclusive",
    brand: "Mercedes-Benz",
    model: "C 180 Exclusive",
    version: "1.6 CGI Flex Exclusive 9G-Tronic",
    year: "2020/2020",
    km: 36800,
    price: 210000,
    featured: false,
    armored: true,
    engine: "1.6 Turbo CGI Flex",
    power: "156 cv / 25,5 kgfm",
    transmission: "9G-Tronic Automático",
    fuel: "Flex",
    acceleration: "8.3s",
    topSpeed: "225 km/h",
    color: "Azul Cavansite Metálico",
    doors: 4,
    plateEnd: "9",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/5/20/4eed3735-0b26-4abc-a353-920f090c770a.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/5/20/4eed3735-0b26-4abc-a353-920f090c770a.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Versão clássica Exclusive com a icônica estrela sobre o capô e acabamento em madeira de lei fosca. Blindagem nível III-A em perfeito estado sem nenhuma delaminação.",
    features: [
      "Blindagem Nível III-A Certificada",
      "Grade Clássica com Estrela no Capô",
      "Acabamento em Madeira Natural Fosca",
      "Painel 100% Digital Customizável",
      "Faróis LED High Performance",
      "Dynamic Select com Modos Eco, Comfort e Sport"
    ]
  },
  {
    id: "toyota-corolla-xei",
    slug: "toyota-corolla-2-0-xei",
    brand: "Toyota",
    model: "Corolla XEi",
    version: "2.0 VVT-iE Flex Direct Shift 10m",
    year: "2023/2023",
    km: 26400,
    price: 139000,
    featured: false,
    armored: false,
    engine: "2.0 Dynamic Force Flex",
    power: "177 cv / 21,4 kgfm",
    transmission: "Direct Shift CVT com 1ª Marcha Mecânica",
    fuel: "Flex",
    acceleration: "9.2s",
    topSpeed: "205 km/h",
    color: "Prata Supernova",
    doors: 4,
    plateEnd: "3",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/5/29/08d8d946-6201-44fc-8414-ce8657ec7675.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/5/29/08d8d946-6201-44fc-8414-ce8657ec7675.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "O sedan mais valorizado do Brasil. Motor 2.0 com injeção direta e indireta, câmbio inovador com engrenagem de arrancada rápida e pacote completo de assistência ativa.",
    features: [
      "Piloto Automático Adaptativo (ACC)",
      "Alerta de Mudança de Faixa com Correção Ativa",
      "Chave Presencial Smart Entry e Partida Start/Stop",
      "Ar-condicionado Digital Automático",
      "Multimídia com Apple CarPlay e Android Auto sem Fio"
    ]
  },
  {
    id: "volvo-xc40-recharge",
    slug: "volvo-xc40-recharge-ultimate",
    brand: "Volvo",
    model: "XC40 Recharge",
    version: "Pure Electric Twin Ultimate AWD",
    year: "2023/2023",
    km: 15300,
    price: 289000,
    featured: false,
    armored: false,
    engine: "Dois Motores Elétricos (Twin Motor)",
    power: "408 cv / 67,3 kgfm",
    transmission: "Direta 1 Velocidade AWD",
    fuel: "Elétrico",
    acceleration: "4.8s",
    topSpeed: "180 km/h",
    color: "Verde Sage Metálico",
    doors: 4,
    plateEnd: "1",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/3/28/ede5dc4d-7e4a-415a-b44d-7c2a618fad33.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/3/28/ede5dc4d-7e4a-415a-b44d-7c2a618fad33.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Desempenho superesportivo em um SUV 100% elétrico com tração integral e 408 cv instantâneos. Sistema multimídia nativo Google Automotive, teto panorâmico e sistema Pilot Assist.",
    features: [
      "Potência de 408 cv com Tração AWD",
      "Autonomia de até 420 km (WLTP)",
      "Sistema Google Built-in Nativo com Maps e Spotify",
      "Som Harman Kardon Premium",
      "Pilot Assist (Condução Semiautônoma até 130 km/h)",
      "Câmeras 360 Graus e Teto Solar Panorâmico"
    ]
  },
  {
    id: "ram-3500-longhorn",
    slug: "ram-3500-limited-longhorn",
    brand: "RAM",
    model: "RAM 3500 Longhorn",
    version: "6.7 Cummins Turbodiesel 4x4",
    year: "2023/2023",
    km: 18900,
    price: 489000,
    featured: true,
    heroSpotlight: false,
    armored: false,
    engine: "6.7 Turbodiesel Cummins 6 em Linha",
    power: "377 cv / 117,2 kgfm",
    transmission: "Automático Aisin de 6 Marchas",
    fuel: "Diesel",
    acceleration: "8.5s",
    topSpeed: "160 km/h",
    color: "Marrom Bicolor Walnut Brown",
    doors: 4,
    plateEnd: "5",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "A mais sofisticada picape do mundo. Acabamento Longhorn com couro natural e madeira legítima gravada a laser, capacidade de reboque de mais de 9 toneladas e suspensão a ar traseira com nivelamento automático.",
    features: [
      "Motor Cummins 6.7L com 117,2 kgfm de Torque",
      "Interior em Couro Natura Plus com Madeira Nobre",
      "Tela Central Vertical Uconnect de 12 Polegadas",
      "Sistema de Som Harman Kardon de 750W e 17 Alto-falantes",
      "Gavetas Laterais RamBox Iluminadas e com Tomada 115V",
      "Suspensão Traseira Pneumática Active-Level"
    ]
  },
  {
    id: "ram-rampage-rebel",
    slug: "ram-rampage-rebel-2-0-turbo",
    brand: "RAM",
    model: "Rampage Rebel",
    version: "2.0 Turbo Hurricane 4 4x4 9m",
    year: "2024/2024",
    km: 12400,
    price: 249000,
    featured: false,
    armored: false,
    engine: "2.0 Turbo Hurricane 4 Gasolina",
    power: "272 cv / 40,8 kgfm",
    transmission: "Automático de 9 Marchas",
    fuel: "Gasolina",
    acceleration: "6.9s",
    topSpeed: "220 km/h",
    color: "Cinza Sting",
    doors: 4,
    plateEnd: "4",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Picape de alto desempenho com o premiado motor Hurricane 4 de 272 cv. Aceleração de 0 a 100 km/h abaixo de 7 segundos, tração 4x4 integral e interior refinado com acabamento em couro e costuras contrastantes.",
    features: [
      "Motor Hurricane 4 de 272 cv",
      "Tração 4x4 com Reduzida Eletrônica",
      "Quadro de Instrumentos Full Digital de 10.3 Pol",
      "Central Multimídia de 12.3 Pol com CarPlay sem Fio",
      "Pacote Avançado ADAS com Piloto Adaptativo",
      "Capota Marítima Elétrica Original"
    ]
  },
  {
    id: "chevrolet-silverado-high-country",
    slug: "chevrolet-silverado-high-country-v8",
    brand: "Chevrolet",
    model: "Silverado High Country",
    version: "5.3 V8 Ecotec3 Gasolina 4x4 Automático",
    year: "2024/2024",
    km: 8400,
    price: 499000,
    featured: true,
    heroSpotlight: false,
    armored: false,
    engine: "5.3 V8 com Dynamic Fuel Management",
    power: "360 cv / 52,9 kgfm",
    transmission: "Automático de 10 Marchas",
    fuel: "Gasolina",
    acceleration: "7.4s",
    topSpeed: "180 km/h",
    color: "Preto Global Metálico",
    doors: 4,
    plateEnd: "8",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/4/28/ad2e12b5-7be3-4d25-b109-b5c394b29ce5.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Topo de linha High Country equipada com estribos elétricos retráteis, som Bose premium, painel digital panorâmico e caçamba com abertura e fechamento elétrico por botão.",
    features: [
      "Motor V8 5.3 com 17 Padrões de Desativação de Cilindros",
      "Estribos Laterais com Acionamento Elétrico Retrátil",
      "Caçamba com Tampa Traseira Elétrica Multi-Flex",
      "Sistema de Som Bose de Alta Fidelidade",
      "Head-Up Display Colorido de 15 Polegadas",
      "Retrovisor Interno com Câmera Digital Integrada"
    ]
  },
  {
    id: "gwm-haval-h6-gt",
    slug: "gwm-haval-h6-gt-phev",
    brand: "GWM",
    model: "Haval H6 GT",
    version: "1.5 Turbo Híbrido Plug-in AWD",
    year: "2024/2024",
    km: 14200,
    price: 299000,
    featured: false,
    armored: false,
    engine: "1.5 Turbo + Dois Motores Elétricos (PHEV)",
    power: "393 cv / 77,7 kgfm",
    transmission: "DHT 2 Marchas Especial para Híbridos",
    fuel: "Híbrido",
    acceleration: "4.8s",
    topSpeed: "180 km/h",
    color: "Cinza Baikal Fosco",
    doors: 4,
    plateEnd: "6",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/7/1/d9b9207f-3868-4f41-9d8a-84d1bd7c1267.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "SUV Coupe híbrido plug-in com autonomia elétrica de até 170 km puramente na bateria (34 kWh). Aceleração brutal de 0-100 em 4,8s com a combinação de 393 cv e tração e-AWD.",
    features: [
      "Potência Combinada de 393 cv e 77,7 kgfm",
      "Bateria de 34 kWh com Recarga Rápida DC",
      "Autonomia 100% Elétrica de até 170 km",
      "Acabamento com Suede e Costuras Vermelhas",
      "Condução Semiautônoma Nível 2+",
      "Teto Solar Panorâmico com Cortina Elétrica"
    ]
  },
  {
    id: "toyota-hilux-sw4-grs",
    slug: "toyota-hilux-sw4-gr-s-diesel",
    brand: "Toyota",
    model: "Hilux SW4 GR-S",
    version: "2.8 D-4D 16V Turbo Diesel 4x4 Automático",
    year: "2023/2023",
    km: 29000,
    price: 399000,
    featured: true,
    heroSpotlight: false,
    armored: true,
    engine: "2.8 Turbodiesel 16V",
    power: "224 cv / 55 kgfm",
    transmission: "Automático de 6 Marchas",
    fuel: "Diesel",
    acceleration: "10.5s",
    topSpeed: "185 km/h",
    color: "Branco Pérola com Teto Preto",
    doors: 4,
    plateEnd: "7",
    mainImage: "https://image.webmotors.com.br/vmotors-images/2026/5/29/08d8d946-6201-44fc-8414-ce8657ec7675.webp?w=1080&h=720&b=black&s=fill&q=100",
    gallery: [
      "https://image.webmotors.com.br/vmotors-images/2026/5/29/08d8d946-6201-44fc-8414-ce8657ec7675.webp?w=1080&h=720&b=black&s=fill&q=100"
    ],
    description: "Série especial Gazoo Racing com calibração exclusiva de suspensão monotubo e motor turbodiesel recalibrado para 224 cv. Blindagem nível III-A impecável, 7 lugares e tração 4x4 integral com reduzida.",
    features: [
      "Blindagem Nível III-A Homologada",
      "Capacidade para 7 Passageiros",
      "Suspensão Esportiva Gazoo Racing Monotubo",
      "Sistema de Som JBL Premium com 10 Alto-Falantes",
      "Bancos com Revestimento Suede e Couro GR",
      "Faróis Bi-LED e Lanternas em LED Escurecidas"
    ]
  }
];

export const BRANDS = Array.from(new Set(VEHICLES.map((v) => v.brand))).sort();
