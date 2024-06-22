import { StatusConvexType } from "@/lib/types";
import { v } from "convex/values";

export const vUpdateCardInfo = v.object({
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  client_name: v.optional(v.string()),
  notes: v.optional(v.string()),
  type: v.optional(v.string()),
  due_date: v.optional(v.string()),
  repo: v.optional(v.string()),
  link: v.optional(v.string()),
  status: v.optional(StatusConvexType),
  paid: v.optional(v.boolean()),
  inspiration: v.optional(v.array(v.string())),
  tech_stack: v.optional(v.array(v.string())),
});
