import Button from "../Button/Button";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <h3 className={css.title}>Log In</h3>
      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <input
        type="text"
        name="email"
        placeholder="Email"
        required
        minLength={3}
        className={css.input}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        required
        minLength={3}
        className={`${css.input} ${css.inputS}`}
      />
      <Button style="auth">Log In</Button>
    </>
  );
};

export default LoginForm;
