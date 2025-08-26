"use client";
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
   
      // fetch from the server component movies/search
      const res = await fetch(`/api/search?searchTerm=${searchTerm}`);
      // const data = await res.json();
    };

    fetchData();
  }, [searchTerm]);


  const searchMovie = (data: any) => {
      setSearchTerm(data.target.value);

  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/movies/search?searchTerm=${searchTerm}`);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <Input onChange={searchMovie}/>
      <button type="submit" >Search</button>
    </form>
  )
}
