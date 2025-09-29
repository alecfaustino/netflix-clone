import Link from "next/link";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default async function MovieSearchedPage({
  searchParams,
}: {
  searchParams: { searchTerm: string | undefined };
}) {
  const params = await searchParams;

  const searchTerm = params.searchTerm;

  const res = await fetch(
    `
https://api.themoviedb.org/3/search/movie?query=${searchTerm}
`,
    {
      next: { revalidate: 86400 },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  const movies = data.results;

  if (movies.length === 0) {
    return <h4>No results found for: {searchParams.searchTerm}</h4>;
  }

  return (
    <div className="mb-16">
      <h4 className="text-center text-4xl font-semibold p-4">
        Results For: {searchTerm}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-0 pt-0">
        {movies.map(
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
  );
}
