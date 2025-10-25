import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, RotateCcw, Play } from "lucide-react";
import { useState, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

interface TerminalLine {
  type: "command" | "output" | "error" | "success";
  content: string;
}

interface TerminalPanelProps {
  className?: string;
}

export function TerminalPanel({ className }: TerminalPanelProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to CyVidya Terminal. Type 'help' for available commands." },
  ]);
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommand = () => {
    if (!currentCommand.trim()) return;

    setLines(prev => [
      ...prev,
      { type: "command", content: `$ ${currentCommand}` },
      { type: "output", content: "Command executed. Output will appear here." },
    ]);
    
    setCurrentCommand("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  const handleClear = () => {
    setLines([{ type: "output", content: "Terminal cleared." }]);
  };

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader className="gap-2 space-y-0 pb-4 flex-row items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">Exploitation Terminal</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleClear} data-testid="button-clear-terminal">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4 bg-black/50 font-mono text-sm overflow-auto">
        <div className="flex-1 space-y-1 overflow-auto mb-4">
          {lines.map((line, index) => (
            <div
              key={index}
              className={cn(
                line.type === "command" && "text-primary",
                line.type === "error" && "text-destructive",
                line.type === "success" && "text-green-500",
                line.type === "output" && "text-foreground"
              )}
            >
              {line.content}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-border pt-2">
          <span className="text-primary">$</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent border-none outline-none text-foreground"
            placeholder="Enter command..."
            data-testid="input-terminal-command"
          />
          <Button size="sm" onClick={handleCommand} data-testid="button-run-command">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
