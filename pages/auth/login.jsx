import Image from "next/image";
import logo from "../../public/assets/image/logo.svg";
import Link from "next/link";
import googleicon from "../../public/assets/image/Google.svg";

export default function Login() {
    return (
        <div className="section-auth">
            <div>
                <Image src={logo} alt="Panama Beer Club" />
            </div>
            <div className="auth-container">
                <h2>Login To Your Account</h2>
                <p>Start Tasting...</p>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </label>
                </div>
                <div>
                    <Link href={"/auth/login"}>
                        <p>Forgot Your Password?</p>
                    </Link>
                </div>
                <button className="btn-auth">Login</button>

                <p>Or</p>

                <button className="btn-google">
                    <Image src={googleicon} alt="Google" />
                    <p>Continue with Google</p>
                </button>

                <div>
                    <p>
                        Don&apos;t have an account?
                        <br />
                        <Link href={"/auth/register"}>
                            <span>Sign Up</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
