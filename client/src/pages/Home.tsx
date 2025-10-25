import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ChallengeList } from "@/components/ChallengeList";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-8">
          <HeroSection />
        </section>

        <section className="container px-4 md:px-6 py-16">
          <ProblemSection />
        </section>

        <section className="container px-4 md:px-6 py-16 bg-card/20">
          <MethodologySection />
        </section>

        <section className="container px-4 md:px-6 py-16">
          <StatsSection />
        </section>

        <section id="challenges" className="container px-4 md:px-6 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Challenges</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start with these beginner-friendly challenges and work your way up to advanced exploits
            </p>
          </div>
          <ChallengeList />
        </section>

        <section className="container px-4 md:px-6 py-16 bg-card/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Become a Security Expert?</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of developers who are transforming their coding skills into cybersecurity expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="gap-2" data-testid="button-get-started-cta">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-view-pricing">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
