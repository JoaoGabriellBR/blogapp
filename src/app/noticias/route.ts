import { NextResponse } from "next/server";

export async function GET() {
    const apiUrl = "https://api.nytimes.com/svc/archive/v1/2023/1.json?api-key=WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG"
    const res = await fetch(apiUrl)
    const data = await res.json();
    return NextResponse.json({ data })
}