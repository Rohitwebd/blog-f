"use client"
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";




export default function Header() {
    const pathname = usePathname()
    const [isOpened, setIsOpened] = useState(false);
    const [isLogin, setisLogin] = useState(false)
    const [isDisable, setIsDisable] = useState(true)
    const [searchValue, setSearchValue] = useState()
    const router = useRouter()


    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    useEffect(() => {
        const getToken = Cookies.get("jwt")
        console.log(getToken)

        if (getToken) {
            setisLogin(true)
        } else {
            setisLogin(false)
        }
    });

    function logout() {
        // localStorage.removeItem("authToken")
        axios.get("http://localhost:7000/api/user/logout", { withCredentials: true })
            .then((response) => {
                toast.success(JSON.stringify(response.data.message), { theme: "dark", position: "top-center" })
                console.log(JSON.stringify(response.data));
                router.push("/")
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const handleChange = (e) => {
        console.log(e.target.value)
        const searchTerm = e.target.value
        setSearchValue(searchTerm)
        if (searchTerm.length >= 2) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }

    }
    const redirectToSearch = () => {
        router.push(`/search?q=${searchValue}`)
    }
    // ============= search api ============



    return (
        <>
            {/* <!-- Start Header/Navigation --> */}
            <nav className="custom-navbar navbar navbar-expand-md" arial-label="Furni navigation bar">

                <div className="container-fluid">
                    <Link className="navbar-brand" href={"/"}>Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
                            <li className={pathname === "/profile" ? "active" : ""}><Link className="nav-link" href={"/profile"}>Profile</Link></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li> {!isLogin ?
                                <Link className="nav-link" href={"/login"}><img src="images/user.svg" /></Link>
                                :
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        My Profile
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" href={"/my-blogs"}> My Blog</Link></li>
                                        <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                    </ul>
                                </div>}
                            </li>
                            <li><button className="nav-link text-light" onClick={toggle}><FontAwesomeIcon icon={faSearch} /></button></li>
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
                                    <input
                                        name="search"
                                        className="form-control me-2"
                                        placeholder="Search"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="btn btn-secondary me-2" disabled={isDisable} onClick={redirectToSearch}>Search</button>
                                <a className="text-danger fa-2x" onClick={toggle}><FontAwesomeIcon icon={faXmark} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}