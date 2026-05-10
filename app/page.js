import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation></Navigation>
      <Hero></Hero>
    </div>
  );
}
