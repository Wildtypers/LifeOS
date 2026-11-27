import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { PageIntro } from '@/components/ui/page-intro'
import { Stat } from '@/components/ui/stat'
import { HistoryCalendar } from './history-calendar'
import { JournalEntry } from './journal-entry'
import { selectedDay, timelineEntries, today } from './mock-data'
import { QuickLog } from './quick-log'

function JournalHistory() {
  return (
    <>
      <div className="section-title">
        <div>
          <span className="kicker">JOURNAL HISTORY</span>
          <h2>Patterns across your days</h2>
        </div>
        <label className="mini-search">
          <Icon name="search"/><input aria-label="Search journal" placeholder="Search journal"/>
        </label>
      </div>
      <div className="history-layout">
        <HistoryCalendar/>
        <Card className="day-record">
          <div className="card-head">
            <div>
              <span className="kicker">SELECTED DAY</span>
              <h2>{selectedDay.label}</h2>
            </div>
            <Button>Edit record</Button>
          </div>
          <div className="day-scores">
            {selectedDay.scores.map(score => <Stat key={score.label} {...score}/>)}
          </div>
          <blockquote>{selectedDay.note}</blockquote>
          <h3>Recorded metrics</h3>
          {selectedDay.metrics.map(({ label, value }) => (
            <div className="recorded-metric" key={label}><span>{label}</span><b>{value}</b></div>
          ))}
        </Card>
      </div>
    </>
  )
}

export function Journal() {
  return (
    <PageIntro
      eyebrow="LIFE JOURNAL"
      title="Today, in your own words"
      text={`${today.label} · Your daily record is ${today.completeness}% complete.`}
    >
      <JournalEntry/>
      <Card>
        <div className="card-head">
          <div>
            <span className="kicker">TODAY’S TIMELINE</span>
            <h2>{today.label}</h2>
          </div>
          <Button><Icon name="plus"/> Add activity</Button>
        </div>
        <div className="day-timeline">
          {timelineEntries.map(({ time, title, domain, color, duration }) => (
            <div className="timeline-row" key={title}>
              <time>{time}</time><i style={{ background: color }}/>
              <div><h3>{title}</h3><span>{domain}</span></div>
              <span className="duration">{duration}</span>
              <button type="button" aria-label={`More options for ${title}`}><Icon name="more"/></button>
            </div>
          ))}
        </div>
      </Card>
      <QuickLog/>
      <JournalHistory/>
    </PageIntro>
  )
}
