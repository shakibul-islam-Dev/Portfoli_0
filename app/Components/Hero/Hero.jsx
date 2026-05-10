"use client";

import HeroAni from "./HeroAni";

import HeroText from "./HeroText";

// Hero component-er bhitore HeroAni-ke dynamic import koro

const Hero = () => {
  return (
    <>
      <section className="container flex bg-black flex-col-reverse sm:flex-row items-center justify-between mt-10 p-10">
        <HeroText></HeroText>
        <HeroAni className={"rounded-b-md"}></HeroAni>
      </section>

      {/* <Html5Icon></Html5Icon>
        <Css3Icon></Css3Icon>
        <TailWindIcon></TailWindIcon>
        <ReactIcon></ReactIcon>
        <Nextjs></Nextjs>
        <NodejsIcon></NodejsIcon>
        <ExpressIcon></ExpressIcon>
        <GithubIcon></GithubIcon> */}
    </>
  );
};

export default Hero;
