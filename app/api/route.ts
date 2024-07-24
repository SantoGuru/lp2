// app/api/route.ts
import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

/**
 * Handles POST requests to the API route.
 *
 * Retrieves a document from the "Teste1" collection in the "Teste" database
 * based on the JSON data sent in the request body.
 *
 * @param {Request} req - The incoming request object
 * @returns {NextResponse} - A JSON response containing the retrieved document
 * @example
 * ```bash
 * curl -X POST \
 *   http://localhost:3000/api/route \
 *   -H 'Content-Type: application/json' \
 *   -d '{"_id": "some-id"}'
 * ```
 */
export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db("Teste");
  console.log(req);
  const data = await req.json();
  const result = await db.collection("Teste1").findOne(data);
  return NextResponse.json(result);
}
