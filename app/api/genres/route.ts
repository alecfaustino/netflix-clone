import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  const genres = await res.json();

  return NextResponse.json(genres);
}