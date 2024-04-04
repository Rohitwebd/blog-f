"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "../Schema/page";
import { toast } from 'react-toastify';
import axios from "axios";
import { useRouter } from "next/navigation";
require('dotenv').config()
const base_url = process.env.BASE_URL

const initialValues = {
    email: "",
    password: ""
};


export default function Login() {
    const router = useRouter()
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

                const onSubmit = async () => {
                    const url = `${process.env.BASE_URL}auth/login`;

                    try {
                        const res = await axios.post(url, values)
                        toast.success(res.data.message, { theme: "dark", position: "top-center" })
                        router.push("/profile")
                        localStorage.setItem("authToken", res.data.token);
                        console.log(res.data)
                        action.resetForm();
                    } catch (error) {
                        toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                        console.log(error)
                    }
                }
                onSubmit()


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