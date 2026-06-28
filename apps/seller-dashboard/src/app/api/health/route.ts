import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}
