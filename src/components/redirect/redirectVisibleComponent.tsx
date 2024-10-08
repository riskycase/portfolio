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
      padding={4}
      justifyContent="center"
      textAlign="center"
      className="h-dvh"
      wordBreak="keep-all"
    >
      <Heading>You are being redirected</Heading>
      <Text>The link riskycase.in/{link.shortCode} redirects to</Text>
      <LinkComponent as={NextLink} href={link.longLink} wordBreak="break-all">
        {link.longLink}
      </LinkComponent>
      <Text>
        In case this does not seem right, you can report the link below
      </Text>
      <LinkComponent
        as={NextLink}
        href={`${process.env.NEXT_PUBLIC_LINK_SHORTENER_HOME}/${link.shortCode}/report`}
        wordBreak="break-all"
      >
        <Text>
          {process.env.NEXT_PUBLIC_LINK_SHORTENER_HOME}/{link.shortCode}/report
        </Text>
      </LinkComponent>
    </Flex>
  );
}
