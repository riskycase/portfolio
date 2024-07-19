import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import { Box, theme } from "@chakra-ui/react";

export const runtime = "edge";

export default function Page() {
  return (
    <Box
      style={{
        color: theme.colors.gray[50],
        backgroundColor: theme.colors.gray[500],
      }}
    >
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
}
