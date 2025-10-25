import { CodeViewer } from "@/components/CodeViewer";
import { TerminalPanel } from "@/components/TerminalPanel";
import { CodeEditor } from "@/components/CodeEditor";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";

//todo: remove mock functionality
const vulnerableCode = `def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    # VULNERABILITY: SQL Injection
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    user = db.execute(query)
    
    if user:
        return redirect('/dashboard')
    return render(request, 'login.html', {'error': 'Invalid credentials'})`;

interface ChallengeWorkspaceProps {
  challengeId: string;
  onBack?: () => void;
}

export function ChallengeWorkspace({ challengeId, onBack }: ChallengeWorkspaceProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">SQL Injection in Login Form</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                beginner
              </Badge>
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                SQL Injection
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Card className="bg-muted/30">
        <CardHeader className="gap-2 space-y-0 pb-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Challenge Objective</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">
            Find the SQL injection vulnerability in the login function, exploit it using the terminal to demonstrate unauthorized access, then fix the code using parameterized queries to prevent the attack.
          </CardDescription>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <CodeViewer
            code={vulnerableCode}
            language="Python"
            highlightedLines={[6]}
            className="h-[400px]"
          />
          
          <TerminalPanel className="h-[300px]" />
        </div>

        <CodeEditor
          initialCode={vulnerableCode}
          language="Python"
          onSubmit={(code) => console.log('Submitted fix:', code)}
          className="h-full min-h-[708px]"
        />
      </div>
    </div>
  );
}
