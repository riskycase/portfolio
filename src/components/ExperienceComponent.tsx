import { ExperienceDetails } from "@/types";
import { Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import moment from "moment";

export default function ExperienceComponent({
  experienceDetails,
  index,
}: {
  experienceDetails: ExperienceDetails;
  index: number;
}) {
  const dateFormatter = (date: Date) => moment(date).format("MMM, YYYY");
  return (
    <Flex
      direction="column"
      alignItems="stretch"
      gap={4}
      width={{ base: "100%", md: "48rem" }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        {index !== 0 && <Divider />}
        <Flex
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center" }}
          gap={2}
        >
          <Flex direction="column" alignItems="start" gap={2}>
            <Text fontSize="larger" fontWeight="700">
              {experienceDetails.title}
            </Text>
            <Text>{experienceDetails.comapany}</Text>
          </Flex>
          <Flex
            direction="column"
            alignItems={{ base: "start", md: "end" }}
            gap={2}
          >
            <Text>{`${dateFormatter(experienceDetails.start)} - ${experienceDetails.end ? dateFormatter(
              experienceDetails.end
            ) : 'Present'}`}</Text>
            <Text as="i">{experienceDetails.location}</Text>
          </Flex>
        </Flex>
        <Text>{experienceDetails.description}</Text>
        <UnorderedList>
          {experienceDetails.points.map((point, index) => (
            <ListItem key={index}>{point}</ListItem>
          ))}
        </UnorderedList>
      </motion.div>
    </Flex>
  );
}
