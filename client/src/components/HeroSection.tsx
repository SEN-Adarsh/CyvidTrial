import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <div className="w-full">
      <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-visible border-none rounded-none md:rounded-md">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col md:flex-row h-full min-h-[600px]">
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              Developer to AppSec Training
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              From Code Reader to Security Expert
            </h1>
            <p className="mt-6 text-neutral-300 max-w-lg text-lg">
              Learn AppSec the way developers actually work: by reading code, finding vulnerabilities, and fixing them. No black-box guessing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2" data-testid="button-start-learning">
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-neutral-600 hover:bg-neutral-800" data-testid="button-view-demo">
                View Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Find</div>
                  <div className="text-sm text-neutral-400">Read source code</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Exploit</div>
                  <div className="text-sm text-neutral-400">Prove the vulnerability</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-primary/10 p-2 border border-primary/20">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-200">Fix</div>
                  <div className="text-sm text-neutral-400">Patch the code</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-[400px] md:min-h-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
