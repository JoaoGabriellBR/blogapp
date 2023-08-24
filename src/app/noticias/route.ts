import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest) {
    
    const category = request.headers.get("category");
    // const newsCategory = category !== null ? `&fq=section_name:${category}` : '';
    const newsCategory = !category ? '' : `&fq=section_name:${category}`
    
    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";
    const apiURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${newsCategory}&api-key=${apiKey}&page=1`;

    const res = await fetch(apiURL);
    const data = await res.json();
    return NextResponse.json({ data });
}