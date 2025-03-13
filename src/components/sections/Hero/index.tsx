"use client";

import React from "react";
import Text from "@/components/Text";
import SearchForm from "@/components/forms/SearchForm";
import { useGlobalContext } from "@/context/GlobalContext";

function Hero() {
  const { dictionary } = useGlobalContext();
  const homepage = dictionary["homePage"];
  const translatedTitle = homepage.main.title.split("\n");
  const translatedSubtitle = homepage.main.subtitle.split("\n");
  const renderTranslatedTitle = () => (
    <>
      {translatedTitle.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </>
  );
  const renderTranslatedSubtitle = () => (
    <>
      {translatedSubtitle.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </>
  );

  return (
    <main>
      <div className="flex flex-col text-center items-center justify-center py-12 gap-2 min-h-44">
        <Text className="sm:leading-18" fontFamily="serif" variant="h1" size="jumbo">
          {renderTranslatedTitle()}
        </Text>
        <Text variant="h2" size="lg">
          {renderTranslatedSubtitle()}
        </Text>
        <SearchForm />
      </div>
    </main>
  );
}

export default Hero;
