import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {}

const Logo: FunctionComponent<Props> = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.png" alt="logo" height="18" width="120" />
      </div>
    </Link>
  );
};

export default Logo;
