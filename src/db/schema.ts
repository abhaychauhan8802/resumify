import { pgTable, text, timestamp, uuid, varchar, } from "drizzle-orm/pg-core";

export const Resume = pgTable("resumes", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull(),
    title: varchar("title", { length: 255 }),
    description: varchar("description", { length: 255 }),
    photoUrl: text("photo_url"),
    colorHex: text("color_hex").default("#000000"),
    borderStyle: text("border_style").default("squircle"),
    summary: varchar("summary", { length: 255 }),
    firstName: varchar("first_name", { length: 255 }),
    lastName: varchar("last_name", { length: 255 }),
    jobTitle: varchar("job_title", { length: 255 }),
    city: varchar("city", { length: 255 }),
    phone: varchar("phone", { length: 255 }),
    email: varchar("email", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});
