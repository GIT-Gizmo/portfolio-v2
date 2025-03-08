import { IconCloud } from "./ui/IconCloud";

const slugs = [
    "typescript",
    "javascript",
    // "dart",
    // "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    // "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    // "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    "figma",
];

export function SkillCloud() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}
