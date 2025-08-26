export default function MoviesByGenrePage({ searchParams }: { searchParams: { genre: string } }) {
  return (
    <div>
      <h1>Movies by Genre: {searchParams.genre}</h1>
    </div>
  );
}