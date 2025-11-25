import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    timestamp: v.number(),
  }),
  
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    url: v.string(),
    tags: v.array(v.string()),
    featured: v.boolean(),
    award: v.optional(v.string()),
  }),
  
  skills: defineTable({
    category: v.string(),
    name: v.string(),
    icon: v.string(),
  }),
  
  achievements: defineTable({
    title: v.string(),
    description: v.string(),
    icon: v.string(),
    featured: v.boolean(),
    date: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
