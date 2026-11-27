import Link from 'next/link'

import { RadarChart } from '@/components/charts/radar-chart'
import { Sparkline } from '@/components/charts/sparkline'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Insight } from '@/components/ui/insight'
import { domains, lifeProfile } from '@/features/life-map/mock-data'

import { DashboardHero } from './dashboard-hero'
import { activeExperiment, insights, metricData, overviewGoals, weeklyReview } from './mock-data'

export function Dashboard() {
  return (
    <div className="page">
      <DashboardHero />
      <div className="overview-grid">
        <Card className="life-map-card">
          <div className="card-head">
            <div>
              <span className="kicker">YOUR LIFE MAP</span>
              <h2>Current life profile</h2>
            </div>
            <span className="score-chip"><i /> {lifeProfile.score} overall</span>
          </div>
          <RadarChart domains={domains} />
          <div className="chart-legend">
            <span><i className="current" />Current</span>
            <span><i className="previous" />Previous</span>
            <span><i className="target" />Target</span>
          </div>
          <Link className="text-link" href="/life-map">View full Life Map <Icon name="arrow" size={15} /></Link>
        </Card>
        <div className="metrics-panel">
          <div className="section-inline">
            <div>
              <span className="kicker">KEY SIGNALS</span>
              <h2>Your life at a glance</h2>
            </div>
            <button type="button" className="icon-button" aria-label="More signal options"><Icon name="more" /></button>
          </div>
          <div className="metric-grid">
            {metricData.map((metric) => (
              <Card key={metric.name} className="metric-card">
                <div className="metric-top">
                  <span className="metric-icon" style={{ color: metric.color, background: `${metric.color}16` }}>
                    <Icon name={metric.icon} />
                  </span>
                  <span className={metric.change.startsWith('−') ? 'negative change' : 'change'}>{metric.change}</span>
                </div>
                <div><strong>{metric.value}</strong><span>{metric.unit}</span></div>
                <Sparkline points={metric.points} color={metric.color} />
                <p>{metric.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="section-title">
        <div>
          <span className="kicker">PERSONAL INTELLIGENCE</span>
          <h2>Patterns worth knowing</h2>
        </div>
        <button type="button" className="text-link">View all insights <Icon name="arrow" size={15} /></button>
      </div>
      <div className="insight-grid">
        {insights.map(({ icon, color, title, tag, text, meta }) => (
          <Insight
            key={title}
            icon={icon}
            color={color}
            title={title}
            tag={tag}
            text={<>{text[0]}<b>{text[1]}</b>{text[2]}</>}
            meta={meta}
          />
        ))}
      </div>

      <div className="lower-grid">
        <Card>
          <div className="card-head">
            <div>
              <span className="kicker">LIFE LAB</span>
              <h2>Active experiments</h2>
            </div>
            <button type="button" className="text-link">View all</button>
          </div>
          <div className="experiment">
            <div className="experiment-icon"><Icon name="flask" /></div>
            <div className="experiment-main">
              <div className="status-row">
                <span className="live-dot" /> IN PROGRESS <span>Day {activeExperiment.currentDay} of {activeExperiment.totalDays}</span>
              </div>
              <h3>{activeExperiment.title}</h3>
              <p>{activeExperiment.question}</p>
              <div className="progress"><i style={{ width: `${activeExperiment.progress}%` }} /></div>
              <div className="experiment-meta">
                <span>Primary outcome <b>{activeExperiment.outcome}</b></span>
                <span>Early signal <b className="positive">{activeExperiment.signal}</b></span>
              </div>
            </div>
            <button type="button" className="icon-button" aria-label="View experiment details"><Icon name="chevron" /></button>
          </div>
        </Card>
        <Card>
          <div className="card-head">
            <div>
              <span className="kicker">GOALS</span>
              <h2>Active priorities</h2>
            </div>
            <button type="button" className="text-link">Manage</button>
          </div>
          {overviewGoals.map(({ id, title, domain, progress, color, due }) => (
            <div className="goal-row" key={id}>
              <div className="goal-main">
                <i style={{ background: color }} />
                <div><h3>{title}</h3><span>{domain} · Due {due}</span></div>
              </div>
              <div className="goal-progress">
                <div><i style={{ width: `${progress}%`, background: color }} /></div>
                <b>{progress}%</b>
              </div>
            </div>
          ))}
        </Card>
      </div>

      <Card className="weekly-review">
        <div className="review-header">
          <div className="review-mark"><Icon name="sparkles" /></div>
          <div>
            <span className="kicker">WEEKLY REVIEW · {weeklyReview.period}</span>
            <h2>Your week in perspective</h2>
          </div>
          <span className="review-score">{weeklyReview.score} <small>/ 10</small></span>
        </div>
        <div className="review-columns">
          {weeklyReview.highlights.map(({ label, tone, icon, title, text }) => (
            <div key={label}>
              <span className={`review-label ${tone}`}><Icon name={icon} size={14} /> {label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
