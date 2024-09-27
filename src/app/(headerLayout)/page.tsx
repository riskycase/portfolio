"use client";

import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import { Box, theme } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { Engine } from "@tsparticles/engine";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { options } from "@/data/particleOptions";
import Subcontainer from "@/sections/Subcontainer";

export default function Page() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine, refresh = true) => {
      await loadBasic(engine);
      await loadParticlesLinksInteraction(engine, false);

      await engine.addPreset("links", options, false);

      await engine.refresh(refresh);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <>
      {init && <Particles id="tsparticles" options={options} />}
      <Box
        color={theme.colors.gray[50]}
        maxWidth="100vw"
        boxSizing="border-box"
        overflowX="clip"
      >
        <Home />
        <Subcontainer />
        <Contact />
      </Box>
    </>
  );
}
