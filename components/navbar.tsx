"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import UserButton from "./auth/user-button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full max-w-[600px] shadow-md">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/server" ? "default" : "link"}>
          <Link href="/server">Server</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "default" : "link"}>
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "link"}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "default" : "link"}>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
