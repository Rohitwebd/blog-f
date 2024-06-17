import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
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
  newPassword: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword"), null], "Password must match"),
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

export const EditProfileSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).required("Please enter your name"),
  surname: Yup.string().min(2).max(25).required("Please enter your surname"),
  about: Yup.string().min(2).max(25).required("Please enter about section"),
  dob:Yup.string().min(2).max(25).required("Please enter your birth date"),
  email: Yup.string().email().required("Please enter your email"),
});