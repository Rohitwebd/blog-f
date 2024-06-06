"use client"
import { useState, useEffect } from "react";
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ResetpasswordSchema } from "../Schema/page";
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation'


export default function ResetPassword() {
    const [tokenStatus, setTokenStatus] = useState('')
    const [userId, setUserId] = useState()
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const reseturl = `http://localhost:7000/api/user/reset-password?token=${token}`
    useEffect(() => {
        console.log(token, 'token')
        const postData = async () => {
            try {
                const response = await axios.get(reseturl)
                    .then(function (response) {
                        console.log(response.data.status);
                        setTokenStatus(true)
                        setUserId(response.data.userId)


                        // toast.success(response.data.message, { theme: "dark", position: "top-center" })
                    })
                    .catch(function (error) {
                        setTokenStatus(false)
                        console.error(error.response.data.status, 'error');
                        // toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                    });
                // console.log(response)
            } catch (error) {
                console.log(error)
            }
        };
        postData()




    });
    const router = useRouter()
    const url = "http://localhost:7000/api/user/reset-password"
    const initValues = {
        newPassword: "",
        confirmPassword: "",
    }
    // const resetSchema = Yup.object({
    //     newpassword: Yup.string().min(6).required("Please enter Password"),
    //     confirmpassword: Yup.string().min(6).required("Enter confirm Password")
    // })
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: initValues,
            validationSchema: ResetpasswordSchema,
            onSubmit: (values, action) => {
                values.userId = userId
                console.log(values);
                const options = {
                    method: 'POST',
                    url: url,
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: values
                };
                const postData = async () => {
                    try {
                        const response = await axios
                            .request(options)
                            .then(function (response) {
                                console.log(response.data);
                                toast.success(response.data.message, { theme: "dark", position: "top-center" })
                                router.push("/login")
                                action.resetForm();
                            })
                            .catch(function (error) {
                                console.error(error);
                                toast.error(error.response.data.message, { theme: "dark", position: "top-center" })
                            });
                        console.log(response)
                    } catch (error) {
                        console.log(errors)
                    }
                };
                postData()
            }
        });
    return (
        <>


            {tokenStatus ? (
                <div className="wrapper">
                    <>
                        <div className="logo">
                            <img src="images/bird_2.jpg" alt="" />
                        </div>
                        <div className="text-center mt-4 name">
                            Reset Password
                        </div>
                        <form onSubmit={handleSubmit} className="p-3 mt-3">
                            <div className="form-field d-flex align-items-center">
                                <label htmlFor="newPassword" className="input-label"></label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="newPassword"
                                    id="newPassword"
                                    placeholder="Enter new password"
                                    value={values.newPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.newPassword && touched.newPassword ? (
                                <p className="form-error">{errors.newPassword}</p>
                            ) : null}
                            <div className="form-field d-flex align-items-center">
                                <label htmlFor="confirmPassword" className="input-label"></label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Enter confirm password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <p className="form-error">{errors.confirmPassword}</p>
                            ) : null}
                            <button type="submit" className="btn mt-3">Submit</button>
                        </form>


                        <div className="text-center fs-6">
                            <Link href="/forget-password">Forget password?</Link> or <Link href="/sign-up">Sign up</Link>
                        </div>
                    </>


                </div>
            ) : <div>No token found</div>
            }
        </>
    )
}
