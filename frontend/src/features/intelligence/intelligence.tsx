import { Card } from '@/components/ui/card'
import { Insight } from '@/components/ui/insight'
import { PageIntro } from '@/components/ui/page-intro'
import { Stat } from '@/components/ui/stat'
import { CorrelationHeatmap } from './correlation-heatmap'
import { analysisStats, detectedPatterns } from './mock-data'
import { NetworkGraph } from './network-graph'
import { RelationshipExplorer } from './relationship-explorer'

export function Intelligence() {
  return (
    <PageIntro
      eyebrow="LIFE INTELLIGENCE"
      title="What influences your life?"
      text="Cross-domain analysis based on 1,284 observations across 18 tracked metrics."
    >
      <div className="stats-strip">
        {analysisStats.map(stat => <Stat key={stat.label} {...stat}/>)}
      </div>
      <div className="intel-grid">
        <Card>
          <div className="card-head">
            <div>
              <span className="kicker">RELATIONSHIP MAP</span>
              <h2>Connected signals</h2>
            </div>
            <select aria-label="Life domains"><option>All domains</option></select>
          </div>
          <NetworkGraph/>
          <p className="chart-note">Line weight indicates relationship strength. Correlation does not establish causation.</p>
        </Card>
        <CorrelationHeatmap/>
      </div>
      <div className="section-title">
        <div>
          <span className="kicker">DETECTED PATTERNS</span>
          <h2>What your data suggests</h2>
        </div>
      </div>
      <div className="insight-grid">
        {detectedPatterns.map(pattern => <Insight key={pattern.title} {...pattern}/>)}
      </div>
      <RelationshipExplorer/>
    </PageIntro>
  )
}
