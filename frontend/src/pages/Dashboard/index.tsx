import * as Icon from "react-feather";

function Dashboard() {

    return (
        <>
            {/*Breadcrumbs*/}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-black">
                    Dashboard
                </h2>
                <nav>
                    <ol className="flex items-center gap-2">
                        <li>
                            <a href="#" className="text-primary hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <Icon.ChevronRight size={14} />
                        </li>
                        <li>
                            <a href="#" className="text-primary hover:underline">
                                Dashboard
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-200">
                        <Icon.Briefcase size={22} className="text-indigo-500"/>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                        <div>
                            <h4 className="text-xl font-bold text-black">
                                $3.456K
                            </h4>
                            <span className="text-sm font-medium text-stone-500">Total Revenue</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                            <Icon.ArrowUp size={14} />
                            <span>10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard