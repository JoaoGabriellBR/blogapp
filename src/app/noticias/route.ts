import { NextResponse } from "next/server";

export async function GET() {

    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";

    const articles = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&api-key=${apiKey}&page=1`;

    const apiUrl = `https://api.nytimes.com/svc/archive/v1/2023/1.json?api-key=${apiKey}`;

    const res = await fetch(articles)
    const data = await res.json();
    return NextResponse.json({ data })
}