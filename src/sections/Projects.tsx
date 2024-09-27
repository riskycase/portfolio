import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";
import { Box, Divider, Heading } from "@chakra-ui/react";

export default function Projects() {
  return (
      <Box
          id="projects"
          padding={12}
      >
          <Heading fontSize="xxx-large">Projects</Heading>
          <Divider />
          {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={index} />
          ))}
      </Box>
  );
}
