import Link from "next/link";

export default function Signup() {
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img src="images/bird_2.jpg" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Furni.
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Firstname" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Lastname" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="email" name="userName" id="userName" placeholder="E-mail" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password" />
                    </div>
                    <button className="btn mt-3">Sign Up</button>
                </form>
                <div className="text-center fs-6">
                    <Link href={"/"}>Forget password?</Link> or <Link href={"/login"}>Login</Link>
                </div>
            </div>
        </>
    );
}