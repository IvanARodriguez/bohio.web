import React from "react";

// Define the props for the Text component
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
    jumbo: "text-5xl",
    xl: "text-4xl",
    lg: "text-2xl",
    md: "text-base",
    sm: "text-sm",
  };

  const combinedClassName = `${sizeClasses[size]} ${className} font-${fontFamily}`;

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
