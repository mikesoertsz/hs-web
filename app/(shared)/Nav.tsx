"use client";
import { UserProfile } from "@clerk/nextjs";
import { NavigationMenuDemo } from "./nav-dropdown";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full flex justify-between items-center bg-white py-2 fixed top-0 left-0 right-0">
      <div className="flex items-center px-6">
        <h1>investment.yachts</h1>
        <div className="hidden md:flex gap-9 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ml-12">
          <a href="#" className="">
            Invest
          </a>
          <a href="#" className="">
            How It Works
          </a>
        </div>
        <NavigationMenuDemo />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <a
          href="#"
          className="hidden md:flex text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3"
        >
          Help Center
        </a>
        <Button variant="outline" className="text-xs">
          Login
        </Button>
        <Button variant="secondary" className="text-xs">
          Signup
        </Button>
        <UserProfile />
      </div>
    </nav>
  );
}
