"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { createblogSchema } from "../Schema/page";
import blogimage from "../../../../public/images/timelinepic2.jpg"
import Image from "next/image";


const initialValues = {
    title: "",
    Category: "",
    AutherId: "",
    Description: ""

};

export default function Createblog() {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: createblogSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values, action) => {
                console.log(
                    values
                );
                action.resetForm();
            },
        });


    const [blogimg, setBlogimg] = useState(blogimage);
    function blogimgChange(e) {
        console.log(e.target.files);
        setBlogimg(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <div className="container-fluid justify-content-center">
                <div className="row">

                    <div className="col-md-2"></div>

                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <h2>Create Blog</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="align-items-center">
                                    <Image height={200} width={300} src={blogimg} alt="blog-img" />
                                    <input type="file" id="file" onChange={blogimgChange} className="d-none" />
                                    <label htmlFor="file" className="btn btn-outline-dark btn-sm m-2">Blog Image</label>
                                </div>

                                <div className="row mt-2">

                                    <label className="labels mt-2">Title</label>
                                    <input
                                        className="form-control"
                                        type="title"
                                        autoComplete="off"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        value={values.userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.title && touched.title ? (
                                        <p className="form-error">{errors.title}</p>
                                    ) : null}

                                    <label className="labels mt-2">Category</label>
                                    <input
                                        className="form-control"
                                        type="Category"
                                        autoComplete="off"
                                        name="Category"
                                        id="Category"
                                        placeholder="Category"
                                        value={values.userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.Category && touched.Category ? (
                                        <p className="form-error">{errors.Category}</p>
                                    ) : null}

                                    <label className="labels mt-2">AutherId</label>
                                    <input
                                        className="form-control"
                                        type="AutherId"
                                        autoComplete="off"
                                        name="AutherId"
                                        id="AutherId"
                                        placeholder="AutherId"
                                        value={values.userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.AutherId && touched.AutherId ? (
                                        <p className="form-error">{errors.AutherId}</p>
                                    ) : null}

                                    <label className="text-black mt-2">Description</label>
                                    <textarea
                                        className="form-control"
                                        type="Description"
                                        autoComplete="off"
                                        name="Description"
                                        id="Description"
                                        cols="35"
                                        rows="6"
                                        value={values.userName}
                                        onChange={handleChange}
                                        onBlur={handleBlur} ></textarea>
                                    {errors.Description && touched.Description ? (
                                        <p className="form-error">{errors.Description}</p>
                                    ) : null}

                                </div>
                                <div className="mt-5 text-center">
                                    <button className="btn btn-primary profile-button" type="submit">Upload Blog</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}