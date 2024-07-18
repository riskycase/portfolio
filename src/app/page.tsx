import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import { Box, Divider, theme } from "@chakra-ui/react";

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
      <Projects />
      <Divider />
      <Contact />
    </Box>
  );
}
