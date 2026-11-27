import { RadarChart } from '@/components/charts/radar-chart'
import { BrandMark } from '@/components/ui/brand-mark'
import { domains, lifeProfile } from '@/features/life-map/mock-data'

import { AuthForm } from './auth-form'

export function AuthPage() {
  return (
    <div className="auth-page">
      <div className="auth-form-panel">
        <div className="auth-brand"><BrandMark /><b>LifeOS</b></div>
        <AuthForm />
      </div>
      <div className="auth-visual">
        <div className="auth-orbit auth-orbit-one" />
        <div className="auth-orbit auth-orbit-two" />
        <div className="auth-map">
          <RadarChart domains={domains} large />
          <div className="auth-score">
            <span>Life alignment</span><b>{lifeProfile.score}</b><small>{lifeProfile.monthlyIncrease} this month</small>
          </div>
        </div>
        <div className="auth-copy">
          <span className="kicker">YOUR PERSONAL INTELLIGENCE SYSTEM</span>
          <h2>Understand yourself.<br />Design your future.</h2>
          <p>Track your life. Find what works. Turn insight into meaningful action.</p>
        </div>
      </div>
    </div>
  )
}
