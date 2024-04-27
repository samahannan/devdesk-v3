import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { userId } = auth();

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <nav className="ml-auto mr-4 pr-4 border-r border-slate-300">
          <ul className="flex gap-6 font-semibold antialiased text-[15px]">
            <li>
              <Link href="/pricing">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/pricing">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {userId ? (
            <Button size="sm" variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button size="sm" variant="outline" asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
