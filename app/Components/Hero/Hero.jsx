"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroText from "./HeroText";

// HeroAni-কে dynamic import করা হলো (SSR: false কারণ এটি অ্যানিমেশন হতে পারে)
const HeroAni = dynamic(() => import("./HeroAni"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-zinc-900 animate-pulse rounded-full" />
  ),
});

const Hero = () => {
  return (
    <section
      className="container mx-auto mt-15 bg-black min-h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 md:p-10 gap-10"
      id="home"
    >
      {/* Left Side: Professional Intro & Designation */}
      <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <HeroText />
      </div>

      {/* Right Side: Professional Photo / Animation */}
      <div className="w-full lg:w-2/5 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* প্রোফাইল পিকচার ফ্রেম */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />

          <div className="relative w-full h-full rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-900 shadow-2xl">
            {/* আপনার ছবি এখানে যোগ করবেন */}
            <Image
              src="/profilepic.png" // public ফোল্ডারে আপনার ছবি রেখে এখানে পাথ দিন
              alt="Shakibul Islam"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 384px"
            />

            {/* যদি ছবি না থাকে তবে HeroAni ব্যবহার করতে পারেন */}
            {/* <HeroAni /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
