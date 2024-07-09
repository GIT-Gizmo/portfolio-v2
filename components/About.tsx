"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="heading">
                            An Exciting Story <span className="text-purple">About My Journey</span>
                        </h1>
                    </>
                }
            >
                <div>
                    <p>Hello!, I&apos;m Boluwatife David. A Full-Stack Engineer with a unique journey transitioning to software development. My background in demography fueled my analytical skills, which I now combine with expertise in React, Next.js, Node.js, and PHP to create cool web apps and robust systems.</p><p>Self-driven learning landed me my first freelance gig within 11 months, followed by internship role at Swap Space and contract role Adroit Handyman Services. At Adroit, I revamped the entire website which boosted server response time by 65% and user engagement by 20% and I&apos;m constantly pushing boundaries with innovative solutions.</p><p>Beyond coding, I&apos;m fascinated by Web 3&#46;0&apos;s potential to improve user privacy and personalize experiences. Let&apos;s explore how I can bring your vision to life!</p>
                </div>
            </ContainerScroll>
        </div>
    );
}

export default About;