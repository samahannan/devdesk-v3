"use client";
import { useAuth, useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <div>User: {user?.fullName}</div>
      <div>id: {userId}</div>
    </div>
  );
};

export default DashboardPage;
