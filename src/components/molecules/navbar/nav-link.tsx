"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
  className?: string;
  onOpenChange?: (open: boolean) => void;
};

const NavLink: React.FC<Props> = ({ href, title, className, onOpenChange }) => {
  const pathname = usePathname();
  const isCurrent = pathname.split("/")[1] === href.split("/")[1];
  return (
    <Link
      href={href}
      className={cn(
        "py-1 px-3 hover:text-white duration-300",
        isCurrent && " bg-gray-700 text-white rounded-md font-medium",
        className
      )}
      onClick={() => onOpenChange?.(false)}
    >
      {title}
    </Link>
  );
};

export default NavLink;
