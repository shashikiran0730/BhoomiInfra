import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json(
    {
      status: "received",
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        projectType: body.projectType,
      },
    },
    { status: 200 }
  );
}
