import { CodeViewer } from '../CodeViewer'

const sampleCode = `def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    # VULNERABILITY: SQL Injection
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    user = db.execute(query)
    
    if user:
        return redirect('/dashboard')
    return render(request, 'login.html', {'error': 'Invalid credentials'})`

export default function CodeViewerExample() {
  return (
    <div className="p-6">
      <CodeViewer
        code={sampleCode}
        language="Python"
        highlightedLines={[6]}
        className="h-[400px]"
      />
    </div>
  )
}
