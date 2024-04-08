import moment from 'moment';
import { useEffect, useState } from 'react';
import Loader from '@/loader';

export default function Blogdata(props) {
    console.log(props)
    const [isLoading, setIsLoading] = useState(true);
    const [getData, setGetdata] = useState()
    const [errormsg, setErrormsg] = useState()

    useEffect(() => {
        setGetdata(props.blogdata)
if(getData){
    setIsLoading(false)
}

    });


    return (
        <>
            {isLoading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div className="blog-section">
                    <div className="container">

                        <div className="row">
                            {getData ? getData.map((data, i) => {
                                return (
                                    <div key={i} className="col-12 col-sm-6 col-md-4 mb-5">
                                        <div className="post-entry">
                                            <a href="#" className="post-thumbnail"><img src="images/post-01-free-img.jpg" alt="Image" className="img-fluid" /></a>
                                            <div className="post-content-entry">
                                                <h3><a href="#">{data.blogTitle}</a></h3>
                                                <div className="meta">
                                                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">{moment(data.createdDate).format('ll')}</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }) :
                                <div className='alert alert-danger' role='alert'><h4>{errormsg}</h4></div>
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}