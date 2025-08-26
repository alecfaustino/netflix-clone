import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton
} from '@clerk/nextjs'

import { Button } from "@/components/ui/button"
import GenresDropdown from "./GenresDropdown";
import SearchBar from "./ui/searchbar";



export default async function Header() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`);
  const genres = await res.json();

  return (
    <AppBar position="sticky" className="bg-[#141414] shadow-lg">
      <Toolbar className="flex justify-between px-8 min-h-[64px]">
        <Typography variant="h5" className="text-white font-bold tracking-wide">
          FavFlix
        </Typography>
        <SearchBar />
       <nav className="flex gap-2 items-center">
         <GenresDropdown genres={genres.genres || []} />
         <Button variant="link">Temp</Button>
         <Button variant="link">Temp</Button>
         <Button variant="link">Temp</Button>
       </nav>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton forceRedirectUrl="/movies">
              <Button variant={"secondary"}>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton forceRedirectUrl="/movies">
              <Button variant={"secondary"}>
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <SignOutButton redirectUrl="/">
              <Button variant={"secondary"}>
                Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
        </div>
      </Toolbar>
    </AppBar>
  );
}