"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import ParticleBackground from "@/components/helper/ParticleBackground";
import { heroRoles, SITE } from "@/constant/constant";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-[12vh]"
    >
      {/* Particle background layer */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-[90%] max-w-4xl flex-col items-center py-12 text-center">
        {/* Avatar */}
        <div
          data-aos="zoom-in"
          className="relative h-32 w-32 overflow-hidden rounded-full border-8 border-[#0C0C48] sm:h-40 sm:w-40 md:h-48 md:w-48"
        >
          <Image
            src={SITE.avatar}
            alt={`${SITE.name} avatar`}
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
            className="object-cover"
          />
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Building <span className="text-cyan-200">modern web applications</span>,{" "}
          <span className="text-cyan-200">scalable APIs</span> &amp;{" "}
          <span className="text-cyan-200">enterprise systems.</span>
        </h1>

        {/* Typewriter roles */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-6 min-h-[2rem] text-lg font-semibold text-cyan-300 sm:text-xl md:text-2xl"
        >
          <Typewriter
            options={{
              strings: heroRoles,
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
            }}
          />
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-4 text-sm text-gray-400 sm:text-base"
        >
          Based in {SITE.location}
        </p>

        {/* CTA */}
        <Link
          href="#projects"
          data-aos="fade-up"
          data-aos-delay="350"
          className="mt-8 rounded-lg bg-blue-800 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-900"
        >
          See My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
