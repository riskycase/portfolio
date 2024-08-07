import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import graphic from "@/../public/undraw_access_denied_re_awnf.svg";
import { Suspense } from "react";
import RedirectComponent from "@/components/redirect/redirectComponent";
import RedirectVisibleComponent from "@/components/redirect/redirectVisibleComponent";

export const runtime = "edge";

export default async function ShortCode({
  params: { shortCode },
}: {
  params: { shortCode: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LINK_SHORTENER_HOME}/${shortCode}/redirect`,
    {
      next: { revalidate: 0 },
    }
  );
  const body = JSON.parse(await response.text());
  if (body.longLink) {
    const delay = 15;
    return (
      <Suspense
        fallback={<RedirectVisibleComponent link={body} delay={delay} />}
      >
        <RedirectComponent link={body.longLink} delay={delay} />
      </Suspense>
    );
  } else
    return (
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        className="h-full"
        alignItems="center"
        justifyItems="center"
        flex={1}
        padding={{ base: 1, lg: 4 }}
      >
        <Image
          src={graphic}
          width={480}
          style={{
            maxWidth: "85vw",
          }}
          alt="Not found graphic"
        />
        <Flex direction="column" gap={4}>
          <Heading>Not found!</Heading>
          <Text>The link you are trying to access does not exist!</Text>
        </Flex>
      </SimpleGrid>
    );
}
