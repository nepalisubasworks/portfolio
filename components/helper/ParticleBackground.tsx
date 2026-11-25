"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

/**
 * Registers the slim bundle of tsparticles on the engine.
 * Defined outside the component so its identity is stable between renders.
 */
const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

const ParticleBackground = () => {
  // Memoised so the options object is not re-created on every render
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 110, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { value: ["#67e8f9", "#93c5fd", "#3b82f6"] },
        links: {
          color: "#67e8f9",
          distance: 140,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { density: { enable: true }, value: 70 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="hero-particles"
        options={options}
        className="absolute inset-0 h-full w-full"
      />
    </ParticlesProvider>
  );
};

export default ParticleBackground;
