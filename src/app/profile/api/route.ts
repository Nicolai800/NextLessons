import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeadres = new Headers(request.headers);
  const headerList = headers();
  console.log(requestHeadres.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
