import { NextResponse } from 'next/server';
import { version } from 'os';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
}