import { useState, useEffect } from "react";
import TsParticles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { Engine } from "@tsparticles/engine";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { options } from "@/data/particleOptions";

export default function Particles() {
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
  return <>{init && <TsParticles id="tsparticles" options={options} />}</>;
}
