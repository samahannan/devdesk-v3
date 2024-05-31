import { v } from "convex/values";

export interface BlockType {
  title: string;
  color: string;
  accent?: string;
  id: string;
  text?: string;
}

export type Status = "active" | "completed" | "paused";

export const StatusConvexType = v.union(
  v.literal("active"),
  v.literal("paused"),
  v.literal("completed")
);
