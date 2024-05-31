import { Toaster } from "sonner";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/sidebar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="pt-14 flex h-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default PlatformLayout;
