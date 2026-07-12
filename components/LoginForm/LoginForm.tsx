import Button from "../Button/Button";
import css from "./LoginForm.module.css";
import "@/app/globals.css";
import { useForm } from "react-hook-form";
import type { LoginData } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/services/validation";

interface LoginFormProps {
  handleLogin: (data: LoginData) => Promise<void>;
}

const LoginForm = ({ handleLogin }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginData) => {
    await handleLogin(data);
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={css.title}>Log In</h3>
      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
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

      <Button style="auth">Log In</Button>
    </form>
  );
};

export default LoginForm;
