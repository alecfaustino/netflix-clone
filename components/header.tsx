import { Button } from "@/components/ui/button";
import GenresDropdown from "./GenresDropdown";
import SearchBar from "./ui/searchbar";
import Link from "next/link";
import { ModeToggle } from "./darkmode/ModeToggle";

export default async function Header() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    next: { revalidate: 86400 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  const genres = await res.json();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 gap-2">
      <h1 className="sr-only md:not-sr-only md:block text-white font-bold md:text-4xl flex-shrink-0">
        FavFlix
      </h1>
      <div>
        <SearchBar />
      </div>
      <nav className="flex gap-1 md:gap-2 justify-end flex-shrink-0">
        <Button variant="link" asChild>
          <Link
            href="/movies"
            className="text-white font-bold text-sm md:text-2xl hover:underline px-1 md:px-3">
            Discover
          </Link>
        </Button>
        <GenresDropdown genres={genres.genres || []} />
        <ModeToggle />
      </nav>
    </header>
  );
}
