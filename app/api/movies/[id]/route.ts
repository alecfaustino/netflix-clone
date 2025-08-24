import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: {id: string}}) {
  const id = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
