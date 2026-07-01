"use client";

import css from "./AuthNavigation.module.css";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import LoginForm from "@/components/LoginForm/LoginForm";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { registration, login } from "@/services/auth";
import type { RegistrationData, LoginData } from "@/types/types";

const AuthNavigation = () => {
  const pathname = usePathname();
  const [modalType, setModalType] = useState<"login" | "registration" | null>(
    null,
  );

  const handleRegistration = async (data: RegistrationData) => {
    await registration(data);
  };

  const handleLogin = async (data: LoginData) => {
    await login(data);
    setModalType(null);
  };

  return (
    <div className={css.authActions}>
      <Button
        type="button"
        style="primary"
        onClick={() => setModalType("login")}
      >
        Log In
      </Button>
      {pathname === "/" ? (
        <Button
          type="button"
          style="secondary"
          onClick={() => setModalType("registration")}
        >
          Registration
        </Button>
      ) : (
        <Button
          type="button"
          style="header"
          onClick={() => setModalType("registration")}
        >
          Registration
        </Button>
      )}
      {modalType && (
        <Modal onClose={() => setModalType(null)}>
          {modalType === "login" ? (
            <LoginForm handleLogin={handleLogin} />
          ) : (
            <RegistrationForm handleRegistration={handleRegistration} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default AuthNavigation;
