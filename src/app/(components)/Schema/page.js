import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const signupSchema = Yup.object({
  userName: Yup.string().min(2).max(25).required("Please enter your name"),
  Surname: Yup.string().min(2).max(25).required("Please enter your surname"),
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

export const ChangepasswordSchema = Yup.object({
  old_password: Yup.string().required("Please enter your password"),
  new_password: Yup.string().min(6).required("Please enter your new password"),
});

export const createblogSchema = Yup.object({
  blogTitle: Yup.string().required("Please enter your title"),
  category: Yup.string().required("Please select your blog Category"),
  blogDescription: Yup.string().required("Please enter your Blog Description"),
});

export const ContactSchema = Yup.object({
  old_password: Yup.string().required("Please enter your "),
  new_password: Yup.string().min(6).required("Please enter your"),
});

export const NewsletterSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});