import {Link} from "react-router-dom";
import PathConstants from "../../config/routes/pathConstants.tsx";
import * as Icon from "react-feather";
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {useState} from "react";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import * as Yup from "yup";
import api from "../../services/api";

function register() {
    const [phone, setPhone] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);
    const validateSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required"),
        confirmPassword: Yup.string()
            .required("Re-type Password is required")
            .oneOf([Yup.ref("password"), ''], "Passwords must match"),
        phone: Yup.string()
            .required("Phone number is required"),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validateSchema)
    });

    const onSubmit = async (data: any) => {
        // check if phone number is valid
        if (!isValidPhoneNumber(data.phone)) {
            toast.error("Invalid phone number");
            return;
        }

        setLoading(true);

        try {
            await api.post("/auth/signup", data);
            toast.success("Registered successfully");

            reset();
        } catch (error: any) {
            if (error?.response?.data?.error === 'ERR_USER_ALREADY_EXISTS') {
                toast.error("User already exists");
            } else {
                toast.error("Something went wrong");
            }
        }

        setLoading(false);
    }

    return (
        <>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
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
                                Start for free now!
                            </span>
                                    <h2 className="mb-9 text-2xl font-bold text-black sm:text-2xl">
                                        Sign Up to your account
                                    </h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="Name"
                                                className="mb-2 block text-sm font-medium text-black"
                                            >Name</label>
                                            <div className="relative">
                                                <input
                                                    {...register("name")}
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter your Name"
                                                    className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-black active:border-black"
                                                />
                                                <span className="absolute right-4 top-4">
                                                <Icon.User size={22} className="text-black/50"/>
                                            </span>
                                            </div>
                                            {errors?.name &&
                                                <p className="text-red-500 text-sm mt-2">{errors.name?.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-medium text-black"
                                            >
                                                Email
                                            </label>
                                            <div className="relative">
                                                <input
                                                    {...register("email")}
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter your email"
                                                    className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-black active:border-black"
                                                />
                                                <span className="absolute right-4 top-4">
                                                <Icon.Mail size={22} className="text-black/50"/>
                                            </span>
                                            </div>
                                            {errors?.email &&
                                                <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="Phone"
                                                className="mb-2 block text-sm font-medium text-black"
                                            >Phone</label>
                                            <div className="relative">
                                                <PhoneInput
                                                    {...register("phone")}
                                                    defaultCountry="MY"
                                                    international
                                                    placeholder="Enter phone number"
                                                    value={phone}
                                                    onChange={setPhone}
                                                    className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition"/>
                                                <span className="absolute right-4 top-4">
                                                <Icon.Phone size={22} className="text-black/50"/>
                                            </span>
                                            </div>
                                            {errors?.phone &&
                                                <p className="text-red-500 text-sm mt-2">{errors.phone?.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="password"
                                                className="mb-2 block text-sm font-medium text-black"
                                            >
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    {...register("password")}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-black active:border-black"
                                                />
                                                <span className="absolute right-4 top-4">
                                                <Icon.Key size={22} className="text-black/50"/>
                                            </span>
                                            </div>
                                            {errors?.password &&
                                                <p className="text-red-500 text-sm mt-2">{errors.password?.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="Re-type Password"
                                                className="mb-2 block text-sm font-medium text-black"
                                            >Re-type Password</label>
                                            <div className="relative">
                                                <input
                                                    {...register("confirmPassword")}
                                                    type="password"
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    placeholder="Re-type your password"
                                                    className="w-full rounded-md border border-stroke bg-white py-3 px-5 font-medium text-black outline-none transition focus:border-black active:border-black"
                                                />
                                                <span className="absolute right-4 top-4">
                                                <Icon.Key size={22} className="text-black/50"/>
                                            </span>
                                            </div>
                                            {errors?.confirmPassword &&
                                                <p className="text-red-500 text-sm mt-2">{errors.confirmPassword?.message}</p>}
                                        </div>
                                        <div className="mb-6">
                                            <button
                                                disabled={loading}
                                                type="submit"
                                                className="w-full text-center rounded-md border border-stroke bg-indigo-950 py-3 px-5 font-medium text-white transition hover:bg-opacity-90"
                                            >
                                                {loading ?
                                                    <span className="flex items-center justify-center">
                                                        <Icon.Loader size={22} className="text-white animate-spin"/>
                                                    </span>
                                                    : "Register"
                                                }
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
                                        Already have an account?{" "}
                                        <Link
                                            to={PathConstants.LOGIN}
                                            className="text-primary hover:underline"
                                        >
                                            Login
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
            </div>
        </>
    )
}

export default register