import moment from 'moment';
import { useEffect, useState } from 'react';
import Loader from '@/loader';
import Link from 'next/link';
import techImg from '../../../public/images/techimg.jpg'
import fashionImg from '../../../public/images/fashionimg.jpg'
import foodImg from '../../../public/images/foodimg.jpg'
import lifestyleImg from '../../../public/images/lifestyleimg.jpg'
import travelImg from '../../../public/images/travelimg.jpg'
import defaulImg from '../../../public/images/travelimg.jpg'

export default function Blogdata(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [getData, setGetdata] = useState()
    const [getError, setErrormsg] = useState()

    useEffect(() => {
        setGetdata(props.blogdata)
        // console.log(props.errordata)
        setErrormsg(props.errordata)

        if (getData || getError) {
            setIsLoading(false)
        }
    });

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
                                            <a href="#" className="post-thumbnail"><img src={getImageByCat(data?.category)} alt="Image" className="img-fluid" /></a>
                                            <div className="post-content-entry">
                                                <h3><Link href={`/blog/${data._id}`}>{data.blogTitle}</Link></h3>
                                                <div className="meta">
                                                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">{moment(data.createdDate).format('ll')}</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }) :
                                <div className='alert alert-danger' role='alert'><h4>{getError}</h4></div>
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}