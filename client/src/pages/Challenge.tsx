import { Header } from "@/components/Header";
import { ChallengeWorkspace } from "@/components/ChallengeWorkspace";
import { Footer } from "@/components/Footer";
import { useLocation } from "wouter";

export default function Challenge() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-8">
          <ChallengeWorkspace
            challengeId="sql-injection-1"
            onBack={() => setLocation("/challenges")}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
