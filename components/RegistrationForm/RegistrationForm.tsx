import Button from "../Button/Button";
import css from "./RegistrationForm.module.css";
import "@/app/globals.css";
import type { RegistrationData } from "@/types/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationFormSchema } from "@/services/validation";

interface RegistrationFormProps {
  handleRegistration: (data: RegistrationData) => Promise<void>;
}

const RegistrationForm = ({ handleRegistration }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: yupResolver(RegistrationFormSchema),
  });

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
      <p>{errors.username?.message}</p>
      <input
        id="username"
        type="text"
        placeholder="Name"
        required
        minLength={3}
        className={css.input}
        {...register("username")}
      />

      <label htmlFor="email" className="visuallyHidden">
        Email
      </label>
      <p>{errors.email?.message}</p>
      <input
        type="email"
        id="email"
        autoComplete="email"
        placeholder="Email"
        required
        minLength={3}
        className={css.input}
        {...register("email")}
      />

      <label htmlFor="password" className="visuallyHidden">
        Password
      </label>
      <p>{errors.password?.message}</p>
      <input
        type="text"
        id="password"
        placeholder="Password"
        required
        minLength={3}
        className={`${css.input} ${css.inputS}`}
        {...register("password")}
      />

      <Button style="auth" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default RegistrationForm;
