import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    link?: string;
}
export default function Card({ children, link }: Props) {
    return (
        <>
            {link ?
                <Link href={link} target="_blank">
                    <div className="bg-white hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out">
                        {children}
                    </div>
                </Link>
                :
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden">
                    {children}
                </div>
            }
        </>
    )
}
