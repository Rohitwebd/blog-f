import Link from "next/link";

export default function Profile() {
    return (
        <>
            <div className="profile-bg">
                <div className="row py-5 px-4">
                    <div className="col-md-5 mx-auto">
                        {/* <!-- Profile widget --> */}
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">
                                <div className="media align-items-end profile-head">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="profile mr-3">
                                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="media-body mb-5 text-white">
                                                <h4 className="mt-0 mb-2"> Rohit Kewat</h4>
                                                <p className="small mb-4 py-0"><i className="fas fa-map-marker-alt mr-2"></i> India </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light d-flix py-5 px-5">
                                <Link href={"/edit-profile"} className="btn btn-outline-dark btn-sm btn-block"> Edit profile </Link>
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <small className="text-muted">
                                            <Link href={"#"} className="btn btn-outline-dark btn-sm btn-block"> Create Blog </Link>
                                        </small>
                                    </li>
                                    <li className="list-inline-item">
                                        <small className="text-muted">
                                            <Link href={"/change-password"} className="btn btn-outline-dark btn-sm btn-block"> Change Password </Link>
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-0">About</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">Web Developer</p>
                                    <p className="font-italic mb-0">Lives in India</p>
                                    <p className="font-italic mb-0">Photographer</p>
                                </div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Recent photos</h5>
                                    <Link href={"#"} className="btn btn-link text-muted">Show all</Link>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mb-2 pr-lg-1">
                                        <img src="images/night-1927265_1280.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                    </div>
                                    <div className="col-lg-6 mb-2 pl-lg-1">
                                        <img src="images/men-1777352_1280.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                    </div>
                                    <div className="col-lg-6 pr-lg-1 mb-2">
                                        <img src="images/lens-3046269_1280.jpg" alt="" className="img-fluid rounded shadow-sm" />
                                    </div>
                                    <div className="col-lg-6 pl-lg-1">
                                        <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}