"use client";

import React from "react";
import Text from "@/components/Text";
import SearchForm from "@/components/forms/SearchForm";
import { useGlobalContext } from "@/context/GlobalContext";

function Hero() {
  const { dictionary } = useGlobalContext();
  console.log(dictionary);
  const homepage = dictionary["homePage"];
  return (
    <main>
      <div className="flex flex-col text-center items-center justify-center py-12 gap-2 min-h-44">
        <Text className="sm:leading-18" fontFamily="serif" variant="h1" size="jumbo">
          {homepage.main.title1} <br /> {homepage.main.title2}
        </Text>
        <Text variant="h2" size="lg">
          Discover, create, and share beautifully designed spaces <br /> that reflect your unique
          taste.
        </Text>
        <SearchForm />
      </div>
    </main>
  );
}

export default Hero;
