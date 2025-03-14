import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  variant?: "plain" | "blue" | "button";
  underline?: boolean;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const Link = ({
  href,
  variant = "plain",
  underline = false,
  children,
  className,
  ariaLabel,
}: LinkProps) => {
  const variantStyles = {
    plain: "text-gray-700 hover:text-black",
    blue: "text-blue-600 hover:text-blue-800",
    button: "rounded block p-4 lg:p-2 bg-orange-900 text-white hover:bg-orange-800",
  };

  const underlineStyle = underline ? "underline" : "";

  const mergedClasses = `${variantStyles[variant]} ${underlineStyle} ${className}`;

  return (
    <NextLink href={href} className={mergedClasses} aria-label={ariaLabel}>
      {children}
    </NextLink>
  );
};

export default Link;
