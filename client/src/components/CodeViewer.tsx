import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeViewerProps {
  code: string;
  language: string;
  highlightedLines?: number[];
  className?: string;
}

export function CodeViewer({ code, language, highlightedLines = [], className }: CodeViewerProps) {
  const lines = code.split('\n');

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader className="gap-2 space-y-0 pb-4 flex-row items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">Source Code</CardTitle>
          <span className="text-xs text-muted-foreground">({language})</span>
        </div>
        <Button variant="ghost" size="sm" className="gap-2" data-testid="button-search-code">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search</span>
        </Button>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-auto">
        <div className="font-mono text-sm">
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = highlightedLines.includes(lineNumber);
            
            return (
              <div
                key={lineNumber}
                className={cn(
                  "flex hover-elevate",
                  isHighlighted && "bg-destructive/10 border-l-2 border-destructive"
                )}
              >
                <span className="inline-block w-12 text-right pr-4 text-muted-foreground select-none flex-shrink-0 py-1">
                  {lineNumber}
                </span>
                <pre className="flex-1 py-1 pr-4">
                  <code>{line || ' '}</code>
                </pre>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
