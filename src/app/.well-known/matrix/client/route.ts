export async function GET() {
  return Response.json(
    {
      "m.homeserver": { base_url: "https://matrix.riskycase.in" },
      "org.matrix.msc3575.proxy": {
        url: "https://sync-v3.matrix.riskycase.in",
      },
      "m.identity_server": { base_url: "https://vector.im" },
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 200,
    }
  );
}
