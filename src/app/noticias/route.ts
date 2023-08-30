import { NextRequest, NextResponse } from "next/server";
import { buildApiUrl } from "@/services/api";

export async function GET(request: NextRequest) {
  const category = request.headers.get("category");
  const apiUrl = buildApiUrl(category, 1);

  const res = await fetch(apiUrl);
  const data = await res.json();
  return NextResponse.json({ data });
}
