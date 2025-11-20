"use client";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { LINKS } from "../../constants/links";
import Link from "next/link";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 ${open ? "block" : "hidden"} bg-none z-40`} onClick={(e) => { e.preventDefault(); setOpen(false) }}>
                <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                    <div className="p-4">
                        <button onClick={(e) => { e.preventDefault(); setOpen(false) }} className="mb-4 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-orange-300 dark:hover:text-orange-500">
                            <FontAwesomeIcon icon={faClose} /> Close
                        </button>
                        <nav className="flex flex-col space-y-4">
                            {LINKS.map((link, index) => {
                                return (
                                    <Link key={index} href={link.href} className="hover:text-orange-500 transition-all duration-300 ease-in-out text-xl">{link.icon} {link.label}</Link>
                                )
                            })}
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