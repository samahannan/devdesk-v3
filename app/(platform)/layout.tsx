import { Loading } from "@/components/auth/loading";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { AuthLoading, Authenticated } from "convex/react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ConvexClientProvider>{children}</ConvexClientProvider>;
};

export default PlatformLayout;
