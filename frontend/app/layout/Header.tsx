import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/header/Sidebar";

export default function Header() {
    return (
        <div className="bg-slate-200 dark:bg-slate-700 w-full min-h-24 flex justify-between px-8 py-2">
            <div className="flex items-center space-x-4">
                <Sidebar />
                <Image src={"/next.svg"} alt="Logo" width={120} height={48} className="object-cover h-fit my-auto" />
            </div>
        </div>
    )
}