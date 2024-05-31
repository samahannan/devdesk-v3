import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";
import { StatusConvexType } from "@/lib/types";

export const cardFields = {
  title: v.string(),
  description: v.string(),
  client_name: v.string(),
  notes: v.string(),
  type: v.string(),
  due_date: v.string(),
  repo: v.string(),
  link: v.string(),
  user_id: v.string(),
  status: StatusConvexType,
  paid: v.boolean(),
  inspiration: v.array(v.string()),
  tech_stack: v.array(v.string()),
};
export default defineSchema({
  card: defineTable(cardFields)
    .index("by_user", ["user_id"])
    .index("by_type", ["type"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["status"],
    }),
});
