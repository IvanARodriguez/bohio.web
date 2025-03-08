import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import Header from "@/components/common/Header";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${merriweatherSerif.variable} antialiased`}>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
