import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const res = await fetch(
    `
https://api.themoviedb.org/3/discover/movie`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}