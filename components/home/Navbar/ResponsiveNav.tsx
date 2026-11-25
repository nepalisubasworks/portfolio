"use client";

import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const openNav = (): void => setShowNav(true);
  const closeNav = (): void => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </div>
  );
};

export default ResponsiveNav;
