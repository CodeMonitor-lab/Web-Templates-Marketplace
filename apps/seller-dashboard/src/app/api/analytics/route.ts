import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      revenue: 0,
      orders: 0,
      customers: 0,
      earnings: 0,
    },
  });
}