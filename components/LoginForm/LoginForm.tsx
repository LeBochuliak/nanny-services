import Button from "../Button/Button";
import css from "./LoginForm.module.css";
import "@/app/globals.css";

const LoginForm = () => {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Log In</h3>
      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <label htmlFor="email" className="visuallyHidden">
        Email
      </label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        required
        minLength={3}
        className={css.input}
      />
      <label htmlFor="password" className="visuallyHidden">
        Password
      </label>
      <input
        type="text"
        name="password"
        placeholder="Password"
        required
        minLength={3}
        className={`${css.input} ${css.inputS}`}
      />
      <Button style="auth">Log In</Button>
    </form>
  );
};

export default LoginForm;
