import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import PathConstants from "../config/routes/pathConstants.tsx";
import { useSelector } from "react-redux";
import BackdropLoading from "./BackdropLoading/index.tsx";

function Header() {
    const { user, isLoading } = useSelector((state: any) => state.auth);

    if (isLoading) {
        return <BackdropLoading />;
    }

    return (
        <>
            <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
                <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                    <div className="hidden sm:block"></div>
                    <div className="flex items-center gap-4 2xsm:gap-7">
                        <ul className="flex items-center gap-2 2xsm:gap-4">
                            <li className="relative">
                                <a href="#" className="relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-stone hover:text-primary">
                                            <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500">
                                                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                                            </span>
                                    <Icon.Bell size={18} />
                                </a>
                            </li>
                        </ul>
                        <div className="relative">
                            <Link to={PathConstants.PROFILE} className="flex items-center gap-4">
                                        <span className="hidden text-right lg:block">
                                            <span className="block text-sm font-medium text-black">
                                                {user?.data?.name}
                                            </span>
                                            <span className="block text-xs font-medium text-stone-500">{user?.data?.role?.name}</span>
                                        </span>
                                <span className="h-12 w-12 rounded-full">
                                            <img src="https://demo.tailadmin.com/src/images/user/user-01.png" alt="Avatar" />
                                        </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header