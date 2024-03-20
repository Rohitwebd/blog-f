import Testimonial from '@/app/shared/testimonal';

export default function Food() {
    return (
      <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Food Blogs</h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" />
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
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Bern's Steak House</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Eewak Korean Restaurant</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">The Ramban Vegan House</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-4.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Maniest Bake & Cake</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-5.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Crush Los Angeles</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-best-restaurant-6.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">The Mike Winery</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-latest-review-img-1.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Grilled Flank Steak with Chimichurri</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-latest-review-img-2.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Mushroom Penne with Walnut Pesto</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-5">
              <div className="post-entry">
                <a href="#" className="post-thumbnail"><img src="images/food-blogger-latest-review-img-3.jpg" alt="Image" className="img-fluid" /></a>
                <div className="post-content-entry">
                  <h3><a href="#">Garlic Butter White Wine Shrimp Linguine</a></h3>
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
      <Testimonial />
      {/* <!-- End Testimonial Slider --> */}
     </>
    );
  }