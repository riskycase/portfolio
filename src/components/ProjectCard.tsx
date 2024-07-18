import { Project } from "@/types";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link as={NextLink} href={project.link}>
      <Flex
        alignItems="start"
        width="100%"
        direction={{
          base: "column",
          lg: index % 2 === 0 ? "row" : "row-reverse",
        }}
        justifyContent="space-evenly"
        padding={{
          base: 4,
          lg: 8,
        }}
        marginY={4}
        gap={4}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.description}
            width={360}
            style={{
              maxHeight: "256px",
              objectFit: "contain",
            }}
          />
        )}
        <Box>
          <Heading>{project.name}</Heading>
          <Text>{project.description}</Text>
        </Box>
      </Flex>
    </Link>
  );
}
