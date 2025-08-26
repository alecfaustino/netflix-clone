import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default async function MovieSearchedPage({ searchParams }: { searchParams: { searchTerm: string | undefined } }) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?`);
  // const data = await res.json();

  const res = await fetch(
    `
https://api.themoviedb.org/3/search/movie?query=${searchParams.searchTerm}
`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );

  const data = await res.json();
  const movies = data.results;

  if (movies.length === 0) {
    return <Typography variant="h6" className='text-center align-middle'>No results found for: {searchParams.searchTerm}</Typography>;
  }

  return (
    <div>
      <h1>Search Results for: {searchParams.searchTerm}</h1>
      <Grid container spacing={2}>
        {movies.map((movie: any) => (
          <Grid
            size={{xs: 6, sm: 4, md: 3, lg: 2}}
            key={movie.id}
          >
          <Link href={`/movies/${movie.id}`}>
            <Card className='hover:scale-105 transition-transform'>
              {/* TODO HANDLE EMPTY IMAGES */}
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
      ))}
    </Grid>
    </div>
  );
}
