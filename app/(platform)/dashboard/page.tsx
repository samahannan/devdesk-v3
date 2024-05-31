"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import CardGrid from "./_components/CardGrid";
import { useState } from "react";
import { Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Authenticated } from "convex/react";
import TypeBlocks from "./_components/TypeBlocks";

const DashboardPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  const [showQueue, setShowQueue] = useState(false);

  return (
    <Authenticated>
      <div className="w-full p-4">
        {/* <div>User: {user?.fullName}</div>
      <div>id: {userId}</div> */}
        {/* <DashboardBar /> */}
        {/* <h2 className="text-3xl mb-4">Active Tasks</h2> */}
        <Tabs defaultValue="active">
          <TabsList className="h-[auto] w-full justify-start mb-4 p-0 bg-transparent">
            <TabsTrigger
              className="text-3xl rounded-none shadow-none p-0 mr-1 opacity-40 data-[state=active]:shadow-none data-[state=active]:opacity-100"
              value="active"
            >
              Active Tasks
            </TabsTrigger>{" "}
            <Minus color="#3e9392" size={26} />
            <TabsTrigger
              className="text-3xl rounded-none shadow-none p-0 mr-1 opacity-40 data-[state=active]:shadow-none data-[state=active]:opacity-100"
              value="paused"
            >
              Coming Up
            </TabsTrigger>{" "}
            <Minus color="#3e9392" size={26} />
            <TabsTrigger
              className="text-3xl rounded-none shadow-none p-0 opacity-40  data-[state=active]:shadow-none data-[state=active]:opacity-100"
              value="completed"
            >
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <>
              <TypeBlocks />
              <CardGrid status="active" />
            </>
          </TabsContent>
          <TabsContent value="paused">
            <>
              <TypeBlocks />
              <CardGrid status="paused" />
            </>
          </TabsContent>
          <TabsContent value="completed">
            <>
              <TypeBlocks />
              <CardGrid status="completed" />
            </>
          </TabsContent>
        </Tabs>
        {/* <h2 className="text-3xl mb-4">Active Tasks</h2> */}
      </div>
    </Authenticated>
  );
};

export default DashboardPage;
