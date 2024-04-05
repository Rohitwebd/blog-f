"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    const pathname = usePathname()
    console.log(pathname)
    if (pathname !== "/login" && pathname !== "/signup" 
    && pathname !== "/forgot-password" && pathname !== "/reset-password" && pathname !== "/profile") {

        return (
            <>
                {/* <!-- Start Footer Section --> */}
                <footer className="footer-section">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="subscription-form">
                                    <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                                    <form className="row g-3">
                                        <div className="col-auto">
                                            <input type="text" autoComplete="off" id="name" className="form-control" placeholder="Enter your Name" />
                                        </div>
                                        <div className="col-auto">
                                            <input type="email" autoComplete="off" id="email" className="form-control" placeholder="Enter your Email" />
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-primary">
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="row g-5 mb-5">
                            <div className="col-lg-4">
                                <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
                                <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

                                <ul className="list-unstyled custom-social">
                                    <li><Link href={"#"}><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                    <li><Link href={"#"}><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                    <li><Link href={"#"}><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                    <li><Link href={"#"}><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-8">
                                <div className="row links-wrap">
                                    <div className="col-6 col-sm-6 col-md-3">
                                        <ul className="list-unstyled">
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact us</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Support</a></li>
                                            <li><a href="#">Knowledge base</a></li>
                                            <li><a href="#">Live chat</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Jobs</a></li>
                                            <li><a href="#">Our team</a></li>
                                            <li><a href="#">Leadership</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-3">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Nordic Chair</a></li>
                                            <li><a href="#">Kruzo Aero</a></li>
                                            <li><a href="#">Ergonomic Chair</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="border-top copyright">
                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <p className="mb-2 text-center text-lg-start">Copyright &copy; . All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>
                                    </p>
                                </div>

                                <div className="col-lg-6 text-center text-lg-end">
                                    <ul className="list-unstyled d-inline-flex ms-auto">
                                        <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </footer>
                {/* <!-- End Footer Section -->	 */}
            </>

        )
    }
    else {
        return (
            <>
                {/* <!-- Start Footer Section --> */}
                <footer className="footer-section">
                    <div className="container relative">
                        <div className="border-top copyright">
                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <p className="mb-2 text-center text-lg-start">Copyright &copy; . All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>
                                    </p>
                                </div>

                                <div className="col-lg-6 text-center text-lg-end">
                                    <ul className="list-unstyled d-inline-flex ms-auto">
                                        <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </footer>
                {/* <!-- End Footer Section -->	 */}
            </>
        )
    }
}
