// src/app/award/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Award API working!" });
}
