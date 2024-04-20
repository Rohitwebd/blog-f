"use client"
import Blogdata from '@/app/shared/blogdata';
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import lifestyleImg from '../../../../public/images/lifestyleimg.jpg'

export default function Lifestyle() {

  const [LifestyleData, setLifestyleData] = useState();
  const [getError, setgetError] = useState()

  const getpostdata = async () => {

    const url = `${process.env.BASE_URL}blog/getblog?category=lifestyle`;


    try {
      const responseJson = await axios.get(url);
      const data = (responseJson.data.blogs);
      console.log(data)
      setLifestyleData(data);
    } catch (err) {
      setgetError(err.response.data.massage)
      console.error(err.response.data.massage);
    }

  };

  useEffect(() => {

    getpostdata();
  }, [getError]);
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
      <Blogdata blogdata={LifestyleData} errordata={getError} blogimg={lifestyleImg} />
      {/* <!-- End Blog Section -->	 */}


      {/* <!-- Start Testimonial Slider --> */}
      <Testimonial />
      {/* <!-- End Testimonial Slider --> */}
    </>
  );
}