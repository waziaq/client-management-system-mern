import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import PathConstants from "../config/routes/pathConstants";

function Sidebar() {
    return (
        <>
            <aside
                className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-blue-950 duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full">
                <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
                    <a href="">
                        <img src="https://demo.tailadmin.com/src/images/logo/logo.svg" alt="Logo" />
                    </a>
                </div>
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                        <div>
                            <h3 className="mb-4 ml-4 text-sm font-medium text-stone-500">MENU</h3>
                            <ul>
                                <li className="mb-6 flex flex-col gap-1.5">
                                    <Link to={PathConstants.DASHBOARD} className="relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-stone-500">
                                        <Icon.Grid size={18} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar