import Container from "@mui/material/Container";
import Image from "next/image";
export default async function MoviePage(params: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${params.params.id}`);
  const movie = await res.json();
  console.log('movie', movie);

  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={250}
        height={375}
      />
    </Container>
  );
}
