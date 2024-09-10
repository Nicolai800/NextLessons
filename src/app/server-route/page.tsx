
import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    console.log("Server Route Render");
    
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider/>
    </>
  );
}
