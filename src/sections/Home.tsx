import { Box, Flex, Heading, SimpleGrid, Text, theme } from "@chakra-ui/react";
import headerImage from "@/../public/undraw_programming_re_kg9v.svg";
import Image from "next/image";

export default function Home() {
  return (
    <Flex
      height="100dvh"
      direction="column"
      id="home"
      overflowY="clip"
      position="sticky"
    >
      <SimpleGrid
        columns={{ sm: 1, lg: 2 }}
        className="h-full"
        alignItems="center"
        justifyItems="center"
        flex={1}
        padding={4}
      >
        <Image
          src={headerImage}
          width={480}
          alt="Developer graphic"
          style={{
            position: "sticky",
          }}
        />
        <Box
          backgroundColor="rgba(0, 0, 0, 0.6)"
          padding={4}
          borderRadius={12}
          backdropFilter="blur(2px)"
        >
          <Heading as={"h1"} fontSize="xx-large">
            Hrishikesh Patil
          </Heading>
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
