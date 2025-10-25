import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle2, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ChallengeStatus = "locked" | "available" | "in-progress" | "completed";
type Difficulty = "beginner" | "intermediate" | "advanced";

interface ChallengeCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  language: string;
  vulnerabilityType: string;
  status: ChallengeStatus;
  progress?: number;
  onClick?: () => void;
}

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
};

const statusIcons = {
  locked: Lock,
  available: Code2,
  "in-progress": Code2,
  completed: CheckCircle2,
};

export function ChallengeCard({
  id,
  title,
  description,
  difficulty,
  language,
  vulnerabilityType,
  status,
  progress = 0,
  onClick,
}: ChallengeCardProps) {
  const Icon = statusIcons[status];
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  return (
    <Card
      className={cn(
        "hover-elevate active-elevate-2 transition-all cursor-pointer",
        isLocked && "opacity-50 cursor-not-allowed"
      )}
      onClick={isLocked ? undefined : onClick}
      data-testid={`card-challenge-${id}`}
    >
      <CardHeader className="gap-2 space-y-0 pb-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
          <Icon className={cn(
            "h-5 w-5 flex-shrink-0",
            isCompleted && "text-green-500",
            isLocked && "text-muted-foreground"
          )} />
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
          <Badge variant="outline">{language}</Badge>
          <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
            {vulnerabilityType}
          </Badge>
        </div>

        {status === "in-progress" && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="gap-2 flex-wrap">
        <Button 
          size="sm" 
          variant={isCompleted ? "outline" : "default"}
          className="w-full"
          disabled={isLocked}
          data-testid={`button-start-${id}`}
        >
          {isLocked && "Locked"}
          {status === "available" && "Start Challenge"}
          {status === "in-progress" && "Continue"}
          {isCompleted && "Review Solution"}
        </Button>
      </CardFooter>
    </Card>
  );
}
