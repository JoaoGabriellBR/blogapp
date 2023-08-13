import { NextResponse } from "next/server";

export async function GET() {
    const apiUrl = "https://newsdata.io/api/1/news?apikey=pub_27205391203403f782608113506283d3c1d44&country=us,br,pt,es&language=pt"
    const res = await fetch(apiUrl)
    const data = await res.json();
    return NextResponse.json({ data })
}