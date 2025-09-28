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
    <div className="flex justify-center w-full">
      <form
        onSubmit={onSubmit}
        className="flex items-center rounded-full px-3 py-1 shadow transition max-w-xs sm:max-w-md border-2 border-gray-700">
        <Input
          onChange={searchMovie}
          value={searchTerm}
          placeholder="Search"
          className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-gray-500"
        />
      </form>
    </div>
  );
}
