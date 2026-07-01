"use client";

import css from "./Header.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import AuthNavigation from "@/components/AuthNavigation/AuthNavigation";
import { useUser } from "@/stores/userStore";
import { logout } from "@/services/auth";
import { useUserProfile } from "@/stores/profileStore";

const Header = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { profile } = useUserProfile();

  const handleLogout = async () => {
    await logout();
  };

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
        {!user ? (
          <AuthNavigation />
        ) : (
          <div className={css.userActions}>
            <Link href="/nannies" className={css.navLink}>
              Favorites
            </Link>
            <Link href="/profile" className={css.avatarLink}>
              <svg width="40" height="40" className={css.avatar}>
                <use href="/sprite.svg#icon-image" />
              </svg>
              <p>{profile?.username}</p>
            </Link>
            <Button type="button" style="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
