// src/app/execution/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Execution API working!" });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Received execution data", data });
}
