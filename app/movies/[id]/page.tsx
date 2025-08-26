import Container from "@mui/material/Container";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Badge } from "@/components/ui/badge"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link"; 

export default async function MoviePage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${params.id}`);
  const movie = await res.json();

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${params.id}/similar`);
  const similarMovies = await result.json();
  console.log(similarMovies.results);

  return (
    <Container maxWidth="md" className="my-8">
      <div className="mb-4">
        <Link href="/movies" className="inline-flex items-center hover:underline font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          See all movies
        </Link>
      </div>
      <div className="flex flex-col md:flex-row bg-[#181818] rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0 flex justify-center items-center p-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={250}
            height={375}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-white flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie?.title}</h1>
          <p className="text-base text-gray-200">{movie?.tagline}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-medium">Rating:</span>
            <Rating
              name="movie-rating"
              value={movie?.vote_average / 2}
              precision={0.1}
              readOnly
              size="large"
              emptyIcon={<StarBorderIcon style={{color: '#888'}}fontSize="inherit" />}
            />
            <span className="text-sm text-gray-300">{(movie?.vote_average / 2).toFixed(1)} / 5 ({movie?.vote_count} votes)</span>
          </div>
          <h2 className="text-xl font-semibold mb-1">Overview</h2>
          <p className="text-base text-gray-200">{movie?.overview}</p>
          <h2 className="text-xl font-semibold mb-1">Genres</h2>
          <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre: { id: number; name: string }) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
          </div>
        </div>
      </div>
     <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
  <div className="flex overflow-x-auto gap-4 pb-2 md:grid md:grid-cols-5 md:gap-6 md:overflow-x-visible">
    {similarMovies.results.map((movie: { id: number; title: string; poster_path: string }) => (
      <Link href={`/movies/${movie?.id}`} key={movie?.id} className="min-w-[160px] max-w-[180px] flex-shrink-0">
        <Card className="bg-[#232323] hover:scale-105 hover:shadow-xl transition-transform duration-200">
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={movie?.title}
            className="rounded-t"
            style={{ height: 240, objectFit: "cover" }}
          />
          <CardContent className="p-2">
            <Typography variant="subtitle2" className="truncate">
              {movie?.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
</div>
    </Container>
  );
}