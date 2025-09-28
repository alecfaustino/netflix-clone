import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Welcome to FavFlix</h1>
      <Button>
        <Link href="/movies">Get Started</Link>
      </Button>
    </div>
  );
}
