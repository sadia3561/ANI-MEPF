// src/app/helpdesk/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Helpdesk API working!" });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Received helpdesk data", data });
}
