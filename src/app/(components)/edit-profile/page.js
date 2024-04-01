"use client"
import React, { useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import timelineimage from "../../../../public/images/timelinepic2.jpg"
import profilepic from "../../../../public/images/defultprofile.png"
import Image from "next/image";

export default function Editprofile() {

    const [timelinepic, setTimeline] = useState(timelineimage);
    function timelineChange(e) {
        console.log(e.target.files);
        setTimeline(URL.createObjectURL(e.target.files[0]));
    }

    const [profile, setProfile] = useState(profilepic);
    function profileChange(f) {
        console.log(f.target.files, 'profile pic');
        setProfile(URL.createObjectURL(f.target.files[0]));
    }

    return (
        <>
            <div className="container-fluid profile-bg">
                <div className="row ">
                    <div className="col-md-12 p-0 text-center">
                        <Image height={200} width={1400} src={timelinepic} alt="timeline" />
                        <label htmlFor="file" className="btn btn-outline-dark btn-sm">Change cover</label>
                        <input type="file" id="file" onChange={timelineChange} className="d-none" />
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <Image className="rounded-circle mt-5" width={200} height={200} src={profile} alt="profile" />
                            <label htmlFor="profile"> <FontAwesomeIcon icon={faPlusCircle} /></label>
                            <input type="file" id="profile" onChange={profileChange} className="d-none" />


                            <span className="font-weight-bold p-2">Rohit Kewat</span>
                            <span className="text-black-50">rohitwebd@gamil.com</span>

                        </div>
                    </div>

                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Surname</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="surname"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 p-2">
                                    <label className="labels">About</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="about you"
                                    />
                                </div>
                                <div className="col-md-12 p-2">
                                    <label className="labels">Dob</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="date of birth"
                                    />
                                </div>
                                <div className="col-md-12 p-2">
                                    <label className="labels">Profile Picture</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="upload profile pic"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
