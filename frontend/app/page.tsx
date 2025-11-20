import Image from "next/image";
import Banner from "./src/components/Banner";
import Card from "./src/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faQuestion, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Banner bgImage="/aesthetic-business-doors.jpg">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">Welcome to Your Site</h1>
        <p className="text-gray-300 text-lg md:text-2xl lg:text-3xl mt-4">This is a customizable banner component.</p>
      </Banner>

      <h2 className="text-4xl text-center underline py-3">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item}>
            <Image
              src={`/file.svg`}
              alt={`Product ${item}`}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
              <p className="text-gray-600">This is a brief description of Product {item}.</p>
              <div className="flex justify-center gap-2 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"><FontAwesomeIcon icon={faCartPlus} /> Buy Now</button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"><FontAwesomeIcon icon={faQuestionCircle} /> Learn More</button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <h2 className="text-4xl text-center underline py-3">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2].map((item) => (
          <div key={item} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/globe.svg`}
              alt={`Product ${item}`}
              width={400}
              height={400}
              className="object-cover w-fit h-48 mx-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">News {item}</h3>
              <p className="text-gray-600">This is a brief description of News {item}.</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
