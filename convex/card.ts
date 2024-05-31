import { StatusConvexType } from "@/lib/types";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    title: v.string(),
    client_name: v.string(),
    status: StatusConvexType,
    type: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const userId = identity.subject;
    const card = await ctx.db.insert("card", {
      title: args.title,
      description: "",
      due_date: "",
      link: "",
      user_id: userId,
      status: args.status,
      repo: "",
      type: args.type,
      client_name: args.client_name,
      notes: "",
      paid: false,
      inspiration: [],
      tech_stack: [],
    });
    return card;
  },
});

export const deleteCard = mutation({
  args: {
    id: v.id("card"),
  },
  handler: async (ctx, args) => {
    console.log("deleting card");
    const existingTask = await ctx.db.get(args.id);
    if (!existingTask) {
      throw Error("Not found.");
    }
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const userId = identity.subject;
    if (existingTask._id !== args.id) {
      throw new Error("Unauthorized");
    }
    const card = await ctx.db.delete(args.id);
    return card;
  },
});

export const getCards = query({
  args: {
    type: v.string(),
    status: StatusConvexType,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const userId = identity.subject;
    const cards = await ctx.db
      .query("card")
      .withIndex("by_user", (q) => q.eq("user_id", userId))
      .filter((q) => q.eq(q.field("type"), args.type))
      .filter((q) => q.eq(q.field("status"), args.status))
      .order("desc")
      .collect();
    return cards;
  },
});

export const getCardById = query({
  args: {
    id: v.id("card"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const userId = identity.subject;
    const cards = await ctx.db
      .query("card")
      .withIndex("by_user", (q) => q.eq("user_id", userId))
      .filter((q) => q.eq(q.field("_id"), args.id))
      .collect();
    return cards;
  },
});
