import ExperienceComponent from "@/components/ExperienceComponent";
import { experiences } from "@/data/content";
import { Box, Divider, Flex, Heading, theme } from "@chakra-ui/react";

export default function Experience() {
  return (
    <Box
      id="experience"
      padding={12}
      backgroundColor={theme.colors.gray[500]}
      position="sticky"
    >
      <Heading fontSize="xxx-large">Experience</Heading>
      <Divider />
      <Flex direction="column" alignItems="center" gap={4} paddingY={4}>
        {experiences.map((experience, index) => (
          <ExperienceComponent
            experienceDetails={experience}
            index={index}
            key={index}
          />
        ))}
      </Flex>
    </Box>
  );
}
