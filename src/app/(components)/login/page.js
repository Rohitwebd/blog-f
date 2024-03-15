"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "../validaSchema/page";

const initialValues = {
    username: "",
    password: ""
};


export default function Login() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
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
                    Login
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <input
                            type="username"
                            autoComplete="off"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        
                    </div>
                    {errors.username && touched.username ? (
                        <p className="form-error">{errors.username}</p>
                    ) : null}
                   

                    <div className="form-field d-flex align-items-center">
                        <input
                            type="password"
                            autoComplete="off"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        
                    </div>
                    {errors.password && touched.password ? (
                            <p className="form-error">{errors.password}</p>
                        ) : null}


                    <button className="btn mt-3" type="submit">Login</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/forgot-password"}>Forget password?</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>
        </>
    );
}