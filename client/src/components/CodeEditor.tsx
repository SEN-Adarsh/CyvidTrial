import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save, RotateCcw, FileCode } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  initialCode: string;
  language: string;
  onSubmit?: (code: string) => void;
  className?: string;
}

export function CodeEditor({ initialCode, language, onSubmit, className }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [hasChanges, setHasChanges] = useState(false);

  const handleCodeChange = (value: string) => {
    setCode(value);
    setHasChanges(value !== initialCode);
  };

  const handleReset = () => {
    setCode(initialCode);
    setHasChanges(false);
  };

  const handleSubmit = () => {
    onSubmit?.(code);
    console.log('Submitting fix:', code);
  };

  const lines = code.split('\n');

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardHeader className="gap-2 space-y-0 pb-4 flex-row items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">Fix the Code</CardTitle>
          <span className="text-xs text-muted-foreground">({language})</span>
        </div>
        {hasChanges && (
          <span className="text-xs text-yellow-500">Unsaved changes</span>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-auto">
        <div className="font-mono text-sm h-full">
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-full p-4 bg-transparent border-none outline-none resize-none font-mono text-sm"
            spellCheck={false}
            data-testid="textarea-code-editor"
          />
        </div>
      </CardContent>

      <CardFooter className="gap-2 flex-wrap border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          disabled={!hasChanges}
          className="gap-2"
          data-testid="button-reset-code"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
        <Button
          size="sm"
          onClick={handleSubmit}
          disabled={!hasChanges}
          className="gap-2 ml-auto"
          data-testid="button-submit-fix"
        >
          <Save className="h-4 w-4" />
          Submit Fix
        </Button>
      </CardFooter>
    </Card>
  );
}
