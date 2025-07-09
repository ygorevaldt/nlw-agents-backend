import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getRooms } from "../../models/rooms.ts";

export const getRoomsRoute: FastifyPluginAsyncZod = async function (app) {
  app.get("/rooms", async () => {
    return await getRooms();
  });
};
