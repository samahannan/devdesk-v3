import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full bg-[#f8fafc]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default MarketingLayout;
