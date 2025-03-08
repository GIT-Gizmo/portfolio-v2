import Image from "next/image";
import { GlowingBorder } from "./MovingBorder";
import { workExperience } from "@/data";

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map(({ id, title, description, thumbnail }) => (
                    <GlowingBorder
                        key={id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        className="text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image src={thumbnail} alt={thumbnail} width={128} height={128} className="lg:w-32 md:w-20 w-16" />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </GlowingBorder>
                ))}
            </div>
        </section>
    )
}

export default Experience