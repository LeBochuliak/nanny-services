"use client";

import css from "./Header.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={clsx(css.header, pathname === "/" && css.home)}>
      <Link href="/" className={css.logo}>
        Nanny.Services
      </Link>
      <nav className={css.nav}>
        <Link href="/" className={css.navLink}>
          Home
        </Link>
        <Link href="/nannies" className={css.navLink}>
          Nannies
        </Link>
        <div className={css.authActions}>
          <Button style="primary">Log In</Button>
          {pathname === "/" ? (
            <Button style="secondary">Registration</Button>
          ) : (
            <Button style="header">Registration</Button>
          )}
        </div>
        <div className={css.userActions}>
          <Link href="/nannies" className={css.navLink}>
            Favorites
          </Link>
          <Link href="/profile" className={css.avatarLink}>
            <svg width="40" height="40" className={css.avatar}>
              <use href="/sprite.svg#icon-image" />
            </svg>
            <p>Ilona</p>
          </Link>
          <Button style="primary">Log out</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
