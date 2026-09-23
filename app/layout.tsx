import type { Metadata, Viewport } from "next";
import { Cinzel, Syne, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NewJetCar Premium | Showroom de Superesportivos e Veículos Exclusivos",
  description:
    "Referência em veículos multimarcas de alto padrão, superesportivos e blindados em Vinhedo - SP. Curadoria pericial rigorosa, entrega VIP nacional e atendimento personalizado.",
  keywords: [
    "NewJetCar Premium",
    "carros de luxo",
    "superesportivos",
    "carros blindados",
    "Porsche",
    "Mercedes-Benz",
    "BMW",
    "Vinhedo",
    "São Paulo",
    "Avantgarde",
  ],
  authors: [{ name: "NewJetCar Premium" }],
  openGraph: {
    title: "NewJetCar Premium | Showroom de Superesportivos e Veículos Exclusivos",
    description:
      "Referência em veículos multimarcas de alto padrão, superesportivos e blindados em Vinhedo - SP.",
    url: "https://www.newjetcarpremium.com.br",
    siteName: "NewJetCar Premium",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewJetCar Premium | Superesportivos e Veículos de Luxo",
    description:
      "Curadoria de veículos multimarcas premium, esportivos e blindados em Vinhedo - SP.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${syne.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-[#f5f5f5] min-h-screen selection:bg-accent selection:text-white antialiased">
        <SmoothScroll>
          <Header />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
