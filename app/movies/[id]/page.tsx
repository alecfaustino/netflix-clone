import Container from "@mui/material/Container";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${params.id}`);
  const movie = await res.json();

  console.log(movie);
  return (
    <Container maxWidth="md" className="my-8">
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
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-medium">Rating:</span>
            <Rating
              name="movie-rating"
              value={movie.vote_average / 2}
              precision={0.1}
              readOnly
              size="large"
              emptyIcon={<StarBorderIcon style={{color: '#888'}}fontSize="inherit" />}
            />
            <span className="text-sm text-gray-300">{(movie.vote_average / 2).toFixed(1)} / 5</span>
          </div>
          <h2 className="text-xl font-semibold mb-1">Overview</h2>
          <p className="text-base text-gray-200">{movie.overview}</p>
        </div>
      </div>
    </Container>
  );
}