import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return(
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
