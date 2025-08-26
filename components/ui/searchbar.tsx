"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const searchMovie = (data: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(data.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/movies/search?searchTerm=${searchTerm}`);
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex items-center rounded-full px-3 py-1 shadow transition w-full max-w-xs sm:max-w-md border-2 border-gray-700">
        <Input
          onChange={searchMovie}
          value={searchTerm}
          placeholder="Search movies..."
          className="bg-transparent border-0 border-none ring-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none focus:border-0 focus:border-none focus:ring-transparent flex-1 min-w-0"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded-full font-semibold transition">
          Search
        </button>
      </form>
    </div>
  );
}
