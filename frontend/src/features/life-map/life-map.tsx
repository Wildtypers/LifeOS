import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { PageIntro } from '@/components/ui/page-intro'

import { LifeMapAnalysis } from './life-map-analysis'
import { LifeProfileChart } from './life-profile-chart'
import { domains, lifeProfile } from './mock-data'

export function LifeMap() {
  const priorityGaps = domains.slice()
    .sort((a, b) => (b.target - b.value) - (a.target - a.value))
    .slice(0, 4)

  return (
    <PageIntro eyebrow="LIFE MAP" title="Your life, in perspective" text="Progress toward the future you’re intentionally building.">
      <div className="life-map-layout">
        <LifeProfileChart />
        <Card className="profile-panel">
          <span className="kicker">CURRENT PROFILE</span>
          <div className="big-score">{lifeProfile.score}<small>/100</small></div>
          <p>Your overall goal progress increased <b className="positive">{lifeProfile.monthlyIncrease} points</b> this month.</p>
          <div className="divider" />
          <h3>Priority gaps</h3>
          {priorityGaps.map((domain) => (
            <div className="priority-row" key={domain.name}>
              <span><i style={{ background: domain.color }} />{domain.name}</span>
              <b>{domain.target - domain.value} pt gap</b>
            </div>
          ))}
        </Card>
      </div>

      <div className="section-title">
        <div>
          <span className="kicker">8 DIMENSIONS</span>
          <h2>Domain breakdown</h2>
        </div>
      </div>
      <div className="domain-grid">
        {domains.map((domain, index) => (
          <Card className="domain-card" key={domain.name}>
            <div className="domain-head">
              <span style={{ color: domain.color, background: `${domain.color}15` }}><Icon name={domain.icon} /></span>
              <b className={domain.value >= domain.prev ? 'positive' : 'negative'}>
                {domain.value >= domain.prev ? '+' : ''}{domain.value - domain.prev}
              </b>
            </div>
            <h3>{domain.name}</h3>
            <strong>{domain.value}<small>/100</small></strong>
            <div className="progress"><i style={{ width: `${domain.value}%`, background: domain.color }} /></div>
            <p>{index % 2 === 0 ? 'Trending above your 90-day average' : 'Target progress this month'}</p>
          </Card>
        ))}
      </div>

      <LifeMapAnalysis>
        <Card className="data-table">
          <div className="table-row table-head">
            <span>Life domain</span><span>Current</span><span>Target</span><span>Difference</span><span>Priority</span><span>Associated goal</span>
          </div>
          {domains.map((domain) => (
            <div className="table-row" key={domain.name}>
              <span><i style={{ background: domain.color }} />{domain.name}</span>
              <b>{domain.value}</b>
              <b>{domain.target}</b>
              <b className="attention">−{domain.target - domain.value}</b>
              <span className={domain.priority === 'High' ? 'priority high' : 'priority'}>{domain.priority}</span>
              <span>{domain.goal}</span>
            </div>
          ))}
        </Card>
      </LifeMapAnalysis>
    </PageIntro>
  )
}
