"use client";
import React, { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [neame, setName] = useState("Batman");
  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
};
