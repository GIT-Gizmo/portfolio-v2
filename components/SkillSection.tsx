"use client";

import { skills } from '@/data';
import { AnimatedTooltip } from './ui/AnimatedTooltip';

export function SkillSection() {
    return (
        <section id="skills" className="py-20">
            <h1 className="heading mb-5">
                Experience with various <span className="text-purple">Technologies and Tools</span>
            </h1>
            <div className="h-full flex flex-wrap max-w-5xl bg-white dark:bg-black-100 mx-auto py-5 px-5 rounded-lg w-full items-center justify-center">
                <AnimatedTooltip items={skills} />
            </div>
        </section>
    );
}