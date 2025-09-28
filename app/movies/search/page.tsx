import Link from "next/link";
import next from "next";

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
    return (
      // TODO FIX TYPOGRAPHY
      <h4>No results found for: {searchParams.searchTerm}</h4>
    );
  }

  return (
    <></>
    // <main>

    //   {/* TODO MATERIAL UI IMPORT REMOVED - NEEDS FIX */}
    //   <h4 className="text-center">Search Results for: {searchTerm}</h4>
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    //     {movies.map(
    //       (movie: { id: number; title: string; poster_path: string }) => (
    //         <div className="col-span-1" key={movie.id}>
    //           <Link href={`/movies/${movie.id}`}>
    //             <Card className="hover:scale-105 transition-transform">
    //               {/* TODO HANDLE EMPTY IMAGES */}
    //               {movie.poster_path && (
    //                 <CardMedia
    //                   component="img"
    //                   image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //                   alt={movie.title}
    //                 />
    //               )}
    //               <CardContent className="text-center h-24">
    //                 <Typography variant="subtitle1">{movie.title}</Typography>
    //               </CardContent>
    //             </Card>
    //           </Link>
    //         </div>
    //       )
    //     )}
    //   </div>
    // </main>
  );
}
