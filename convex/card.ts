import { StatusConvexType } from "@/lib/types";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { cardFields } from "./schema";
import { Doc } from "./_generated/dataModel";
import { vUpdateCardInfo } from "./validators";

export const create = mutation({
  args: {
    title: v.string(),
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
      client_name: "",
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
    if (existingTask.user_id !== userId) {
      throw new Error("Unauthorized");
    }
    const card = await ctx.db.delete(args.id);
    return card;
  },
});

export const editCard = mutation({
  args: {
    id: v.id("card"),
    data: vUpdateCardInfo,
  },
  handler: async (ctx, args) => {
    const existingTask = await ctx.db.get(args.id);
    if (!existingTask) {
      throw Error("Not found.");
    }
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const userId = identity.subject;
    if (existingTask.user_id !== userId) {
      throw new Error("Unauthorized");
    }

    const updatedInfo = { ...args.data } as Partial<Doc<"card">>;
    const card = await ctx.db.patch(args.id, {
      ...updatedInfo,
    });
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
