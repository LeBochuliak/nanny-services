import Button from "../Button/Button";
import css from "./RegistrationForm.module.css";
import "@/app/globals.css";
import type { RegistrationData } from "@/types/types";
import { useForm } from "react-hook-form";

interface RegistrationFormProps {
  handleRegistration: (data: RegistrationData) => Promise<void>;
}

const RegistrationForm = ({ handleRegistration }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>();

  const onSubmit = async (data: RegistrationData) => {
    await handleRegistration(data);
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.title}>Registration</h3>
      <p className={css.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <label htmlFor="username" className="visuallyHidden">
        Name
      </label>
      <input
        id="username"
        type="text"
        placeholder="Name"
        required
        minLength={3}
        className={css.input}
        {...register("username", {
          required: "Username is required",
        })}
      />
      {errors.username && <p>Name is required.</p>}
      <label htmlFor="email" className="visuallyHidden">
        Email
      </label>
      <input
        type="email"
        id="email"
        autoComplete="email"
        placeholder="Email"
        required
        minLength={3}
        className={css.input}
        {...register("email", {
          required: "Email is required",
        })}
      />
      <label htmlFor="password" className="visuallyHidden">
        Password
      </label>
      {errors.password && <p>Minimum 6 characters</p>}
      <input
        type="text"
        id="password"
        placeholder="Password"
        required
        minLength={3}
        className={`${css.input} ${css.inputS}`}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters",
          },
        })}
      />

      <Button style="auth" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default RegistrationForm;
