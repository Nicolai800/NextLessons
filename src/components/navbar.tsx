// "use client";
// import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
  console.log(`Nav bar rendered`);
//   const [search, serSearch] = useState("");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
