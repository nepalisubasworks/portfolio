"use client";

import Tilt from "react-parallax-tilt";
import { skills } from "@/constant/constant";

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          My <span className="text-cyan-200">Skills</span>
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <Tilt scale={1.05} transitionSpeed={400}>
                  <div className="flex h-52 w-44 flex-col items-center justify-center rounded-xl bg-[#141341] p-5 text-center shadow-lg sm:w-48">
                    <Icon className="h-14 w-14 text-cyan-200" />
                    <span className="mt-4 rounded-full bg-blue-800 px-3 py-1 text-[11px] font-semibold text-cyan-200">
                      {skill.badge}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
