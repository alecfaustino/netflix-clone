"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function GenresDropdown({ genres }: { genres: { id: number; name: string }[] }) {
  const [open, setOpen] = useState(false);

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
        className="w-48"
      >
        <ul>
          {genres.map((genre) => (
            <li key={genre.id} className="py-1 px-2 hover:bg-gray-100 cursor-pointer rounded">
              {genre.name}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
