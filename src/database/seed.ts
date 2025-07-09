import { reset, seed } from "drizzle-seed";
import { client, database } from "./connection.ts";
import { schema } from "./schema/index.ts";

await reset(database, schema);

await seed(database, schema).refine((funcs) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: funcs.companyName(),
        description: funcs.loremIpsum(),
      },
    },
  };
});

await client.end();

console.log("Database seeded");
