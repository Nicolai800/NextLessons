import { cookies } from "next/headers";

export const metadata = {
  title: "Aboun Codevolution",
};

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")
  console.log(theme);
  
  return <h1>About me {new Date().toLocaleTimeString()} {new Date().getFullYear()}</h1>;
}
