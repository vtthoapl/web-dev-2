/* 
!JWT- JSON web token:
- is a way to transmit info between 2 parties, often used in authentication & authorization.
- A JWT consists 3 parts: a header, a payload & a signature.
- The headers & payload are JSON objects that are base64 encodes.
- A JWT contains claims, which are statements about entity(tyåically, the user)- the claim are included in the payload.
-The signature is created by hashing the header & payload with a secret key, which is only known to the server. Using secret key, the server can verify that the token is valid by hashing the header & payload with the secret key & comparing the result with signature.
*/
//An implementation with a JWT middleware and signing of the token payload would look as follows.
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import { cors, jwt } from "https://deno.land/x/hono@v3.7.4/middleware.ts";
import { sign } from "https://deno.land/x/hono@v3.7.4/utils/jwt/jwt.ts";

const jwtSecretKey = "secret";
const app = new Hono()
app.use("*", cors());
app.use("/api/secret/*", jwt({secret: jwtSecretKey}))

app.get("/api/secret/me", async (c) => {
    const payload = c.get("jwtPayload");
    console.log("User making request:")
    console.log(payload)

    const secret = {
        message: "Found it!"
    }
    return c.json(secret)
})

app.post("/api/auth", async (c) => {
    const body = await c.req.json()

    if (body.password !== "Alohomora"){
        return c.json({error: "Invalid pass"}, 400)
    }

    const user = {
        id: 1,
        username: "Harry Portter",
    }

    const signedToken = await sign(user, jwtSecretKey)
    c.header("Access-Control-Expose-Headers", "*");
    c.header("Authorization", `Bearer ${signedToken}`)
    return c.json(user)
})
Deno.serve(app.fetch)