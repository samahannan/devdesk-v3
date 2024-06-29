import { HomeIcon, PocketKnife, RefreshCcw, Settings } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface SidebarProps { }

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <aside className="border-r border-r-[#e5e5e5] p-4 px-2 min-w-[200px] h-full">
      <Link
        className="flex gap-2 text-sm items-center rounded-sm hover:bg-secondary px-1 py-2"
        href="/dashboard"
      >
        {/* <RefreshCcw size={18} /> */}
        <HomeIcon size={18} />
        Home
      </Link>
      <Link
        className="flex gap-2 items-center text-sm rounded-sm hover:bg-secondary px-1 py-2"
        href="/dashboard/tools"
      >
        <PocketKnife size={18} />
        Packages & Tools
      </Link>
      <Link
        className="flex gap-2 items-center text-sm rounded-sm hover:bg-secondary px-1 py-2"
        href="/dashboard/settings"
      >
        <Settings size={20} />
        Settings
      </Link>
    </aside>
  );
};

export default Sidebar;
