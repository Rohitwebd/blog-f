"use client"
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Link from "next/link";
import techImg from '../../../../public/images/techimg.jpg'
import fashionImg from '../../../../public/images/fashionimg.jpg'
import foodImg from '../../../../public/images/foodimg.jpg'
import lifestyleImg from '../../../../public/images/lifestyleimg.jpg'
import travelImg from '../../../../public/images/travelimg.jpg'
import defaulImg from '../../../../public/images/travelimg.jpg'

export default function Blog() {
  const [allblogData, setAllblogData] = useState([]);


  const getpostdata = async () => {

    const url = `${process.env.BASE_URL}blog/getblog`;

    try {
      const responseJson = await axios.get(url);
      const data = (responseJson.data.blogs);
      console.log(data)
      setAllblogData(data);
    } catch (err) {
      console.error(err.response.data.massage);
    }

  };

  useEffect(() => {

    getpostdata();
  }, []);

  function getImageByCat(cat){
    const imagestatus = {
        tech: techImg.src,
        fashion: fashionImg.src,
        travel: travelImg.src,
        food: foodImg.src,
        lifestyle: lifestyleImg.src,
        default: defaulImg.src
    }
    return imagestatus[cat] || imagestatus['default']
}
  
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Blog</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/homepage.png" className="img-fluid" />
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

            {allblogData.map((allblog, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-md-4 mb-5">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail"><img src={getImageByCat(allblog?.category)} alt="Image" className="img-fluid zoom" /></a>
                    <div className="post-content-entry">
                      <h3><Link href={`/blog/${allblog._id}`}>{allblog.blogTitle}</Link></h3>

                      <div className="meta">
                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">{moment(allblog.createdDate).format('ll')}</a></span>
                      </div>
                    </div>
                  </div>
                </div>

              );
            })}

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