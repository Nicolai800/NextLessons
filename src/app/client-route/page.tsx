"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute(){
    console.log("Client Route Render");
    
    const result = serverSideFunction();
    return (
        <>
          <h1>Client Route</h1>
          <p>{result}</p>
        </>
      );
}