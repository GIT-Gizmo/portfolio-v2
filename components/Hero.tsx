import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaRegFilePdf } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center items-center relative my-12 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <a href="https://github.com/git-gizmo" target="_blank" className="tracking-widest text-xs text-center text-blue-100 max-w-80 w-full relative  mb-10 md:mb-20 lg:mb-0 inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 cursor-pointer inline-flex items-center justify-center gap-2">
              <p>Dive into my code Jungle</p>
              <Image src="/git.svg" alt="Github" width={16} height={16} />
            </span>
          </a>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Your Vision, My Keyboard, Let's Make Some Magic"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Greetings, earthlings! I&apos;m Boluwatife, a code-juggling Full-stack Developer from Nigeria.</p>

          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Resume"
              icon={<FaRegFilePdf />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
