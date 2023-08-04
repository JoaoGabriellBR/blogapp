import { NextResponse } from "next/server";

export async function GET() {
    const apiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    const res = await fetch(apiUrl)
    const data = await res.json();
    return NextResponse.json({ data })
}