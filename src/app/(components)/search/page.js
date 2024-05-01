"use client"
import Testimonial from '@/app/shared/testimonal';
import axios from 'axios';
import Blogdata from '@/app/shared/blogdata';
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import techImg from '../../../../public/images/techimg.jpg'


export default function Search() {


  const [searchData, setSearchData] = useState();
  const [getError, setgetError] = useState()

  const searchParams = useSearchParams();
  const myParam = searchParams.get("q");
  console.log(myParam, "search value")

  const getpostdata = async () => {

    const url = `${process.env.BASE_URL}blog/search?q=${myParam}`;

    try {
      const response = await axios.get(url);
      const data = (response.data.blogs);
      console.log(response)
      setSearchData(data);
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

      <Blogdata blogdata={searchData} errordata={getError} blogimg={techImg} />

      {/* <!-- End Blog Section -->	 */}

      {/* <!-- Start Testimonial Slider --> */}

      <Testimonial />

      {/* <!-- End Testimonial Slider --> */}
    </>
  );
}