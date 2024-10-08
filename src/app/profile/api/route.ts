import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeadres = new Headers(request.headers);
  const headerList = headers();

const theme = request.cookies.get("theme");
cookies().set("resultsPerPage", "20")

  console.log(requestHeadres.get("Authorization"));
  console.log(headerList.get("Authorization"));

  console.log(theme);
  console.log(cookies().get("resultsPerPage"));
  

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    },
  });
}
