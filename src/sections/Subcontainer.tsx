import { Box } from "@chakra-ui/react";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Subcontainer() {
    return (
        <Box
            backgroundColor="rgba(0, 0, 0, 0.2)"
            backdropFilter="blur(4px)"
        >
            <Experience />
            <Projects />
        </Box>
    );
}