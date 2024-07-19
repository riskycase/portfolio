export const runtime = "edge";

export async function GET(
  _: Request,
  { params: { shortCode } }: { params: { shortCode: string } }
) {
  // TODO: Implement URL shortener
  // console.log(shortCode);
  return Response.json({
    status: "Pending",
    message: "Link shortener implementation not ready",
  });
}
