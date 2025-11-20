import Image from "next/image";
import Sidebar from "../components/header/Sidebar";

export default function Header() {
    return (
        <div className="bg-stone-500 dark:bg-indigo-950 w-full min-h-24 flex justify-between px-8 py-2 dark:text-white">
            <div className="flex items-center space-x-4">
                <Sidebar />
                <Image src={"/next.svg"} alt="Logo" width={120} height={48} className="object-cover h-fit my-auto bg-white p-2 rounded-xl" />
            </div>
        </div>
    )
}