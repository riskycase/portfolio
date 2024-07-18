export async function GET() {
  return Response.json(
    { "m.server": "matrix.riskycase.in:443" },
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    }
  );
}
