import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';




export default function Header() {
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

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link className="nav-link" href={"/"}>Home</Link>
                            </li>

                            <li><Link className="nav-link" href={"/tech"}>Tech</Link></li>
                            <li><Link className="nav-link" href={"/travel"}>Travel</Link></li>
                            <li><Link className="nav-link" href={"/lifestyle"}>Lifestyle</Link></li>
                            <li><Link className="nav-link" href={"/food"}>Food</Link></li>
                            <li><Link className="nav-link" href={"/fashion"}>Fashion</Link></li>
                            <li><Link className="nav-link" href={"/blog"}>Blog</Link></li>
                            <li><Link className="nav-link" href={"/contact"}>Contact us</Link></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><Link className="nav-link" href={"/login"}><img src="images/user.svg" /></Link></li>
                            <li><button className="nav-link" onClick={toggle}><FontAwesomeIcon icon={faSearch} /></button></li>
                        </ul>
                    </div>
                </div>
            </nav>


            {isOpened && (
                <div className="boxContent">
                    <input className="search-bar" />
                </div>
            )}
        </>
    )
}