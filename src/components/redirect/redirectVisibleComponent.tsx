import { Link } from "@/types";
import { Flex, Heading, Link as LinkComponent, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default async function RedirectVisibleComponent({
  link,
  delay,
}: {
  link: Link;
  delay: number;
}) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={4}
      justifyContent="center"
      className="h-dvh"
    >
      <Heading>You are being redirected</Heading>
      <Text>The link riskycase.in/{link.shortCode} redirects to</Text>
      <LinkComponent as={NextLink} href={link.longLink} wordBreak="break-all">
        {link.longLink}
      </LinkComponent>
    </Flex>
  );
}
