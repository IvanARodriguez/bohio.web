import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import { useDictionary } from "@/context/GlobalContext";
import { Metadata } from "next";
import { Dictionary } from "./dictionaries/dictionary";
import { getDictionary } from "./dictionary";
import { Language } from "@/types";

type Props = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translation: Dictionary = await getDictionary((await params).lang);
  const homePage = translation.homePage;
  return {
    title: homePage.head.title,
    description: homePage.head.description,
  };
}

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}
