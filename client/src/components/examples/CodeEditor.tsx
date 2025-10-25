import { CodeEditor } from '../CodeEditor'

const sampleCode = `def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    # VULNERABILITY: SQL Injection
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    user = db.execute(query)
    
    if user:
        return redirect('/dashboard')
    return render(request, 'login.html', {'error': 'Invalid credentials'})`

export default function CodeEditorExample() {
  return (
    <div className="p-6">
      <CodeEditor
        initialCode={sampleCode}
        language="Python"
        className="h-[500px]"
      />
    </div>
  )
}
