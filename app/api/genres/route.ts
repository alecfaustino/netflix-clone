import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  const genres = await res.json();

  return NextResponse.json(genres);
}