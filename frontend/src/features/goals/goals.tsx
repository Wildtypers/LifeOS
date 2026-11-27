import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { PageIntro } from '@/components/ui/page-intro'

import { GoalWorkspace } from './goal-workspace'
import { goalAllocation, nextMilestone } from './mock-data'

export function Goals() {
  return (
    <PageIntro
      eyebrow="GOALS"
      title="Goals that move your life forward"
      text="Connect every outcome to measurable progress, milestones, and evidence."
    >
      <GoalWorkspace aside={<GoalAside />} />
    </PageIntro>
  )
}

function GoalAside() {
  return (
    <div className="goal-aside">
      <Card>
        <span className="kicker">NEXT MILESTONE</span>
        <div className="milestone-date">
          <b>{nextMilestone.date.day}</b>
          <span>{nextMilestone.date.month}<br />{nextMilestone.date.year}</span>
        </div>
        <h3>{nextMilestone.title}</h3>
        <p>Part of {nextMilestone.goal}</p>
        <Button className="full"><Icon name="check" /> Mark complete</Button>
      </Card>
      <Card>
        <span className="kicker">GOAL ALIGNMENT</span>
        <h3>Most effort supports your top priorities</h3>
        <div className="allocation">
          {goalAllocation.map(({ domain, share, color }) => (
            <i key={domain} style={{ width: `${share}%`, background: color }} title={`${domain} ${share}%`} />
          ))}
        </div>
        <div className="allocation-legend">
          {goalAllocation.filter(({ legend }) => legend).map(({ domain, legend, share, color }) => (
            <span key={domain}><i style={{ background: color }} />{legend} {share}%</span>
          ))}
        </div>
      </Card>
    </div>
  )
}
