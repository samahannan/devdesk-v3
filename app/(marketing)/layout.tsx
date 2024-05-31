import { ConvexClientProvider } from "@/providers/convex-client-provider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexClientProvider>
      <div className="h-full bg-[#f8fafc]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ConvexClientProvider>
  );
};

export default MarketingLayout;
