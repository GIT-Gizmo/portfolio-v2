"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedSkills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg p-10 md:shadow-xl"
            ref={containerRef}
        >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <Icons.typescript />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.react />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref}>
                        <Icons.clerk />
                    </Circle>
                    <Circle ref={div4Ref} className="size-16">
                        <Icons.nextjs />
                    </Circle>
                    <Circle ref={div6Ref}>
                        <Icons.appwrite />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div3Ref}>
                        <Icons.tailwind />
                    </Circle>
                    <Circle ref={div7Ref}>
                        <Icons.nodejs />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    );
}

const Icons = {
    clerk: () => (
        <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="84.775%" y1="-9.121%" x2="-40.08%" y2="116.867%" id="a">
                    <stop stop-color="#17CCFC" offset="0%" />
                    <stop stop-color="#5D31FF" offset="50%" />
                    <stop stop-color="#F35AFF" offset="100%" />
                </linearGradient>
            </defs>
            <g fill="none">
                <path fill="#FFF" d="M0 0h90v90H0z" />
                <path d="m59.468 9.877-8.961 9.002a1.773 1.773 0 0 1-2.18.262 21.247 21.247 0 0 0-23.187.755 21.418 21.418 0 0 0-5.33 5.355 21.536 21.536 0 0 0-.758 23.299 1.773 1.773 0 0 1 .27 2.179l-9.063 9.103a1.715 1.715 0 0 1-2.346.096A44.327 44.327 0 0 1 0 45C0 20.15 20.15 0 45 0c6.464 0 12.622 1.33 18.219 3.715.83.347.933 1.44.249 2.002z" fill="url(#a)" />
                <path fill="#17CCFC" d="m25.9 51.425 20.932-20.832 10.025 10.024-20.932 20.832z" />
            </g>
        </svg>

    ),
    react: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" fill="none">
            <g fill="#61DAFB">
                <circle cx="420.9" cy="297.6" r="45.7" />
                <path d="M520.5 78.1c-30.2-3-61 4.5-90.1 21.9-27.2 16-55.7 38-83.5 64.7-28.8-27.1-57.6-49.3-86-64.6-26.5-13.9-54.6-21.3-83-21.3-30.3 0-61.1 8-91.1 22.2-38.4 17.5-70 42.2-87.9 70.5-16.1 25.7-21.5 54-16.4 83 8 43.1 36 89.7 81.4 133.2 44.3 42.3 101.9 79.7 172.4 111.4 68 30 140.5 45 215.3 45s147.3-15 215.3-45c70.5-31.6 128.1-69 172.4-111.4 45.3-43.5 73.3-90.1 81.4-133.2 5.2-29 .2-57.2-15.7-83.1-17.7-28.1-49.2-52.8-87.6-70.3-31.5-14.4-62.9-22.2-93.9-22.2zm85.7 260.2c-18 11.1-37.9 21.8-59.3 31.7-23.5 11.3-48 21.2-72.9 30.2s-50.3 16.8-75.4 23.5c-47 13.2-94.4 19.6-141.2 18-24.9-1-49.8-3.7-74.2-8.1s-49.1-10.9-73.2-19.4c-22.1-7.8-43.8-17.5-64-29.3s-38.6-23.4-56.4-36.4c-13.6-9.5-27.6-19.4-40.5-29.5 13 36.6 44 72.5 90.6 106.7 49.3 36.7 112.5 70.1 185.6 96.5 65.8 22.7 139.5 37 214.7 37 75.2 0 148.9-14.3 214.7-37 72.4-26.2 135.6-59.6 185.6-96.5 47.6-34.2 78.6-70.1 91.6-106.7-12.7 10.2-26.8 20.2-40.8 29.7z" />
            </g>
        </svg>

    ),
    nextjs: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
            <path fill="#000" d="M33.96 0H66c18.78 0 33.96 15.18 33.96 33.96v32.13C100 84.82 84.82 100 66 100H33.96C15.18 100 0 84.82 0 66V33.96C0 15.18 15.18 0 33.96 0z" />
            <path fill="#fff" d="M18.69 51.33V27.93h2.22l21.72 32.52H33.9L18.69 51.33zm47.55 6.68v-4.55h-3.83v-4.55h3.83v-4.57h4.56v4.57h3.83v4.55h-3.83v4.55h-4.56zm-19.5 7.82h2.1v4.82h-2.1z" />
        </svg>

    ),
    nodejs: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 289" fill="none">
            <path fill="#689F63" d="M128 .01L12 73v144l116 72 116-72V73L128 .01z" />
            <path fill="#FFF" d="M138.65 215.83l6.64 4.12c9.02 4.88 15.7 1.71 15.7-9.73v-40.95h15.48v40.94c0 19.74-11.56 30.18-28.57 30.18-5.64 0-10.12-.84-17.01-4.76l-7.45-4.15m-42.22-25.96c4.22 8.45 10.38 13.65 20.61 13.65 9.08 0 14.64-4.53 14.64-11.17 0-7.76-6.18-10.52-16.58-14.95l-5.18-2.23c-15-6.33-24.94-14.17-24.94-30.8 0-15.33 12.01-27.06 30.73-27.06 13.39 0 23.02 4.66 29.93 16.73l-15.64 10.01c-3.44-6.17-7.18-8.6-14.19-8.6-6.47 0-10.7 3.93-10.7 9.37 0 6.57 4.23 9.33 13.98 13.38l5.18 2.23c17.67 7.54 27.5 15.05 27.5 31.85 0 18.31-14.41 28.39-33.88 28.39-18.97 0-31.23-9.07-37.26-20.93" />
        </svg>

    ),
    tailwind: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" fill="none">
            <path fill="#38BDF8" d="M128 0c-57.09 0-80.8 32.23-85.66 64.45C48.43 49.77 57.09 40 74.35 40c12.65 0 23.46 7.41 35.45 16.8C121.04 65.8 133.64 80 162.32 80c57.09 0 80.8-32.23 85.66-64.45C207.57 40.63 198.91 50.4 181.65 50.4c-12.65 0-23.46-7.41-35.45-16.8C135.36 24.6 122.76 10.4 94.08 10.4 36.98 10.4 13.27 42.63 8.42 74.85 48.43 89.53 57.09 99.3 74.35 99.3c12.65 0 23.46-7.41 35.45-16.8C121.04 84.6 133.64 100.8 162.32 100.8c57.09 0 80.8-32.23 85.66-64.45-40 14.68-48.66 24.45-65.92 24.45-12.65 0-23.46 7.41-35.45 16.8C109.96 140.2 97.36 154.4 68.68 154.4 11.58 154.4-12.13 122.17-17 89.95c40.02-14.69 48.66-24.46 65.92-24.46 12.65 0 23.46-7.41 35.45-16.8C121.04 49.6 133.64 65.8 162.32 65.8c37.6 0 64.67-31.77 64.67-64.68C177.4 10.4 57.09 0 128 0z" />
        </svg>

    ),
    typescript: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
            <path fill="#3178C6" d="M0 0h256v256H0V0z" />
            <path fill="#fff" d="M119.6 87.1h-54.8V103h23.4v88h23.4v-88h23.4V87.1zm78.6 100.6c3.4 2.3 8.6 4.2 13.7 5.1 7.4 1.4 18.2 0 23.4-4l2.3-2.3-2.6-9c-1.2-5-2.6-10-3.2-11.6l-1.2-2.3-4 2.5c-5.5 3.2-10.8 4.6-16.2 4.6-8.5 0-13.8-3.6-16.2-12.1-.6-2.5-.6-4-.6-17.5s0-15 .6-17.5c2.4-8.5 7.6-12 16.2-12 6.4 0 11.9 1.7 17.4 5.4l4 2.5 1.1-2.5c.5-1.3 1.9-5.9 3-10l1.6-7.7-2.3-1.6c-3-2.1-9.4-4.3-15.4-5.2-10.2-1.4-20.1 0-28.2 4-8.7 4.6-14.3 11.6-16.8 20.8-.9 3.3-1.2 9-1.2 23.6 0 20.8 0 21.8 3 30.2 5.3 15.7 21.6 23.1 39 15z" />
        </svg>

    ),
    appwrite: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path fill="#F02E65" d="M12 0C5.373 0 0 5.373 0 12a11.975 11.975 0 003.516 8.484A11.975 11.975 0 0012 24a11.976 11.976 0 008.484-3.516A11.975 11.975 0 0024 12c0-6.627-5.373-12-12-12zm0 18a5.974 5.974 0 01-4.242-1.758A5.975 5.975 0 016 12a5.975 5.975 0 011.758-4.242A5.974 5.974 0 0112 6a5.974 5.974 0 014.242 1.758A5.975 5.975 0 0118 12a5.975 5.975 0 01-1.758 4.242A5.974 5.974 0 0112 18z" />
        </svg>

    ),
};