import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Target, Lightbulb } from "lucide-react";

export function ProblemSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">The Problem with Current Platforms</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Skilled developers are being forced to start from scratch, ignoring their most valuable skill: reading code.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-card/50">
          <CardHeader className="gap-2 space-y-0">
            <div className="rounded-md bg-destructive/10 p-2 w-fit border border-destructive/20">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <CardTitle className="text-lg">Black-Box Guessing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Platforms like Hack The Box hide the source code, forcing developers to guess blindly instead of using their code analysis skills.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardHeader className="gap-2 space-y-0">
            <div className="rounded-md bg-destructive/10 p-2 w-fit border border-destructive/20">
              <Target className="h-5 w-5 text-destructive" />
            </div>
            <CardTitle className="text-lg">Wrong Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              They teach attacking skills, but companies need AppSec engineers who can find and fix vulnerabilities in source code.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardHeader className="gap-2 space-y-0">
            <div className="rounded-md bg-destructive/10 p-2 w-fit border border-destructive/20">
              <Lightbulb className="h-5 w-5 text-destructive" />
            </div>
            <CardTitle className="text-lg">Skills Gap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This creates a huge gap between what developers learn and what the industry actually needs for security roles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
