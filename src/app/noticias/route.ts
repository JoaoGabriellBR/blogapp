import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const category = request.headers.get("category");

    const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";

    const apiWithCategory = `${baseUrl}&fq=section_name:${category}&api-key=${apiKey}&page=1`;
    const apiWithoutCategory = `${baseUrl}&api-key=${apiKey}&page=1`;
    const apiUrl = category ? apiWithCategory : apiWithoutCategory;

    const res = await fetch(apiUrl);
    const data = await res.json();
    return NextResponse.json({ data });
}