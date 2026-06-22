import css from "./Button.module.css";
import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  style?: "primary" | "secondary" | "header" | "auth";
  home?: boolean;
}

const Button = ({ children, style, home }: ButtonProps) => {
  return (
    <button className={clsx(css.btn, style && css[style], home && css.home)}>
      {children}
    </button>
  );
};

export default Button;
