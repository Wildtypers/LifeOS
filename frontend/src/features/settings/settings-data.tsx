import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'

import { CustomMetricsCard } from './custom-metrics-card'
import { customMetrics, privacyPreferences } from './mock-data'
import { ExportDataButton } from './settings-controls'

export function SettingsData() {
  return (
    <div className="page continuation">
      <div className="settings-data-grid">
        <CustomMetricsCard>
          <p className="settings-copy">Create metrics that reflect the outcomes and behaviors meaningful to you.</p>
          <div className="metric-table">
            <div><span>Metric</span><span>Type</span><span>Frequency</span><span>Target</span></div>
            {customMetrics.map(({ name, type, frequency, target, color }) => (
              <div key={name}>
                <span><i style={{ background: color }} />{name}</span>
                <span>{type}</span>
                <span>{frequency}</span>
                <b>{target}</b>
                <button type="button" aria-label={`More options for ${name}`}><Icon name="more" /></button>
              </div>
            ))}
          </div>
        </CustomMetricsCard>
        <Card>
          <span className="kicker">PRIVACY & ANALYSIS</span>
          <h2>How your data is used</h2>
          <p className="privacy-copy">
            Your recorded values are used within this prototype to calculate trends, relationships, and simulated insights. No external AI model or analytics service is connected.
          </p>
          {privacyPreferences.map(({ name, enabled, description }) => (
            <div className="setting-row" key={name}>
              <div><h3>{name}</h3><p>{description}</p></div>
              <button
                type="button"
                className={`toggle ${enabled ? 'active' : ''}`}
                aria-label={name}
                aria-pressed={enabled}
              >
                <i />
              </button>
            </div>
          ))}
        </Card>
        <Card>
          <div className="card-head">
            <div><span className="kicker">DATA MANAGEMENT</span><h2>Your data belongs to you</h2></div>
            <span className="score-chip"><i /> 1,284 records</span>
          </div>
          <div className="data-actions">
            <button type="button">
              <Icon name="grid" />
              <span><b>View recorded data</b><small>Inspect and edit historical values</small></span>
              <Icon name="chevron" />
            </button>
            <ExportDataButton />
            <button type="button" className="danger">
              <Icon name="x" />
              <span><b>Delete account and data</b><small>This action cannot be undone</small></span>
              <Icon name="chevron" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
