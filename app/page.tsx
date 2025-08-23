import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold">Welcome to FavFlix</h1>
      <Button color="primary">
        Get Started
      </Button>
    </main>
  );
}
