import { notFound, redirect } from "next/navigation";

export const runtime = "edge";

export async function GET(
  _: Request,
  { params: { shortCode } }: { params: { shortCode: string } }
) {
  const response = await fetch(
    `${process.env.LINK_SHORTENER_HOME}/${shortCode}/redirect`,
    {
      next: { revalidate: 0 },
    }
  );
  const body = JSON.parse(await response.text());
  if (body.longLink !== "") redirect(body.longLink);
  else redirect(`${process.env.LINK_SHORTENER_HOME}/notFound`);
}
