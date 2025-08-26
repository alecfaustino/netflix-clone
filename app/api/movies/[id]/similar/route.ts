import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });   
  const data = await res.json();

  return NextResponse.json(data);
}
