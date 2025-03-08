import React from "react";
import Text from "@/components/Text";

function Hero() {
  return (
    <main>
      <div className="flex flex-col text-center items-center justify-center py-12 gap-2 min-h-44">
        <Text className="leading-18" fontFamily="serif" variant="h1" size="jumbo">
          Inspiring Home Spaces for <br />
          Every Style
        </Text>
        <Text variant="h2" size="lg">
          Discover, create, and share beautifully designed spaces <br /> that reflect your unique
          taste.
        </Text>
      </div>
    </main>
  );
}

export default Hero;
