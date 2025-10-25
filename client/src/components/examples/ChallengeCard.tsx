import { ChallengeCard } from '../ChallengeCard'

export default function ChallengeCardExample() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      <ChallengeCard
        id="sql-1"
        title="SQL Injection in Login Form"
        description="Find and fix a classic SQL injection vulnerability in the authentication system"
        difficulty="beginner"
        language="Python"
        vulnerabilityType="SQL Injection"
        status="available"
        onClick={() => console.log('Challenge clicked')}
      />
      <ChallengeCard
        id="xss-1"
        title="Stored XSS in Comments"
        description="Discover a stored cross-site scripting vulnerability"
        difficulty="intermediate"
        language="JavaScript"
        vulnerabilityType="XSS"
        status="in-progress"
        progress={60}
        onClick={() => console.log('Challenge clicked')}
      />
      <ChallengeCard
        id="auth-1"
        title="Authentication Bypass"
        description="Exploit weak authentication logic"
        difficulty="advanced"
        language="PHP"
        vulnerabilityType="Auth Bypass"
        status="locked"
      />
    </div>
  )
}
