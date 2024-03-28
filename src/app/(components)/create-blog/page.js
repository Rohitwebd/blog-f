"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { createblogSchema } from "../Schema/page";
import { toast } from 'react-toastify';
import blogimage from "../../../../public/images/timelinepic2.jpg"
import Image from "next/image";



const initialValues = {
    blogTitle: "",
    category: "",
    blogDescription: ""

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

                const onSubmit = async () => {

                    try {
                        const res = await axios.post('http://localhost:7000/api/blog/create', values)
                        toast.success(res.data.message, { theme: "dark", position: "top-center" })
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
                                        type="text"
                                        autoComplete="off"
                                        name="blogTitle"
                                        id="title"
                                        placeholder="Title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.blogTitle && touched.blogTitle ? (
                                        <p className="form-error">{errors.blogTitle}</p>
                                    ) : null}

                                    <label className="labels mt-2">Category</label>
                                    {/* <input
                                        className="form-control"
                                        type="Category"
                                        autoComplete="off"
                                        name="Category"
                                        id="Category"
                                        placeholder="Category"
                                        value={values.Category}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /> */}
                                    <select
                                        className="form-select"
                                        id="category"
                                        aria-label="Default select example"
                                        value={values.category}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option selected >Open this select menu</option>
                                        <option value="tech">Tech</option>
                                        <option value="travel">Travel</option>
                                        <option value="lifestyle">Lifestyle</option>
                                        <option value="food">Food</option>
                                        <option value="fashion">Fashion</option>
                                    </select>

                                    {errors.category && touched.category ? (
                                        <p className="form-error">{errors.category}</p>
                                    ) : null}

                                    <label className="text-black mt-2">Description</label>
                                    <textarea
                                        className="form-control"
                                        type="Description"
                                        autoComplete="off"
                                        name="blogDescription"
                                        id="Description"
                                        cols="35"
                                        rows="6"
                                        value={values.blogDescription}
                                        onChange={handleChange}
                                        onBlur={handleBlur} ></textarea>
                                    {errors.blogDescription && touched.blogDescription ? (
                                        <p className="form-error">{errors.blogDescription}</p>
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