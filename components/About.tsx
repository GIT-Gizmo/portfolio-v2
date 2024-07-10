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
                <article className="flex flex-col gap-0.5 sm:gap-3 text-blue-100">
                    <h2 className="text-md sm:text-2xl font-bold text-violet-400">Who I am and what I do</h2>
                    <p className="text-xs xs:text-sm sm:text-base">Hello there! I&apos;m <span className="text-indigo-500 font-semibold">Boluwatife David</span>, a Full-Stack Developer who took a detour from counting populations to coding them (well, sort of). My background in demography surprisingly prepped me for the analytical side of software development. Now, I wield React, Next.js, Node.js, and dabble in PHP and Python to build web apps that are both functional and, dare I say, a little bit fun. I started my journey as a Frontend Developer and, like a curious explorer, gathered enough skills to become a <span className="text-violet-600">Fullstack Developer</span>.</p>
                    <br />

                    <h2 className="text-md sm:text-2xl font-bold text-indigo-500">How I got here</h2>
                    <p className="text-xs xs:text-sm sm:text-base">My self-taught coding journey led me to land my first freelance gig in record time (11 months, to be exact!). That opened the door to an internship at <span className="text-violet-600">Swap Space</span> where I polished my skills to a fine shine. And then a contract role at <span className="text-violet-400 font-semibold">Adroit Handyman Services</span>, where I gave their website a much-needed facelift – we&apos;re talking a 30% boost in server response time and 20% more user engagement. Not too shabby, if I do say so myself.</p>
                    <br />

                    <h2 className="text-md sm:text-2xl font-bold text-violet-400">Where I&apos;m looking to go next</h2>
                    <p className="text-xs xs:text-sm sm:text-base">Now, I&apos;m absolutely thrilled about the advancements in <span className="text-indigo-500 font-semibold">AI</span> and how it can enhance human work and productivity (without, you know, replacing us). Imagine a world where AI handles the boring bits, leaving us humans to do the creative, fun stuff. That&apos;s the <span className="text-violet-600 font-semibold">future</span> I&apos;m excited about! I&apos;m on the lookout for opportunities where I can blend my tech skills and AI enthusiasm to create something amazing. So, if you have a vision that needs a dash of innovation and a sprinkle of humor, let&apos;s connect and make magic happen!</p>
                </article>

                {/* <div className="flex flex-col justify-center mt-32 mx-auto text-base lg:text-lg text-blue-100 select-none max-w-4xl">
                    <div className="p-4">
                        I am currently pursuing a Bachelor of Technology degree at HBTU
                        Kanpur. Over the past three years, I have immersed myself in the world
                        of Web Development, acquiring extensive Technical and Practical
                        skills, which I continue to expand.
                    </div>
                    <div className="p-4">
                        In addition to my Web Development Experience, I have actively engaged
                        in Competitive Programming. I have achieved the rank of{" "}
                        <span className="text-orange-600 font-semibold text-xl lg:text-2xl">
                            Knight on LeetCode
                        </span>
                        ,{" "}
                        <span className="text-blue-400 font-semibold text-xl lg:text-2xl">
                            3 Star on CodeChef
                        </span>
                        , and{" "}
                        <span className="text-emerald-700 font-semibold text-xl lg:text-2xl">
                            Pupil on Codeforces
                        </span>
                        . Over the past 2 to 3 years, I have solved approximately{" "}
                        <span className="text-violet-600 font-semibold text-xl lg:text-2xl">
                            <span className="text-2xl lg:text-3xl">1000+</span> Data Structures
                            and Algorithms (DSA) and competitive programming problems.
                        </span>
                    </div>
                    <div className="p-4">
                        Moreover, I have gained practical experience in the field of{" "}
                        <span className="text-yellow-400 font-semibold text-xl lg:text-2xl">
                            {" "}
                            Machine Learning
                        </span>{" "}
                        by working on real-world projects and earning various certificates in{" "}
                        <span className="text-teal-500 font-semibold text-xl lg:text-2xl">
                            {" "}
                            Machine Learning
                        </span>{" "}
                        and{" "}
                        <span className="text-rose-500 font-semibold text-xl lg:text-2xl">
                            {" "}
                            Deep Learning.
                        </span>
                    </div>
                </div> */}
            </ContainerScroll>
        </div>
    );
}

export default About;