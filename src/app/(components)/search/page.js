"use client"
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import Blogdata from '@/app/shared/blogdata';
import { useEffect, useState } from 'react';


export default function Search() {


  const [techData, setTechData] = useState();
  const [getError, setgetError] = useState()

  const getpostdata = async () => {

    const url = `${process.env.BASE_URL}blog/search?q=`;


    try {
      const response = await axios.get(url);
      const data = (response.data.blogs);
      setTechData(data);
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

      {/* <!-- Start Blog Section --> */}

      <Blogdata blogdata={techData} errordata={getError} />

      {/* <!-- End Blog Section -->	 */}

      {/* <!-- Start Testimonial Slider --> */}

      <Testimonial />

      {/* <!-- End Testimonial Slider --> */}
    </>
  );
}