"use client"
import Testimonial from '@/app/shared/testimonal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function Fashion() {
  const [fashionData, setFashionData] = useState();
  const [errormsg, setErrormsg] = useState()

  const getpostdata = async () => {
    
    const url = `${process.env.BASE_URL}blog/getblog?category=fashion`;


    try {
      const responseJson = await axios.get(url);
      const data = (responseJson.data.blogs);
      console.log(data)
      setFashionData(data);
    } catch (err) {
      setErrormsg(err.response.data.massage)
      console.error(err.response.data.massage);
    }

  };

  useEffect(() => {

    getpostdata();
  }, [errormsg]);
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Fashion</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/fashion-blog-examples-removebg-preview.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}


      {/* <!-- Start Blog Section --> */}
      <div className="blog-section">
        <div className="container">

          <div className="row">
            {fashionData ? fashionData.map((fashion, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-md-4 mb-5">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail"><img src="images/post-01-free-img.jpg" alt="Image" className="img-fluid" /></a>
                    <div className="post-content-entry">
                      <h3><a href="#">{fashion.blogTitle}</a></h3>
                      <div className="meta">
                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">{moment(fashion.createdDate).format('ll')}</a></span>
                      </div>
                    </div>
                  </div>
                </div>

              );

            }) :
              <div className='alert alert-danger' role='alert'><h4>{errormsg}</h4></div>}

          </div>
        </div>
      </div>
      {/* <!-- End Blog Section -->	 */}


      {/* <!-- Start Testimonial Slider --> */}
      <Testimonial />
      {/* <!-- End Testimonial Slider --> */}
    </>
  );
}