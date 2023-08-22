import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest) {
    
    const category = request.nextUrl.searchParams.get("category");
    const dataCategory = category !== null ? `&fq=news_desk:${category}` : '';
    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";
    const apiURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${dataCategory}&api-key=${apiKey}&page=1`;
    // const apiUrl = `https://api.nytimes.com/svc/archive/v1/2023/1.json?api-key=${apiKey}`;

    const res = await fetch(apiURL)
    const data = await res.json();
    return NextResponse.json({ data })
}