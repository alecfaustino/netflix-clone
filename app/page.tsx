import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Typography variant="h1" component="h1">
        Welcome to FavFlix
      </Typography>
      <Button>
        <Link href="/movies">Get Started</Link>
      </Button>
    </div>
  );
}
