import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Movie not found" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}