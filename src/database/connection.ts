import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "../env.ts";
import { schema } from "./schema/index.ts";

export const client = postgres(env.DATABASE_URL);
export const database = drizzle(client, {
  schema,
  casing: "snake_case",
});
