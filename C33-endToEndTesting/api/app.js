import { Hono } from "./deps.js";
import { postgres } from "./deps.js";

const app = new Hono();
const sql = postgres();

// the function used to handle the request is now asynchronous as the database query is asynchronous.
app.get("/", async (c) => {
    const todos = await sql`SELECT * FROM todos`;//the database query is now made
    return c.json(todos); //it would return result in JSON fromat
  });
export default app;
