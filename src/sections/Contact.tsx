import ContactComponent from "@/components/ContactComponent";
import { contactDetails } from "@/data/content";
import { Flex, theme } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      id="contact"
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      gap={2}
      alignItems={{ base: "start", md: "center" }}
      justifyContent="space-evenly"
      padding={4}
      backgroundColor={theme.colors.gray[800]}
    >
      {contactDetails.map((contactDetail, index) => (
        <ContactComponent contactDetails={contactDetail} key={index} />
      ))}
    </Flex>
  );
}
