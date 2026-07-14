import css from "./Button.module.css";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { Sort } from "@/types/types";

interface ButtonProps {
  children: ReactNode;
  styleName?: "primary" | "secondary" | "header" | "auth" | "load";
  home?: boolean;
  type?: "submit" | "button";
  style?: string;
  onClick?: () => void;
}

const Button = ({ children, styleName, home, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.btn, styleName && css[styleName], home && css.home)}
    >
      {children}
    </button>
  );
};

export default Button;
