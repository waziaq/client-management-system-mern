import { Suspense } from "react";
import { Outlet } from "react-router-dom"

import Header from "./Header"
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header />
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}