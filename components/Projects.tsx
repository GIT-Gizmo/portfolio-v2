"use client"

/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaCircleArrowDown, FaCircleArrowUp, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import ProjectModal from "./ui/ProjectModal";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const initialProjectCount = 4;

  const toggleProjects = () => {
    setShowAll(!showAll);

    // Scroll to the bottom of visible projects when showing more
    if (!showAll) {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects-container");
        if (projectsSection) {
          window.scrollTo({
            top: projectsSection.offsetTop + projectsSection.clientHeight - 100,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Scroll back to projects section when showing less
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        window.scrollTo({
          top: projectsSection.offsetTop,
          behavior: "smooth"
        });
      }
    }
  };

  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, initialProjectCount);

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Take a peek at some of <span className="text-purple">my best projects</span>
      </h1>

      <div
        id="projects-container"
        className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] transition-all duration-500 ease-in-out"
          >
            <PinContainer
              title={project.name}
              href={project.link}
            >
              <div
                className="relative flex items-center overflow-hidden justify-center sm:w-[570px] w-[80vw] h-[30vh] sm:h-[40vh] mb-10 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openProjectDetails(project);
                }}
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162D]">
                  <Image
                    src={project.img}
                    alt={project.title}
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
                {project.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
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

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openProjectDetails(project);
                  }}
                  className="flex items-center justify-center bg-purple/10 hover:bg-purple/20 text-purple py-2 px-4 rounded-md transition duration-300 cursor-pointer"
                >
                  View Details
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>

              <div className="flex mt-3 gap-3 justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1 text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  <FaLocationArrow className="inline-block" size={10} /> Live Demo
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-1 text-xs text-white/70 hover:text-white/90 transition-colors"
                >
                  <FaGithub className="inline-block" size={12} /> GitHub
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {projects.length > initialProjectCount && (
        <div className="flex justify-center mt-10">
          <MagicButton
            title={showAll ? "View Less" : "View All"}
            icon={showAll ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
            position="right"
            handleClick={toggleProjects}
            otherClasses="transition-all duration-300"
          />
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={closeProjectDetails}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
