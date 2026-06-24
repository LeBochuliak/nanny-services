import css from "./Button.module.css";
import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style?: "primary" | "secondary" | "header" | "auth";
  home?: boolean;
  type?: "submit" | "button";
  onClick: () => void;
}

const Button = ({ children, style, home, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.btn, style && css[style], home && css.home)}
    >
      {children}
    </button>
  );
};

export default Button;
