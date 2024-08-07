import { redirect } from "next/navigation";

export default async function RedirectComponent({
  link,
  delay = 5,
}: {
  link: string;
  delay: number;
}) {
  await new Promise((resolve) => setTimeout(resolve, delay * 1000));
  redirect(link);
  return <></>;
}
