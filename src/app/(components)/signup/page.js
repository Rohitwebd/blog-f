"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { signupSchema } from "../Schema/page";

const initialValues = {
    userName: "",
    Surname: "",
    email: "",
    password: ""
};


export default function Signup() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signupSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                action.resetForm();
            },
        });

    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="images/bird_2.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Sign Up
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="userName"
                            autoComplete="off"
                            name="userName"
                            id="userName"
                            placeholder="Firstname"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.userName && touched.userName ? (
                        <p className="form-error">{errors.userName}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="Surname"
                            autoComplete="off"
                            name="Surname"
                            id="Surname"
                            placeholder="Surname"
                            value={values.Surname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.Surname && touched.Surname ? (
                        <p className="form-error">{errors.Surname}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                    ) : null}

                    <button className="btn mt-3" type="submit">Sign Up</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgot-password"}>Forget password?</Link> or <Link href={"/login"}>Login</Link>
                </div>
            </div>
        </>
    );
}