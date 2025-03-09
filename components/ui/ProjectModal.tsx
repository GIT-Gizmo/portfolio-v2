"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import MagicButton from "./MagicButton";

type ProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project: {
        id: number;
        title: string;
        description: string;
        img: string;
        iconLists: string[];
        link: string;
        code: string;
    };
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const [mounted, setMounted] = useState(false);

    // Handle ESC key press to close modal
    useEffect(() => {
        setMounted(true);

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#13162D] rounded-xl border border-white/20 shadow-xl"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                            aria-label="Close modal"
                        >
                            <IoMdClose size={24} className="text-white" />
                        </button>

                        {/* Project image */}
                        <div className="relative w-full h-[40vh]">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover object-top rounded-t-xl"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#13162D] opacity-70"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white/90">{project.title}</h2>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.iconLists.map((icon, index) => (
                                    <div key={index} className="flex items-center border border-white/20 rounded-full bg-black/40 px-3 py-1.5">
                                        <Image src={icon} alt="technology" width={18} height={18} />
                                        <span className="ml-2 text-sm text-white/80">
                                            {icon.split("/").pop()?.replace(".svg", "")}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                    <MagicButton
                                        title="Visit Live Site"
                                        icon={<FaLocationArrow />}
                                        position="right"
                                        otherClasses="bg-gradient-to-r from-purple-600 to-purple-800"
                                    />
                                </Link>

                                <Link href={project.code} target="_blank" rel="noopener noreferrer">
                                    <MagicButton
                                        title="View Source Code"
                                        icon={<FaGithub />}
                                        position="right"
                                        otherClasses="bg-black"
                                    />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
