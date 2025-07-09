import { schema } from "../database/schema/index.ts";
import { database } from "../database/connection.ts";

export async function getRooms() {
  const result = await database
    .select({
      id: schema.rooms.id,
      name: schema.rooms.name,
      createdAt: schema.rooms.createdAt,
    })
    .from(schema.rooms)
    .groupBy(schema.rooms.id)
    .orderBy(schema.rooms.createdAt);

  return result;
}
