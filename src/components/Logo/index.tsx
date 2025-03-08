import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  text?: {
    position: "center" | "left" | "right";
  };
}

const Logo: React.FC<LogoProps> = ({ size = "md", text }) => {
  if (text && text.position === "center") {
    return (
      <div className="flex justify-center items-center flex-col gap-1">
        <LogoImage />
        <span className="text-lg font-semibold">Bohio</span>
      </div>
    );
  }
  if (text && text.position === "left") {
    return (
      <div className="flex justify-center items-center gap-1">
        <span className="text-lg font-semibold">Bohio</span>
        <LogoImage />
      </div>
    );
  }
  if (text && text.position === "right") {
    return (
      <div className="flex justify-center items-center gap-1">
        <LogoImage />
        <span className="text-lg font-semibold">Bohio</span>
      </div>
    );
  }
  return <LogoImage />;
};

export default Logo;

const LogoImage = ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => {
  const widthAndHeight = size == "sm" ? 52 : size == "md" ? 80 : 150;
  return (
    <Image
      width={widthAndHeight}
      height={widthAndHeight}
      src="/logo.png"
      alt="Bohio branding logo"
    />
  );
};
