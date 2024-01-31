import {Link} from "react-router-dom";
import PathConstants from "../../config/routes/pathConstants.tsx";
import {useState} from 'react';

const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});

    const handleChangeInput = (e: any) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setUser({email: "", password: ""});

        e.target.reset();
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden justify-center items-center">
                <div className="rounded-sm border border-stroke bg-white shadow-sm">
                    <div className="flex flex-wrap items-center">
                        <div className="hidden w-full xl:block xl:w-1/2">
                            <div className="py-16 px-24 text-center">
                                <a href="#" className="mb-5 inline-block">
                                    <img src="https://demo.tailadmin.com/src/images/logo/logo-dark.svg" alt="Logo"/>
                                </a>
                                <p className="font-medium 2xl:px-20">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    suspendisse.
                                </p>
                                <span className="mt-14 inline-block">
                                <img src="https://demo.tailadmin.com/src/images/illustration/illustration-03.svg"
                                     alt="Google"/>
                            </span>
                            </div>
                        </div>
                        <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
                            <div className="w-full p-4 sm:p-12 xl:p-17">
                            <span className="mb-2 block font-medium">
                                Welcome Back
                            </span>
                                <h2 className="mb-9 text-2xl font-bold text-black sm:text-2xl">
                                    Sign In to your account
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-black"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            onChange={handleChangeInput}
                                            placeholder="Enter your email"
                                            className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-primary active:border-primary"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="password"
                                            className="mb-2 block text-sm font-medium text-black"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={handleChangeInput}
                                            placeholder="Enter your password"
                                            className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-primary active:border-primary"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <button
                                            type="submit"
                                            className="w-full rounded-md border border-stroke bg-indigo-950 py-3 px-5 font-medium text-white transition hover:bg-opacity-90"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                                className="border-stroke"
                                            />
                                            <label
                                                htmlFor="remember"
                                                className="text-sm font-medium text-black"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-primary hover:underline"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center mt-4">
                                    <span className="text-sm font-medium text-black">
                                        Don't have an account?{" "}
                                        <Link
                                            to={PathConstants.REGISTER}
                                            className="text-primary hover:underline"
                                        >
                                            Register Now
                                        </Link>
                                    </span>
                                    </div>
                                    <div className="text-center">
                                    <span className="text-sm font-medium text-black">
                                        Need Help?{" "}
                                        <a
                                            href="#"
                                            className="text-primary hover:underline"
                                        >
                                            Contact Us
                                        </a>
                                    </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login