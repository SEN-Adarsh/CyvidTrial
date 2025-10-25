import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, TrendingUp, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    { icon: Target, label: "Active Challenges", value: "50+" },
    { icon: Users, label: "Developers Trained", value: "10K+" },
    { icon: Award, label: "Vulnerabilities Fixed", value: "100K+" },
    { icon: TrendingUp, label: "Success Rate", value: "94%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-card/50">
            <CardContent className="p-6 text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto border border-primary/20">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
