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

export default function Header() {
  return (
    <AppBar position="sticky" className="bg-[#141414] shadow-lg">
      <Toolbar className="flex justify-between px-8 min-h-[64px]">
        <Typography variant="h5" className="text-white font-bold tracking-wide">
          FavFlix
        </Typography>
       <nav>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
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