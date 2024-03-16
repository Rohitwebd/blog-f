"use client"
import Link from "next/link";
import { useFormik } from "formik";
import { ResetpasswordSchema } from "../Schema/page";

const initialValues = {
    new_password: "",
    confirm_password: ""
};

export default function Resetpassword() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ResetpasswordSchema,
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
                    Reset Password
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
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

                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            autoComplete="off"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (
                        <p className="form-error">{errors.confirm_password}</p>
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