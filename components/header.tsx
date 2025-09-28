import { Button } from "@/components/ui/button";
import GenresDropdown from "./GenresDropdown";
import SearchBar from "./ui/searchbar";
import Link from "next/link";

export default async function Header() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    next: { revalidate: 86400 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  const genres = await res.json();

  return (
    <header className="mb-4 flex items-center justify-between p-4 bg-gray-600">
      <h1 className="text-white font-bold text-lg md:text-4xl">FavFlix</h1>
      <SearchBar />
      <nav className="flex gap-2 items-center">
        <Button variant="link" asChild>
          <Link
            href="/movies"
            className="text-white font-bold text-2xl hover:underline">
            Discover
          </Link>
        </Button>
        <GenresDropdown genres={genres.genres || []} />
      </nav>
    </header>
  );
}
