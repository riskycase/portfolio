"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { Container, Engine } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";

export default function ParticlesContainer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container) => {
    await console.log(container);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} />
  );
}
