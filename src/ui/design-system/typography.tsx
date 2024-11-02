import clsx from "clsx";

interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-lg"
    | "body-base"
    | "body-sm";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  theme?: "orange-light"|"orange-normal"|"orange-dark"|"orange-darker"|"black" | "primary";
  weight?: "regular" | "semibold" | "bold" | "black";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  children,
  variant = "body-base",
  component: Component = "h3",
  theme = "black",
  weight = "regular",
  className = "",
}: Props) => {
  let variantStyles: string = "";
  switch (variant) {
    case "h1":
      variantStyles = "text-8xl";
      break;
    case "h2":
      variantStyles = "text-7xl";
      break;
    case "h3":
      variantStyles = "text-6xl"; //default
      break;
    case "h4":
      variantStyles = "text-5xl";
      break;
    case "h5":
      variantStyles = "text-4xl";
      break;
    case "h6":
      variantStyles = "text-3xl";
      break;
  }
  let weightStyles: string = "";
  switch (weight) {
    case "semibold":
      weightStyles = "font-semibold";
      break;
    case "bold":
      weightStyles = "font-bold";
      break;
    case "black":
      weightStyles = "font-black"; //default
      break;
  }
  let colorStyles: string = "black";
  switch (theme) {
    case "orange-light":
      colorStyles = "text-orange-50 hover:text-orange-100 active:text-orange-200";
      break;
    case "orange-normal":
      colorStyles = "text-orange-300 hover:text-orange-400 active:text-orange-500";
      break;
    case "orange-dark":
      colorStyles = "text-orange-600 hover:text-orange-700 active:text-orange-800"; //default
      break;
      case "orange-darker":
        colorStyles = "text-orange-090 hover:text-orange-900 active:text-orange-900"; //default
        break;
  }
  return (
    <Component
      className={clsx(variantStyles, className, weight, theme, weightStyles,colorStyles)}
    >
      {children}
    </Component>
  );
};
