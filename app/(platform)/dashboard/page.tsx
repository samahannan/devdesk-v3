"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { Authenticated } from "convex/react";

import { StateProvider } from "@/lib/context/StateProvider";
import DashboardTable from "./_components/DashboardTable";
import DashboardBar from "./_components/DashboardBar";

const DashboardPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <Authenticated>
      <StateProvider>
        <div className="w-full p-4 pt-10">
        {/* <DashboardBar /> */}
          <DashboardTable />
          {/* <div>User: {user?.fullName}</div>
      <div>id: {userId}</div> */}
          {/* <h2 className="text-3xl mb-4">Active Tasks</h2> */}

          {/* <h2 className="text-3xl mb-4">Active Tasks</h2> */}
        </div>
      </StateProvider>
    </Authenticated>
  );
};

export default DashboardPage;
