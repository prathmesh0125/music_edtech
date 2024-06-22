"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string },) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div 
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            test
          </MenuItem>
        </HoveredLink>
        <MenuItem setActive={setActive} active={active} item="courses">
        <div className="flex flex-col space-y-4 text-sm">

          <HoveredLink href="/chi"> All courses</HoveredLink>
          <HoveredLink href="/chi"> Basic music theory</HoveredLink>
          <HoveredLink href="/chi"> Advanced compositon</HoveredLink>
          <HoveredLink href="/chi"> songwriting</HoveredLink>
          <HoveredLink href="/chi"> Music production</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="contact us">

        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
