import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default async function Movies() {
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
  const movies = data.results;

  return (
    <main>
      <Typography variant="h4" className="text-center">
        Discover Movies
      </Typography>
      <Grid container spacing={2}>
        {movies.map(
          (movie: { id: number; title: string; poster_path: string }) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Card className="hover:scale-105 transition-transform">
                  {movie.poster_path && (
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                  <CardContent className="text-center h-24">
                    <Typography variant="subtitle1">{movie.title}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </main>
  );
}
