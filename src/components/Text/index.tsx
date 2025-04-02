import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: "jumbo" | "xl" | "lg" | "md" | "sm";
  variant?: "h1" | "h2" | "h3" | "label" | "p" | "caption";
  fontFamily?: "serif" | "sans";
}

const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  variant = "p",
  className = "",
  fontFamily = "sans",
  ...rest
}) => {
  const sizeClasses = {
    jumbo: "text-4xl sm:text-5xl",
    xl: "text-3xl sm:text-4xl",
    lg: "text-xl sm:text-2xl",
    md: "text-base",
    sm: "text-sm",
  };

  const fontClasses = {
    sans: "font-sans",
    serif: "font-serif",
  };

  const headingReset = "font-inherit leading-tight";
  const combinedClassName = `${sizeClasses[size]} ${className} ${fontClasses[fontFamily] || ""} ${
    variant.startsWith("h") ? headingReset : ""
  }`;

  switch (variant) {
    case "h1":
      return (
        <h1 className={combinedClassName} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={combinedClassName} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={combinedClassName} {...rest}>
          {children}
        </h3>
      );
    case "label":
      return (
        <label className={combinedClassName} {...rest}>
          {children}
        </label>
      );
    case "caption":
      return (
        <span className={`${combinedClassName} text-xs italic`} {...rest}>
          {children}
        </span>
      );
    case "p":
    default:
      return (
        <p className={combinedClassName} {...rest}>
          {children}
        </p>
      );
  }
};

export default Text;
