import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen justify-center bg-zinc-50 dark:bg-gray-950">
      <main className="min-h-screen w-full justify-between bg-white dark:bg-zinc-900">
        <Image src={'/aesthetic-business-doors.jpg'} alt="Vercel Logo" width={1280} height={1080} className="max-h-[65vh] h-[60vw] object-center object-cover w-screen blur-xs hover:blur-none transition-all duration-300 ease-out" />
      </main>
    </div>
  );
}
