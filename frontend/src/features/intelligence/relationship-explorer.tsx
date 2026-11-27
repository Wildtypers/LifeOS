import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { recommendedAction, relationshipFilters, relationshipPoints, relationshipResult } from './mock-data'

export function RelationshipExplorer() {
  return (
    <>
      <div className="section-title">
        <div>
          <span className="kicker">RELATIONSHIP EXPLORER</span>
          <h2>Explore a relationship</h2>
        </div>
        <div className="simulated">SIMULATED ANALYSIS</div>
      </div>
      <Card className="explorer">
        <div className="explorer-controls">
          {relationshipFilters.map(({ label, options }) => (
            <label key={label}>
              {label}
              <select>
                {options.map(option => <option key={option}>{option}</option>)}
              </select>
            </label>
          ))}
        </div>
        <div className="explorer-body">
          <div className="scatter">
            <svg viewBox="0 0 390 220" role="img" aria-label="Sleep duration and focused work scatter plot">
              <path d="M42 190H370M42 190V20" className="axis"/>
              <path d="M48 181 360 29" className="trend"/>
              {relationshipPoints.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4"/>)}
              <text x="205" y="214">Sleep duration (hours)</text>
              <text x="12" y="110" transform="rotate(-90 12 110)">Focused work (hours)</text>
            </svg>
          </div>
          <div className="relationship-summary">
            <span className="kicker">RESULT</span>
            <strong className="positive">{relationshipResult.correlation}</strong>
            <span>{relationshipResult.strength}</span>
            <div><b>{relationshipResult.observations}</b><small>observations</small></div>
            <div><b>{relationshipResult.uncertainty}</b><small>uncertainty</small></div>
            <p>{relationshipResult.interpretation}</p>
            <small>Workload and weekday may be confounding variables. Correlation does not prove causation.</small>
            <Button primary><Icon name="flask"/> Create experiment</Button>
          </div>
        </div>
      </Card>
      <div className="section-title">
        <div>
          <span className="kicker">RECOMMENDATIONS</span>
          <h2>Specific actions to test</h2>
        </div>
      </div>
      <Card className="recommendation">
        <span className="insight-icon" style={{ color: '#60A5FA', background: '#60A5FA15' }}>
          <Icon name="sleep"/>
        </span>
        <div>
          <span>SUPPORT YOUR EDUCATION GOAL</span>
          <h3>{recommendedAction.title}</h3>
          <p>{recommendedAction.description}</p>
        </div>
        <div><Button>Save for later</Button><Button primary>Start experiment</Button></div>
      </Card>
    </>
  )
}
