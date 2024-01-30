// place files you want to import through the `$lib` alias in this folder.
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

const fetchNamedays = async (day, month) => {
  const data = {
    "day": day,
    "month": month,
    "country": "fi",
  };

  const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });


  const jsonData = await response.json();
  return jsonData.nameday.fi;
};

app.get("/", async (c) => {
  const namedays = await fetchNamedays(1, 4);
  return c.json({ namedays });
});

Deno.serve(app.fetch);