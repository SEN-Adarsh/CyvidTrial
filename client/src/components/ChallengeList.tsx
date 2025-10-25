import { ChallengeCard } from "@/components/ChallengeCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

//todo: remove mock functionality
const mockChallenges = [
  {
    id: "sql-injection-1",
    title: "SQL Injection in Login Form",
    description: "Find and fix a classic SQL injection vulnerability in the authentication system",
    difficulty: "beginner" as const,
    language: "Python",
    vulnerabilityType: "SQL Injection",
    status: "available" as const,
  },
  {
    id: "xss-1",
    title: "Stored XSS in Comments",
    description: "Discover a stored cross-site scripting vulnerability in the comment system",
    difficulty: "beginner" as const,
    language: "JavaScript",
    vulnerabilityType: "XSS",
    status: "in-progress" as const,
    progress: 60,
  },
  {
    id: "auth-bypass-1",
    title: "Authentication Bypass",
    description: "Exploit weak authentication logic to gain unauthorized access",
    difficulty: "intermediate" as const,
    language: "PHP",
    vulnerabilityType: "Auth Bypass",
    status: "completed" as const,
  },
  {
    id: "idor-1",
    title: "Insecure Direct Object Reference",
    description: "Access other users' data through predictable resource identifiers",
    difficulty: "intermediate" as const,
    language: "Node.js",
    vulnerabilityType: "IDOR",
    status: "available" as const,
  },
  {
    id: "deserialization-1",
    title: "Unsafe Deserialization",
    description: "Exploit unsafe deserialization to achieve remote code execution",
    difficulty: "advanced" as const,
    language: "Java",
    vulnerabilityType: "Deserialization",
    status: "locked" as const,
  },
  {
    id: "race-condition-1",
    title: "Race Condition in Payment",
    description: "Exploit a race condition to duplicate payment credits",
    difficulty: "advanced" as const,
    language: "Go",
    vulnerabilityType: "Race Condition",
    status: "locked" as const,
  },
];

export function ChallengeList() {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredChallenges = mockChallenges.filter(challenge => {
    if (filter === "all") return true;
    return challenge.difficulty === filter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search challenges..."
            className="pl-10"
            data-testid="input-search-challenges"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            data-testid="button-filter-all"
          >
            All
          </Button>
          <Button
            variant={filter === "beginner" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("beginner")}
            data-testid="button-filter-beginner"
          >
            Beginner
          </Button>
          <Button
            variant={filter === "intermediate" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("intermediate")}
            data-testid="button-filter-intermediate"
          >
            Intermediate
          </Button>
          <Button
            variant={filter === "advanced" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("advanced")}
            data-testid="button-filter-advanced"
          >
            Advanced
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            {...challenge}
            onClick={() => console.log('Opening challenge:', challenge.id)}
          />
        ))}
      </div>
    </div>
  );
}
