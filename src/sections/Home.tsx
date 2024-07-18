"use client";

import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import headerImage from "@/../public/undraw_programming_re_kg9v.svg";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <Flex height="100dvh" direction="column" id="home">
      <SimpleGrid
        columns={{ sm: 1, lg: 2 }}
        className="h-full"
        alignItems="center"
        justifyItems="center"
        flex={1}
        padding={4}
      >
        <Image src={headerImage} width={480} alt="Developer graphic" />
        <Box>
          <Text fontSize="xx-large">Hrishikesh Patil</Text>
          <Text fontSize="larger">Full Stack Web Developer</Text>
          <Text>
            Experienced Senior Developer with a demonstrated history of working
            in the information technology and services industry. Graduated with
            a Bachelor of Engineering in Electrical and Electronics Engineering
            from Birla Institute of Technology and Science, Pilani - Goa Campus.
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
