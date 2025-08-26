import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
  return NextResponse.json({ message: `Searched for: ${query}` });
}