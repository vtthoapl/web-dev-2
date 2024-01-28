import { Hono } from "./deps.js";
import { sql } from "./database.js";

const app = new Hono();

app.get("/addresses", async (c) => {
  return c.json(await sql`SELECT * FROM addresses`);
});

app.post("/addresses", async (c) => {
  const body = await c.req.json();
  await sql`INSERT INTO addresses (name, address) VALUES (${body.name}, ${body.address})`;
  return c.json({ status: "ok" });
});

Deno.serve(app.fetch);