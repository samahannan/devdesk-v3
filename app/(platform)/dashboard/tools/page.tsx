"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { Authenticated } from "convex/react";

import { StateProvider } from "@/lib/context/StateProvider";

const DashboardPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <Authenticated>
      <StateProvider>
       Tools list
      </StateProvider>
    </Authenticated>
  );
};

export default DashboardPage;
