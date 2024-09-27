import ExperienceComponent from "@/components/ExperienceComponent";
import { experiences } from "@/data/content";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

export default function Experience() {
    return (
        <Box
            id="experience"
            padding={12}
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
