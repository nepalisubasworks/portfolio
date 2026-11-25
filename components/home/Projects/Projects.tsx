import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constant/constant";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Featured <span className="text-cyan-200">Projects</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 120}
              className="overflow-hidden rounded-2xl bg-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-950/60"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-800 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center space-x-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-white transition-colors hover:text-cyan-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  {/* Opens the live project in a new tab so the portfolio stays open */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-white transition-colors hover:text-cyan-300"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
