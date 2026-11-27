import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Insight } from '@/components/ui/insight'
import { PageIntro } from '@/components/ui/page-intro'
import { ExperimentControls } from './experiment-controls'
import { ExperimentResults } from './experiment-results'
import { featuredExperiment, suggestedExperiments } from './mock-data'

function FeaturedExperiment() {
  const { comparisons, day, health, hypothesis, next, preliminarySignal, progress, title, totalDays } = featuredExperiment

  return (
    <div className="lab-grid">
      <Card className="featured-experiment">
        <div className="status-row"><span className="live-dot"/> ACTIVE EXPERIMENT <span>Day {day} of {totalDays}</span></div>
        <h2>{title}</h2>
        <p className="hypothesis">“{hypothesis}”</p>
        <div className="progress big"><i style={{ width: `${progress}%` }}/></div>
        <div className="comparison">
          {comparisons.map(({ label, percent }) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{percent}<small>%</small></strong>
              <i style={{ height: `${percent}%` }}/>
            </div>
          ))}
        </div>
        <div className="preliminary">
          <Icon name="sparkles"/>
          <div><b>Preliminary signal</b><p>{preliminarySignal}</p></div>
        </div>
        <Button className="full">Open experiment workspace <Icon name="arrow"/></Button>
      </Card>
      <div className="lab-side">
        <Card>
          <span className="kicker">EXPERIMENT HEALTH</span>
          <h2>{health.status}</h2>
          <div className="health-score">{health.score}</div>
          <p>{health.note}</p>
          <div className="mini-stats">
            <span><b>{health.checkins}</b> check-ins</span>
            <span><b>{health.completeness}</b> complete</span>
          </div>
        </Card>
        <Card>
          <span className="kicker">UP NEXT</span>
          <h3>{next.title}</h3>
          <p>{next.when}</p>
          <Button primary className="full">Log observation</Button>
        </Card>
      </div>
    </div>
  )
}

export function Lab() {
  return (
    <PageIntro eyebrow="LIFE LAB" title="Test what actually works" text="Turn personal insights into structured, measurable experiments.">
      <ExperimentControls/>
      <FeaturedExperiment/>
      <div className="section-title">
        <div>
          <span className="kicker">SUGGESTED FOR YOU</span>
          <h2>Experiments grounded in your data</h2>
        </div>
      </div>
      <div className="insight-grid">
        {suggestedExperiments.map(experiment => <Insight key={experiment.title} {...experiment}/>)}
      </div>
      <ExperimentResults/>
    </PageIntro>
  )
}
