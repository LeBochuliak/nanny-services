import css from "./EmptyBox.module.css";
import Link from "next/link";

type EmptyBoxProps = {
  title: string;
  text: string;
  link: string;
  linkText: string;
};

const EmptyBox = ({ title, text, link, linkText }: EmptyBoxProps) => {
  return (
    <div className={css.box}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
      <Link href={link} className={css.btn}>
        {linkText}
      </Link>
    </div>
  );
};

export default EmptyBox;
