import { ChallengeWorkspace } from '../ChallengeWorkspace'

export default function ChallengeWorkspaceExample() {
  return (
    <div className="p-6">
      <ChallengeWorkspace
        challengeId="sql-injection-1"
        onBack={() => console.log('Back clicked')}
      />
    </div>
  )
}
