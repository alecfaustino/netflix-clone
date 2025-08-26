"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenresDropdown({ genres }: { genres: { id: number; name: string }[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onGenreSelect = (id: number, name: string) => {
    router.push(`/movies/genre?genre_id=${id}&genre_name=${name}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          variant="ghost"
        >
          Genres
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-auto max-w-screen-md"
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {genres.map((genre) => (
            <li key={genre.id} className="py-1 px-2 hover:bg-gray-100 cursor-pointer rounded" onClick={() => onGenreSelect(genre.id, genre.name)}>
              {genre.name}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
