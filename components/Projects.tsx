"use client"

/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaCircleArrowDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, 4));

  useEffect(() => {
    if (showAll) {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.slice(0, 4));
    }
  }, [showAll]);

  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  const buttonTitle = showAll ? "View Less" : "View All";

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Take a peek at some of <span className="text-purple">my best projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, description, img, iconLists, link, code }) => (
          <div
            key={id}
            className={`sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] transition-all duration-1000 ease-in-out ${id >= 5 ? (showAll ? 'block opacity-100 max-h-[1000px]' : 'opacity-0 hidden max-h-0 overflow-hidden') : ''
              }`}
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center overflow-hidden justify-center sm:w-[570px] w-[80vw] h-[30vh] sm:h-[40vh] mb-10"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(link, "_blank");
                }}>
                <div className="relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162D]">
                  {/* <img src="/bg.png" alt="bg-img" /> */}
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    className="z-10 rounded-md"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <div className="p-2">
                        <Image
                          src={icon}
                          alt={icon}
                          width={25}
                          height={25}
                          style={{ display: 'block' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Link href={code} target="_blank" className="flex lg:text-xl md:text-x text-sm text-purple">Source Code</Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="flex justify-center mt-10">
          <MagicButton
            title={buttonTitle}
            icon={<FaCircleArrowDown />}
            position="right"
            handleClick={toggleProjects}
            otherClasses=""
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
