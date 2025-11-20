import Image from "next/image"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    bgImage: string;
}

export default function Banner(props: Props) {
    return (
        <div className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
            <Image src={props.bgImage} alt="Vercel Logo" width={1280} height={1080} className="max-h-full h-[65vw] object-center object-cover w-full transition-all duration-300 ease-out" />
            <div className="absolute inset-10 h-min w-fit self-center bg-gray-800 p-4 rounded-lg">
                {props.children}
            </div>
        </div>
    )

}