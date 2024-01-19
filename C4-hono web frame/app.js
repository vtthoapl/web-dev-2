/*import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
const app = new Hono()
/* app.get("/", (c) => c.text("The starting point."));
app.post("/", (c) => c.text("Postman pat."));
app.get("/it", (c) => c.text("I think so."));
app.on("cat","/secrets", (c) => c.text("Meow!."));
app.on("whats","/up", (c) => c.text("A movie!"));
app.get("*", (c) => c.text(`${c.req.method} ${c.req.path}`)); */
//app.get("/", (c) => c.text(`Name: ${c.req.query("name")}`));

/* const handleRequest = (c) => {
     //?here is the basic request parematter
     let name = "Jane"
    if(c.req.query("name")){name=c.req.query("name")} 
    //!shorter request parameter
    let name = c.req.query("name") ?? "fibi";  
  return c.text(`Hi ${name}`) */
/*   
//! Request Parametter
    const  operation = c.req.query("operation")
  const number1 = +c.req.query("number1") 
  const  number2 = +c.req.query("number2") 
  if (operation === "sum" && number1 && number2){
    return c.text(`${number1 + number2}`)
  }
  if (operation === "difference" && number1 && number2){
    return c.text(`${number1 - number2}`)
  }
  else{
    return c.text('Invalid parameters.')
  } 
}
  
export default app;
  */


//!4.6

/* import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();
const handleRequest = (c)=> {
const listId = c.req.param("listId")
const itemId = c.req.param("itemId")
return c.text(`List: ${listId},\nItem ${itemId}`)
}

app.get(
  "/lists/:listId/items/:itemId", handleRequest
  
);

Deno.serve(app.fetch); */
 //!4.6 exercices 

/* import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
const app = new Hono();

app.get("/", (c) => c.text("Listing restaurants."));
app.post("/", (c) => c.text("Adding a restaurant."));
app.get("/restaurants/:id", (c) => c.text(`Showing restaurant with id ${c.req.param("id")}.`));
app.post("/restaurants/:id/reviews", (c) => c.text(`Adding a review for restaurant with id ${c.req.param("id")}.`));
app.delete("/restaurants/:id/reviews/:rid", (c) => c.text(`Removing review ${c.req.param("rid")} from restaurant with id ${c.req.param("id")}.`))
export default app; */

//!4.7 exercises

import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

//GET requests to the path / respond to requests with the text "Hi there!".

//GET requests to the path /congrats respond to requests with the text "Congrats, {heroOfTheDay}!", where {heroOfTheDay} corresponds to the value of the request parameter "heroOfTheDay".
app.get("/", (c)=> c.text("Hi there!") )
app.get("/congrats", (c)=> c.text(`Congrats, ${c.req.query("heroOfTheDay")}!`);
app.get("/items/:id", (c) => c.text(`Retrieving item ${c.req.param("id")}.`));
app.post("items", (c)=>c.text("Adding an item."))

//GET requests to the path /items/:id respond to the requests with the text "Retrieving item {id}.", where {id} corresponds to the value of the path variable ":id".
//POST requests to the path /items respond to the requests with the text "Adding an item."
export default app;
