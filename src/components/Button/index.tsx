import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "rounded"
    | "tertiary";
  ariaLabel?: string;
  variant?: "pill" | "circle";
  icon?: {
    element: React.ReactNode;
    iconPosition: "left" | "right" | "center";
  };
}

export default function Button(props: ButtonProps) {
  const {
    children,
    color = "primary",
    icon,
    ariaLabel = "button",
    variant = "rounded",
    className = "",
  } = props;

  let buttonStyles =
    "flex cursor-pointer items-center min-h-[44px] px-4 py-1 transition-all font-medium focus:outline-none";

  // Button color based on the provided color prop
  switch (color) {
    case "primary":
      buttonStyles += " bg-orange-900 text-white hover:bg-orange-800";
      break;
    case "secondary":
      buttonStyles += " bg-gray-500 text-white hover:bg-gray-600";
      break;
    case "success":
      buttonStyles += " bg-green-500 text-white hover:bg-green-600";
      break;
    default:
      buttonStyles += " bg-gray-500 text-white";
  }

  switch (variant) {
    case "pill":
      buttonStyles += " rounded-full";
      break;
    case "circle":
      buttonStyles += "h-11 w-11 rounded-full";
      break;
    default:
      buttonStyles += " rounded";
  }

  const iconStyles = icon
    ? icon.iconPosition === "left"
      ? "mr-2"
      : icon.iconPosition === "right"
      ? "ml-2"
      : ""
    : "";

  buttonStyles += className;

  const iconWrapperStyles =
    icon && icon.iconPosition === "center" ? "flex justify-center items-center" : "";

  return (
    <button className={buttonStyles} aria-label={ariaLabel}>
      {icon && icon.iconPosition === "center" ? (
        <span className={iconWrapperStyles}>{icon.element}</span>
      ) : (
        <>
          {icon && icon.iconPosition === "left" && (
            <span className={iconStyles}>{icon.element}</span>
          )}
          {children}
          {icon && icon.iconPosition === "right" && (
            <span className={iconStyles}>{icon.element}</span>
          )}
        </>
      )}
    </button>
  );
}
