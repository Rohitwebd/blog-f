"use client"
import Link from "next/link";

export default function Resetpassword() {
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="images/bird_2.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Reset Password
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="new-password" id="new-password" placeholder="New Password" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    <button className="btn mt-3">Submit</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/login"}>Login</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>
        </>
    );
}