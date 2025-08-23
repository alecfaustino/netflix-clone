'use client';

import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <main>
      <Typography variant="h1" className='text-center'>Discover Movies</Typography>
      <Grid container spacing={2}>
        {movies.map((movie: any) => (
          <Grid
            size={{xs: 6, sm: 4, md: 3, lg: 2}}
            key={movie.id}
          >
            <Card>
              {movie.poster_path && (
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <CardContent>
                <Typography variant="subtitle1">{movie.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
