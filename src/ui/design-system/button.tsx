import clsx from "clsx";
import { ReactNode } from "react";
import { IconType } from 'react-icons';
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "outline" | "icon" | "disabled";
  icon?: IconType;
  iconTheme?: "accent" | "secondray" ;
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
   icon: Icon,
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
        "bg-orange-300 hover:bg-orange-400 border-orange-300 border-2 text-white-50 rounded px-4 py-2";
      break;

    case "outline":
      variantStyles =
        "bg-white-50  border-white-400 rounded  text-white-500 border-2 px-4 py-2";
      break;
    case "disabled":
      variantStyles =
        "bg-white-300 hover:bg-white-300  border-white-400 border-2 text-gray-900 rounded px-4 py-2";
      break;
    case "icon":
      if(iconTheme === "accent"){
        variantStyles="bg-orange-300 rounded-full text-white-50"
      }
      if(iconTheme === "secondray"){
        variantStyles=" bg-white-400 rounded-full  text-white-700"
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-2xl ${variant ==="icon" ?"flex items-center justify-center w-[30px] h-[30px]":"px-[10px] py-[4px]"}`;
      icoSize="18";
      break;
    case "medium":
      sizeStyles = `text-3xl ${variant ==="icon" ?"flex items-center justify-center w-[40px] h-[40px]":"px-[10px] py-[4px]"}`;
      icoSize="20";
      break;

    case "large":
      sizeStyles = `text-4xl ${variant ==="icon" ?"flex items-center justify-center w-[50px] h-[50px]":"px-[10px] py-[4px]"}`;
      icoSize="23";
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
        {Icon && variant=="icon" ? (
        <Icon size={icoSize} />
          ) :  <>{children}</>}
       
      </button>
    </>
  );
};
