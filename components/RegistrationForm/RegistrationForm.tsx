import Button from "../Button/Button";
import css from "./RegistrationForm.module.css";
import "@/app/globals.css";

const RegistrationForm = () => {
  return (
    <form className={css.form}>
      <h3 className={css.title}>Registration</h3>
      <p className={css.description}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <label htmlFor="name" className={css.visuallyHidden}>
        Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        minLength={3}
        className={css.input}
      />
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
      <Button style="auth">Sign Up</Button>
    </form>
  );
};

export default RegistrationForm;
