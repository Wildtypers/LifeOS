import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { PageIntro } from '@/components/ui/page-intro'

import { ArchitectPlanning } from './architect-planning'
import { strategicRoadmap, vision } from './mock-data'

const horizons = ['3 months', '1 year', '3 years', '5 years', '10 years']

export function Architect() {
  return (
    <>
      <PageIntro
        eyebrow="LIFE ARCHITECT"
        title="Design the future deliberately"
        text="Connect today’s actions to the life you want to build."
      >
        <div className="horizon">
          <span>Future self horizon</span>
          <div className="segment">
            {horizons.map((horizon) => (
              <button type="button" className={horizon === '1 year' ? 'active' : ''} key={horizon}>
                {horizon}
              </button>
            ))}
          </div>
        </div>
        <Card className="vision-card">
          <div>
            <span className="kicker">ONE-YEAR VISION</span>
            <h2>{vision.title}</h2>
            <p>{vision.description}</p>
          </div>
          <div className="vision-score">
            <span>Alignment score</span>
            <strong>{vision.alignment}<small>%</small></strong>
            <div className="progress"><i style={{ width: `${vision.alignment}%` }} /></div>
          </div>
        </Card>
        <div className="section-title">
          <div><span className="kicker">GOAL MANAGEMENT</span><h2>Strategic roadmap</h2></div>
          <Button primary><Icon name="plus" /> New goal</Button>
        </div>
        <div className="kanban">
          {strategicRoadmap.map(({ status, goals }, index) => (
            <div className="kanban-col" key={status}>
              <div className="kanban-head">
                <span><i className={`dot-${index}`} />{status}</span>
                <b>{goals.length}</b>
              </div>
              {goals.map(({ title, domain, progress, due, milestones }) => (
                <Card className="goal-card" key={title}>
                  <div className="goal-card-top">
                    <span style={{ color: domain.color }}>{domain.name}</span>
                    <button type="button" aria-label={`More options for ${title}`}><Icon name="more" /></button>
                  </div>
                  <h3>{title}</h3>
                  <div className="goal-card-progress">
                    <span>{progress}%</span>
                    <div className="progress">
                      <i style={{ width: `${progress}%`, background: domain.color }} />
                    </div>
                  </div>
                  <div className="goal-card-meta">
                    <span><Icon name="calendar" size={14} /> {due}</span>
                    <span>{milestones} milestones</span>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </PageIntro>
      <ArchitectPlanning />
    </>
  )
}
