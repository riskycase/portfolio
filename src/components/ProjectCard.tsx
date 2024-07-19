import { Project } from "@/types";
import { Box, Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
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
    <>
      {index !== 0 && <Divider />}
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
        <Box maxWidth="24rem">
          <Link as={NextLink} href={project.link}>
            <Flex gap={2} alignItems="center">
              <Heading>{project.name}</Heading>
              {project.link && <FaExternalLinkAlt scale={0.8} />}
            </Flex>
          </Link>
          <Text>{project.description}</Text>
        </Box>
      </Flex>
    </>
  );
}
