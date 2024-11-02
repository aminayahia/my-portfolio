import clsx from "clsx";
import { JSX, ReactNode } from "react";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "outline" | "icon" | "disabled";
  icon?: JSX.Element;
  iconTheme?: "accent" | "secondray" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  fullWidth = false,
  type = "button", //par defaut
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": //default
      variantStyles =
        "bg-orange-300 hover:bg-orange-400 text-white-50 rounded px-4 py-2";
      break;

    case "outline":
      variantStyles =
        "bg-white-50  border-white-400 rounded  text-white-500 border-2 px-4 py-2";
      break;
    case "icon":
      variantStyles =
        "bg-white hover:bg-gray-300 border-primary-400 text-gray-900 rounded px-4 py-2";
      break;
    case "disabled":
      variantStyles =
        "bg-white-50  border-white-400 rounded  text-white-500 border-2 cursor-allowed px-4 py-2";
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "text-2xl";
      break;
    case "medium":
      sizeStyles = "text-3xl";
      break;

    case "large":
      sizeStyles = "text-4xl";
      break;
  }
  return (
    <>
      <button
        type={type}
        className={clsx(variantStyles, icoSize, sizeStyles, isLoading && "cursor-wait", fullWidth && "full-width")}
        onClick={() => console.log("clic")}
        disabled={disabled || isLoading ? true : false }
      >
        {children}
      </button>
    </>
  );
};
