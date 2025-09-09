// src/app/billing/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Billing API working!" });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Received billing data", data });
}
