import Image from "next/image";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <main className="overflow-hidden">

      <Navbar/>

      <Hero/>

    </main>
      
  );
}
