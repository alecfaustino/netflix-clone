import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('searchTerm');

    const res = await fetch(
    `
https://api.themoviedb.org/3/search/movie?query=${query}
`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}