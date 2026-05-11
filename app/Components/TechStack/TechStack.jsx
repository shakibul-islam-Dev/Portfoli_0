import Html5Icon from "../ReactSvg/Html5Icon";
import Css3Icon from "../ReactSvg/Css3Icon";
import TailWindIcon from "../ReactSvg/TailWindIcon";
import ReactIcon from "../ReactSvg/ReactIcon";
import Nextjs from "../ReactSvg/Nextjs";
import NodejsIcon from "../ReactSvg/NodejsIcon";
import ExpressIcon from "../ReactSvg/ExpressIcon";
import GithubIcon from "../ReactSvg/GithubIcon";
import JavaScriptIcon from "../ReactSvg/JavaScriptIcon";
import MongoDbIcon from "../ReactSvg/MongoDb";

const TechStack = () => {
  return (
    <>
      <section
        id="techstack"
        className="container mx-auto flex flex-col items-center justify-center mt-10 p-10"
      >
        <div>
          <h1 className="text-4xl">Tech Stack</h1>
        </div>
        <div>
          <div className="flex flex-wrap gap-10 mt-5 justify-center items-center">
            <Html5Icon></Html5Icon>
            <Css3Icon></Css3Icon>
            <TailWindIcon></TailWindIcon>
            <JavaScriptIcon />
            <ReactIcon></ReactIcon>
            <Nextjs></Nextjs>
            <NodejsIcon></NodejsIcon>
            <MongoDbIcon />
            <ExpressIcon></ExpressIcon>
            <GithubIcon></GithubIcon>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
