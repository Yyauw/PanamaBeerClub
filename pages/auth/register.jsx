import Image from "next/image";
import logo from "../../public/assets/image/logo.svg";
import Link from "next/link";
import googleicon from "../../public/assets/image/Google.svg";

export default function Register() {
    return (
        <div className="section-auth">
            <div className="auth-container">
                <h2>Create An Account</h2>
                <div className="auth-inputs">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Name"
                            name="name"
                            id="name"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Last Name"
                            name="lastname"
                            id="lastname"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                            name="email"
                            id="email"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="date"
                            className="grow"
                            placeholder="Birthdate"
                            name="birthdate"
                            id="birthdate"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Phone Number"
                            name="phonenumber"
                            id="phonenumber"
                        />
                    </label>
                </div>
                <div className="auth-terms-checkbox">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                        name="terms"
                        id="terms"
                    />
                    <p>Accept terms & conditions</p>
                </div>
                <button className="btn-auth">Sign Up</button>

                <p>Or</p>

                <button className="btn-google">
                    <Image src={googleicon} alt="Google" />
                    <p>Sign Up with Google</p>
                </button>

                <div>
                    <p>
                        Already Have An Account?
                        <br />
                        <Link href={"/auth/login"}>
                            <span>Login</span>
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <Image src={logo} alt="Panama Beer Club" />
            </div>
        </div>
    );
}
