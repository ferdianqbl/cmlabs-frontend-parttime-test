"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLink from "./nav-link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <HamburgerMenuIcon className="w-5 h-5 text-gray-400" />
      </SheetTrigger>
      <SheetContent className="bg-primary text-gray-400 border-none">
        <div className="flex flex-col gap-2 mt-8">
          <NavLink
            href="/"
            title="Home"
            className="w-full block"
            onOpenChange={setOpen}
          />
          <NavLink
            href="/ingredients"
            title="Ingredients"
            onOpenChange={setOpen}
          />
          <NavLink
            href="/categories"
            title="Categories"
            onOpenChange={setOpen}
          />
          <NavLink href="/areas" title="Areas" onOpenChange={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
