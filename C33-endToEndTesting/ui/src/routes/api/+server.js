import { json } from '@sveltejs/kit';

export const GET = async (request, params) => {
  console.log("Request: ", request)
  return json({ hello: "GETTTTT", random: Math.random() });
};

export const POST = async () => {
    return json({ hello: "POSTworld", random: Math.random() });
  };
export const PUT = async () => {
    return json({ hello: "PUTworld", random: Math.random() });
  };