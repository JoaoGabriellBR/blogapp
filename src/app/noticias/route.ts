import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest) {
    
    const category = request.headers.get("category");
    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";
    
    const apiWithCategory = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=section_name:${category}&api-key=${apiKey}&page=1`;
    const apiWithoutCategory = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${apiKey}&page=1`;
    const apiUrl = category ? apiWithCategory : apiWithoutCategory

    const res = await fetch(apiUrl);
    const data = await res.json();
    return NextResponse.json({ data });
}