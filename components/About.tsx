"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import Image from "next/image";

const About = () => {
    return (
        <div id="#about" className="py-20 flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="heading">
                            An Exciting Story <span className="text-purple">About My Journey</span>
                        </h1>
                    </>
                }
            >
                <article>
                    <h2 className="text-lg sm:text-2xl font-bold text-[#E4003A]">Who I am and what I do</h2>
                    <p className="text-sm xs:text-base">Hello there! I&apos;m Boluwatife David, a Full-Stack Engineer who took a detour from counting populations to coding them (well, sort of). My background in demography surprisingly prepped me for the analytical side of software development. Now, I wield React, Next.js, Node.js, and dabble in PHP and Python to build web apps that are both functional and, dare I say, a little bit fun. I started my journey as a Frontend Developer and, like a curious explorer, gathered enough skills to become a Fullstack Developer.</p>
                    <br />

                    <h2 className="text-lg sm:text-2xl font-bold text-[#B60071]">How I got here</h2>
                    <p className="text-sm xs:text-base">My self-taught coding journey led me to land my first freelance gig in record time (11 months, to be exact!). That opened the door to an internship at Swap Space where I polished my skills to a fine shine. And then a contract role at Adroit Handyman Services, where I gave their website a much-needed facelift – we&apos;re talking a 30% boost in server response time and 20% more user engagement. Not too shabby, if I do say so myself.</p>
                    <br />

                    <h2 className="text-lg sm:text-2xl font-bold text-[#987D9A]">Where I&apos;m looking to go next</h2>
                    <p className="text-sm xs:text-base">Now, I&apos;m absolutely thrilled about the advancements in AI and how it can enhance human work and productivity (without, you know, replacing us). Imagine a world where AI handles the boring bits, leaving us humans to do the creative, fun stuff. That&apos;s the future I&apos;m excited about! I&apos;m on the lookout for opportunities where I can blend my tech skills and AI enthusiasm to create something amazing. So, if you have a vision that needs a dash of innovation and a sprinkle of humor, let&apos;s connect and make magic happen!</p>
                </article>
            </ContainerScroll>
        </div>
    );
}

export default About;