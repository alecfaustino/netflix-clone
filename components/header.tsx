import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <AppBar position="sticky" className="bg-[#141414] shadow-lg">
      <Toolbar className="flex justify-between px-8 min-h-[64px]">
        <Typography variant="h5" className="text-white font-bold tracking-wide">
          FavFlix
        </Typography>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton afterSignInUrl="/movies">
              <button className="text-white font-medium hover:text-[#e50914] transition-colors">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <Button variant={"secondary"}>
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Toolbar>
    </AppBar>
  );
}