import css from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  children: string;
  style?: "primary" | "secondary" | "header";
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
