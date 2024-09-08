"use client";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        value={name}
        onChange={(element) => setName(element.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
