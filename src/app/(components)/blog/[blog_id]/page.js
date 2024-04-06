"use client"
import { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";

export default function Blogdetails(params) {
    const [getblogData, setgetblogData] = useState([]);

    const getpostdata = async () => {
        const url = `${process.env.BASE_URL}blog/${params._id}`;

        try {
            const responseJson = await axios.get(url);
            const data = (responseJson.data.blogs);
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
            <div>
                <img height={300} width={1400} src="/images/blogdetails-img.jpg" alt="blog-img" />
            </div>

            <div className="blog-section">
                <div className="container">
                    {getblogData.map((getblog, i) => {
                        return (
                            <div key={i} className="col-md-12 mb-5">
                                <div className="post-entry">
                                    <a href="#" className="post-thumbnail"><img src="../images/post-2.jpg" alt="Image" className="img-fluid" /></a>
                                    <div className="post-content-entry">
                                        <h2><a href="#">{getblog.blogTitle}</a></h2>
                                        <div className="meta">
                                            <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">{moment(getblog.createdDate).format('ll')}</a></span>
                                        </div>
                                    </div>

                                    <h4 className="py-3">Description</h4>

                                    <p>
                                        {getblog.blogDescription}
                                    </p>
                                </div>
                            </div>

                        );
                    })}

                </div>
            </div>
        </>
    );
}