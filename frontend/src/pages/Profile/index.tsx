import * as Icon from "react-feather";

function Profile() {
    return (
        <>
            {/*Breadcrumbs*/}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-black">
                    Profile
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
                                Profile
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default Profile