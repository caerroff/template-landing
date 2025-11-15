"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 ${open ? "block" : "hidden"} bg-none z-40`} onClick={(e) => { e.preventDefault(); setOpen(false) }}>
                <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                    <div className="p-4">
                        <button onClick={(e) => { e.preventDefault(); setOpen(false) }} className="mb-4 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 dark:hover:text-orange-500">

                            Close
                        </button>
                        <nav className="flex flex-col space-y-4">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">About</a>
                            <a href="#" className="hover:underline">Services</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>


            <button onClick={(e) => { e.preventDefault(); setOpen(true) }} className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 dark:hover:text-orange-500 text-white">
                <FontAwesomeIcon icon={faBars} className="text-2xl my-auto" />
            </button>

        </>
    )
}