import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { completedExperiments } from './mock-data'

export function ExperimentResults() {
  return (
    <>
      <div className="section-title">
        <div>
          <span className="kicker">COMPLETED RESEARCH</span>
          <h2>What you’ve learned</h2>
        </div>
        <button type="button" className="text-link">View all results <Icon name="arrow" size={15}/></button>
      </div>
      <div className="results-grid">
        {completedExperiments.map(result => {
          const positiveClass = result.status === 'supported' ? 'positive' : undefined
          return (
            <Card className="result-card" key={result.title}>
              <div className="result-head">
                <span className={`result-status ${result.status}`}><Icon name={result.icon}/> {result.statusLabel}</span>
                <span>Completed {result.completed}</span>
              </div>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <div className="result-numbers">
                <div><span>{result.baseline.label}</span><b>{result.baseline.value}</b></div>
                <Icon name="arrow"/>
                <div><span>{result.intervention.label}</span><b className={positiveClass}>{result.intervention.value}</b></div>
                <div><span>{result.change.label}</span><b className={positiveClass}>{result.change.value}</b></div>
              </div>
              <div className="result-foot">
                <span>Data completeness: {result.completeness}</span>
                <Button>{result.action}</Button>
              </div>
            </Card>
          )
        })}
      </div>
    </>
  )
}
