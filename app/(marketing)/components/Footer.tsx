import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bottom-0 left-0 w-full px-4 border-t p-4 bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex justify-between items-center w-full ">
        <Logo />
        <div className="ml-4 space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
