import Link from "next/link";

export default function Forgotpassword() {
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="images/bird_2.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Forgot-Password
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="email" name="userName" id="userName" placeholder="Email" />
                    </div>
                    <Link href={"/reset-password"}><button className="btn mt-3">Submit</button></Link>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/login"}>Login</Link> or <Link href={"/signup"}>Sign up</Link>
                </div>
            </div>
        </>
    );
}