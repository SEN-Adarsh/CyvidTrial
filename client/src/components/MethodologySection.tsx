import { Card } from "@/components/ui/card";
import { Code, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export function MethodologySection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Unique Methodology</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A simple three-step loop that leverages your existing development skills
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="relative">
          <Card className="p-6 bg-card hover-elevate transition-all h-full">
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 border border-primary/20">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Find</h3>
            <p className="text-muted-foreground">
              Read the source code to identify security flaws. We give you full access to the application code, just like in a real code review.
            </p>
          </Card>
        </div>

        <div className="relative">
          <Card className="p-6 bg-card hover-elevate transition-all h-full">
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 border border-primary/20">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. Exploit</h3>
            <p className="text-muted-foreground">
              Use our integrated terminal to prove the vulnerability is real. Execute commands and see the actual impact of the security flaw.
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card hover-elevate transition-all h-full">
            <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 border border-primary/20">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Fix</h3>
            <p className="text-muted-foreground">
              Patch the code in our editor. The lab is only complete when your fix successfully stops the exploit. Learn by doing, not just reading.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
