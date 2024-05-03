"use client"
import { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";

export default function Blogdetails({ params }) {
    const [getblogData, setgetblogData] = useState([]);

    console.log(params.blog_id, "blog details")

    const getpostdata = async () => {
        const url = `${process.env.BASE_URL}blog/blog/${params.blog_id}`;

        try {
            const responseJson = await axios.get(url);
            const data = (responseJson.data.blog);
            console.log(data)
            setgetblogData(data);
        } catch (err) {
            console.error(err);
        }

    };

    useEffect(() => {

        getpostdata();
    }, []);
    return (
        <>
            <div className="text-center">
                <img height={300} width={1200} src="/images/homepage.png" alt="blog-img" />
            </div>

            <div className="blog-section">
                <div className="container">


                    <div className="col-md-12 mb-5">
                        <div className="post-entry">
                            <a href="#" className="post-thumbnail"><img src="../images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="post-content-entry">
                                <h2><a href="#">{getblogData.blogTitle}</a></h2>
                                <div className="meta">
                                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">{moment(getblogData.createdDate).format('ll')}</a></span>
                                </div>
                            </div>

                            <h4 className="py-3">Description</h4>
                            <p>
                                {getblogData.blogDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}