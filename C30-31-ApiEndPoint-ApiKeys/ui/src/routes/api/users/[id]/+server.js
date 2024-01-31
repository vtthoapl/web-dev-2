import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
  return json({ hello: "GETuserID", random: Math.random(), id: params.id });
}
export const POST = async ({ params }) => {
  return json({ hello: "POSTuserId", random: Math.random(), id: params.id });
}
export const DELETE = async ({ params }) => {
  return json({ hello: "DELETEuserId", random: Math.random(), id: params.id });
}