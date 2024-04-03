"use client"
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Lifestyle() {

  const [LifestyleData, setLifestyleData] = useState();
  const [errormsg ,setErrormsg] = useState()

  const getpostdata = async () => {

    const url = 'http://localhost:7000/api/blog/getblog?category=lifestyle';

   
    try {
      const responseJson = await axios.get(url);
      const data = (responseJson.data.blogs);
      console.log(data)
      setLifestyleData(data);
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
                <h1>Lifestyle</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/patreon_stats_concept-removebg-preview.png" className="img-fluid" />
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

          {LifestyleData?LifestyleData.map((lifestyle,i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-md-4 mb-5">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail"><img src="images/post-01-free-img.jpg" alt="Image" className="img-fluid" /></a>
                    <div className="post-content-entry">
                      <h3><a href="#">{lifestyle.blogTitle}</a></h3>  
                      <div className="meta">
                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">{lifestyle.createdDate}</a></span>
                      </div>
                    </div>
                  </div>
                </div>

              );

            }):
            <div className='alert alert-danger' role='alert'><h4>{errormsg}</h4></div>}


          </div>
        </div>
      </div>
      {/* <!-- End Blog Section -->	 */}


      {/* <!-- Start Testimonial Slider --> */}
      <Testimonial/>
      {/* <!-- End Testimonial Slider --> */}
     </>
    );
  }