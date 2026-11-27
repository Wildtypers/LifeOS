import { Fragment } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'

import { roadmapLevels, weeklyActionPlan } from './mock-data'
import { ScheduleReviewButton } from './schedule-review-button'

const roadmapClassNames = {
  annual: 'roadmap-level',
  quarterly: 'roadmap-level split',
  weekly: 'roadmap-level split weekly',
}

export function ArchitectPlanning() {
  return (
    <div className="page continuation">
      <div className="section-title">
        <div><span className="kicker">STRATEGIC ROADMAP</span><h2>From vision to daily action</h2></div>
        <Button><Icon name="plus" /> Add milestone</Button>
      </div>
      <Card className="roadmap">
        {roadmapLevels.map(({ label, cadence, items }, index) => (
          <Fragment key={label}>
            {index > 0 && <div className="roadmap-connect" />}
            <div className={roadmapClassNames[cadence]}>
              <span>{label}</span>
              {items.map(({ title, description, color }) => (
                <div key={title}>
                  {color && <i style={{ background: color }} />}
                  <b>{title}</b>
                  <small>{description}</small>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </Card>
      <div className="architect-grid">
        <Card>
          <div className="card-head">
            <div><span className="kicker">GAP ANALYSIS</span><h2>Where action is needed</h2></div>
            <span className="simulated">EVIDENCE-BASED</span>
          </div>
          <div className="gap-item">
            <span className="goal-domain-icon" style={{ color: '#34D399', background: '#34D39915' }}>
              <Icon name="activity" />
            </span>
            <div>
              <h3>Improve physical fitness</h3>
              <p>Current: 2 workouts/week · Target: 4</p>
              <span>Constraint: Academic workload</span>
            </div>
            <strong>−2<small>/week</small></strong>
          </div>
          <div className="recommended-action">
            <Icon name="sparkles" />
            <p>Schedule two 30-minute sessions after lower-intensity study days. Your adherence is 24% higher on those days.</p>
          </div>
        </Card>
        <Card>
          <div className="card-head">
            <div><span className="kicker">WEEKLY ACTION PLAN</span><h2>{weeklyActionPlan.dates}</h2></div>
            <span className="score-chip"><i /> {weeklyActionPlan.plannedHours}h planned</span>
          </div>
          {weeklyActionPlan.actions.map(({ day, title, time, domain, color }) => (
            <div className="plan-row" key={title}>
              <span>{day}</span>
              <i style={{ background: color }} />
              <div><b>{title}</b><small>{domain}</small></div>
              <time>{time}</time>
            </div>
          ))}
        </Card>
      </div>
      <Card className="strategic-review">
        <div>
          <span className="kicker">MONTHLY STRATEGIC REVIEW</span>
          <h2>Are your strategies moving you forward?</h2>
          <p>Review progress, adjust priorities, and decide what deserves your attention next month.</p>
        </div>
        <div className="review-prompts">
          <span><Icon name="arrow" /> 3 goals advanced</span>
          <span><Icon name="activity" /> 1 goal needs attention</span>
          <span><Icon name="sparkles" /> 2 strategies appear effective</span>
        </div>
        <ScheduleReviewButton />
      </Card>
    </div>
  )
}
