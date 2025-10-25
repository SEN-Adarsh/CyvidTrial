import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card/30 backdrop-blur">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span>CyVidya</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Transform developers into AppSec experts through hands-on code analysis and vulnerability remediation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#challenges" className="hover:text-foreground transition-colors">Challenges</a></li>
              <li><a href="#learn" className="hover:text-foreground transition-colors">Learning Path</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CyVidya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
