import Image from "next/image";
import Home_header from "./components/headers/Home_header";
import Featured_results from "./components/queries/Featured_results";
import Categories from "./components/queries/Categories";

export default function Home() {
  return (
    <main className="py-10">
      <Home_header />
      <Categories />
      <Featured_results />
      {/* <h1> Hello world </h1> */}
    </main>
  );
}
