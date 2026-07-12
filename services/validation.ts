import * as Yup from "yup";

export const RegistrationFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
        .required("Email is required"),
  password: Yup
    .string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password is required"),
});

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
        .required("Email is required"),
  password: Yup
    .string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password is required"),
});

