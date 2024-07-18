import { ContactDetails } from "@/types";
import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ContactComponent({
  contactDetails,
}: {
  contactDetails: ContactDetails;
}) {
  return (
    <Link as={NextLink} href={contactDetails.link}>
      <Flex direction="row" alignItems="center" gap={1}>
        <contactDetails.icon />
        <Text>{contactDetails.name}</Text>
      </Flex>
    </Link>
  );
}
