import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/idComponents/StarRating";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, {
    next: { revalidate: 86400 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  const data = await res.json();
  const movie = data;


  if (!movie) {
    return <div>Movie not found</div>;
  }

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/similar`,
    {
      next: { revalidate: 86400 },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const similarMovies = await result.json();

  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="mb-4">
        <Link
          href="/movies"
          className="inline-flex items-center hover:underline font-medium">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See all movies
        </Link>
      </div>
      <Card className="flex flex-col p-4 md:flex-row bg-[#181818] rounded-lg shadow-lg overflow-hidden">
        <CardContent className="flex-shrink-1 flex justify-center items-center p-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={250}
            height={375}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-center p-6 text-white flex-1">
            <h1 className="text-3xl font-bold mb-2">{movie?.title}</h1>
            <p className="text-base text-gray-200 text-wrap mb-4 italic">
              {movie?.tagline}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-medium">Rating:</span>
              <div>
                <Rating rating={movie?.vote_average / 2} />
              </div>
              <span className="text-sm text-gray-300">
                {(movie?.vote_average / 2).toFixed(1)} / 5 ({movie?.vote_count}{" "}
                votes)
              </span>
            </div>

            <h2 className="text-xl font-semibold my-2">Overview</h2>
            <p className="text-gray-200 text-wrap break-words leading-relaxed max-w-prose my-2">
              {movie?.overview}
            </p>
            <h2 className="text-xl font-semibold mb-1">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre: { id: number; name: string }) => (
                <Badge key={genre.id} variant="secondary">
                  {genre.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
        <div className="flex overflow-x-auto gap-4 pb-2 md:grid md:grid-cols-5 md:gap-6 md:overflow-x-visible">
          {similarMovies.results.map(
            (movie: { id: number; title: string; poster_path: string }) => (
              <div className="col-span-1" key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <Card className="hover:scale-105 transition-transform ">
                    {movie.poster_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="w-full h-auto rounded p-2"
                      />
                    )}
                    <CardFooter className="text-center h-16 justify-center">
                      <h1 className="text-lg font-semibold text-center">
                        {movie.title}
                      </h1>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
