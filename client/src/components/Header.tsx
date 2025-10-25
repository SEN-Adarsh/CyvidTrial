import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Shield className="h-6 w-6 text-primary" />
          <span>CyVidya</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 ml-8 text-sm">
          <a href="#challenges" className="text-foreground/60 hover:text-foreground transition-colors" data-testid="link-challenges">
            Challenges
          </a>
          <a href="#learn" className="text-foreground/60 hover:text-foreground transition-colors" data-testid="link-learn">
            Learn
          </a>
          <a href="#progress" className="text-foreground/60 hover:text-foreground transition-colors" data-testid="link-progress">
            Progress
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex" data-testid="button-login">
            Sign In
          </Button>
          <Button size="sm" data-testid="button-signup">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
