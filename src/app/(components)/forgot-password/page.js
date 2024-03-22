"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { ForgotpasswordSchema } from "../Schema/page";
import { toast } from 'react-toastify';
import axios from "axios";
import { useRouter } from "next/navigation";

const initialValues = {
    email: ""
};

export default function Forgotpassword() {

    const router = useRouter()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ForgotpasswordSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                console.log(
                    values
                );

                const onSubmit = async () => {
            
                    try {
                      const res = await axios.post('http://localhost:7000/api/user/forgot-password',values)
                      toast.success(res.data.message,{theme:"dark",position:"top-center"})
                      router.push("/reset-password")
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
                    Forgot-Password
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

                    <button className="btn mt-3" type="submit">Submit</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/login"}>Login</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>
        </>
    );
}