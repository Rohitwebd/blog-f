import Testimonial from '@/app/shared/testimonal';

export default function Tech() {
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
                <img src="images/3252880.jpg" className="img-fluid" />
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

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-01-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">What are blockchain transaction fees?</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-02-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Best Places to Download HTML Templates</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-03-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">5 Best Samsung Galaxy Buds Pro Settings</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-04-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">What is BETH and how to use it?</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-05-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">How to lorem ipsum dolor sit amet, consectetur</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-06-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">The most awesome online lorem ipsum</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-07-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">5 NFT projects you should learn about</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-08-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">15 Common-sense tips for Tech Startups</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/post-09-free-img.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">How to earn lorem ipsum dolor sit amet</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

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