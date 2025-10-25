import { Header } from "@/components/Header";
import { ChallengeList } from "@/components/ChallengeList";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Clock } from "lucide-react";

export default function Challenges() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Security Challenges</h1>
              <p className="text-muted-foreground text-lg">
                Master AppSec through hands-on practice with real-world vulnerabilities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-card/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">3/6</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Level 2</div>
                    <div className="text-sm text-muted-foreground">Current Level</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12h</div>
                    <div className="text-sm text-muted-foreground">Time Spent</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ChallengeList />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
