import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  variant?: "plain" | "blue" | "button";
  underline?: boolean;
  children: ReactNode;
}

const Link = ({ href, variant = "plain", underline = false, children }: LinkProps) => {
  const baseStyles = "p-4 lg:p-2";

  const variantStyles = {
    plain: "text-gray-700 hover:text-black",
    blue: "text-blue-600 hover:text-blue-800",
    button: "rounded bg-orange-900 text-white hover:bg-orange-800",
  };

  const underlineStyle = underline ? "underline" : "";

  const className = `${baseStyles} ${variantStyles[variant]} ${underlineStyle}`;

  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
