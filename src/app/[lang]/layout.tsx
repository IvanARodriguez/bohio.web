import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "../globals.css";
import { GlobalProvider, useDictionary } from "@/context/globalContext";
import Header from "@/components/common/Header";
import { getDictionary } from "./dictionary";
import { Language } from "@/types";
import { AuthProvider } from "@/context/authProvider";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweatherSerif = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bohío | Home spaces, inspired by others",
  description:
    "Find and share the best home spaces ideas for bedrooms, kitchens, bathrooms, patios, living rooms, office & more.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body className={`${interSans.variable} ${merriweatherSerif.variable} antialiased`}>
        <GlobalProvider dictionary={dictionary}>
          <AuthProvider>{children}</AuthProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
