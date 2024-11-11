
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Travel } from "./components/travel";
import { Info } from "./components/info";
import { Influence } from "./components/influener";
import { Slider } from "./components/slider";
import { Question } from "./components/question";

export default function Home() {
  return (
    <div className="font-urbanist max-w-[1200px] mx-auto">
      <Navbar/>
      <Hero/>
      <Travel/>
      <Info/>
      <Influence/>
      <Slider/>
      <Question/>
    </div>
  );
}
 