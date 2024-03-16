import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const signupSchema = Yup.object({
  userName: Yup.string().min(2).max(25).required("Please enter your name"),
  Surname: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const ForgotpasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const ResetpasswordSchema = Yup.object({
  new_password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});