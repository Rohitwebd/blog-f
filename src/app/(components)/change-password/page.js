"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { ChangepasswordSchema } from "../Schema/page";
import { toast } from 'react-toastify';
import axios from "axios";

const initialValues = {
    old_password: "",
    new_password: ""
};

export default function Changepassword() {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ChangepasswordSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                console.log(
                    values
                );

                const onSubmit = async () => {
                    const url = `${process.env.BASE_URL}user/change-password`;

                    try {
                        const res = await axios.post(url, values)
                        toast.success(res.data.message, { theme: "dark", position: "top-center" })
                        console.log(res.data.message)
                        action.resetForm();
                    } catch (error) {
                        toast.error(error.response.data.massage, { theme: "dark", position: "top-center" })
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
                    change Password
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <input
                            type="password"
                            autoComplete="off"
                            name="old_password"
                            id="old_password"
                            placeholder="Old Password"
                            value={values.old_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.old_password && touched.old_password ? (
                        <p className="form-error">{errors.old_password}</p>
                    ) : null}

                    <div className="form-field d-flex align-items-center">
                        <input
                            type="password"
                            autoComplete="off"
                            name="new_password"
                            id="new_password"
                            placeholder="New Password"
                            value={values.new_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.new_password && touched.new_password ? (
                        <p className="form-error">{errors.new_password}</p>
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