"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "SunCart - E-commerce",
    description:
      "A seasonal e-commerce platform with authenticated profile pages and product detail routes.",
    techStack: "Next.js, MongoDB, Better Auth",

    liveLink: "#",
    githubLink: "#",
    slug: "suncart",
  },
  {
    id: 2,
    title: "Working On it",
    description: "Comming Soon",
    techStack: "Next.js, MongoDB, Better Auth",

    liveLink: "#",
    githubLink: "#",
    slug: "suncart",
  },
  {
    id: 3,
    title: "Working On it",
    description: "Comming Soon",
    techStack: "Next.js, MongoDB, Better Auth",

    liveLink: "#",
    githubLink: "#",
    slug: "suncart",
  },
];

export default function ProjectSection() {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-zinc-400">
            Things I've built so far
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col"
            >
              {/* Next.js Image Tag ব্যবহার */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> */}
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="text-zinc-300 text-xs md:text-sm mb-6 flex flex-wrap gap-2">
                    <span className="font-semibold text-white">Stack:</span>
                    <span className="text-zinc-500">{project.techStack}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                    <div className="flex items-center gap-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        <FaExternalLinkAlt size={14} /> Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        <SiGithub size={18} /> Code
                      </a>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-400 font-bold text-sm transition-all group/btn"
                    >
                      Details{" "}
                      <HiArrowLongRight className="text-xl transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
