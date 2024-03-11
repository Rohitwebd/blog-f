"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react';




export default function Header() {
    const pathname = usePathname()
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    return (
        <>
            {/* <!-- Start Header/Navigation --> */}
            <nav className="custom-navbar navbar navbar-expand-md" arial-label="Furni navigation bar">

                <div className="container">
                    <Link className="navbar-brand" href={"/"}>Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className={pathname === "/" ? "active" : ""}>
                                <Link className="nav-link" href={"/"}>Home</Link>
                            </li>

                            <li className={pathname === "/tech" ? "active" : ""}><Link className="nav-link" href={"/tech"}>Tech</Link></li>
                            <li className={pathname === "/travel" ? "active" : ""}><Link className="nav-link" href={"/travel"}>Travel</Link></li>
                            <li className={pathname === "/lifestyle" ? "active" : ""}><Link className="nav-link" href={"/lifestyle"}>Lifestyle</Link></li>
                            <li className={pathname === "/food" ? "active" : ""}><Link className="nav-link" href={"/food"}>Food</Link></li>
                            <li className={pathname === "/fashion" ? "active" : ""}><Link className="nav-link" href={"/fashion"}>Fashion</Link></li>
                            <li className={pathname === "/blog" ? "active" : ""}><Link className="nav-link" href={"/blog"}>Blog</Link></li>
                            <li className={pathname === "/contact" ? "active" : ""}><Link className="nav-link" href={"/contact"}>Contact us</Link></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><Link className="nav-link" href={"/login"}><img src="images/user.svg" /></Link></li>
                            <li><button className="nav-link" onClick={toggle}><FontAwesomeIcon icon={faSearch} /></button></li>
                        </ul>
                    </div>
                </div>
            </nav>


            {isOpened && (
                <div className="container-fluid bg-colour">
                    <div className="container">
                        <div className="row py-2">
                            <div className="col-md-9">
                                <div className="boxContent">
                                    <input className="search-bar" />
                                </div>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}