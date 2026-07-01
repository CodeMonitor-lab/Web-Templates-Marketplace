import { NextResponse } from "next/server";

interface Context {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Context
) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    id,
  });
}

export async function PUT(
  request: Request,
  { params }: Context
) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    success: true,
    id,
    data: body,
  });
}

export async function DELETE(
  request: Request,
  { params }: Context
) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    deleted: id,
  });
}