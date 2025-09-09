// src/app/analytics/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Analytics GET route working" });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: "Analytics POST route working", data });
}
