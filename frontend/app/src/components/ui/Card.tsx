import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {

}
export default function Card({ children}: PropsWithChildren) {
    return (
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden">
            {children}
        </div>
    )
}
