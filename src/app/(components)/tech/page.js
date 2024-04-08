"use client"
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import Blogdata from '@/app/shared/blogdata';
import { useEffect, useState } from 'react';


export default function Tech() {


  const [techData, setTechData] = useState();
  const [errormsg, setErrormsg] = useState()
  const [isLoading, setIsLoading] = useState(true);

  const getpostdata = async () => {

    const url = `${process.env.BASE_URL}blog/getblog?category=tech`;


    try {
      const response = await axios.get(url);
      const data = (response.data.blogs);
      setTechData(data);
      setIsLoading(false);
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
                <h1>Tech Blog</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap ">
                <img src="images/illustration-full.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}


      {/* <!-- Start Blog Section --> */}

      <Blogdata blogdata={techData} />

      {/* <!-- End Blog Section -->	 */}



      {/* <!-- Start Testimonial Slider --> */}
      <Testimonial />
      {/* <!-- End Testimonial Slider --> */}
    </>
  );
}