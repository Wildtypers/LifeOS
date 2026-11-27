'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { calendar } from './mock-data'

export function HistoryCalendar() {
  const [month, setMonth] = useState(calendar.months.current)

  return (
    <Card className="calendar-card">
      <div className="card-head">
        <button type="button" aria-label="Show April 2025" onClick={() => setMonth(calendar.months.previous)}>
          <Icon name="chevron" size={15}/>
        </button>
        <h2>{month}</h2>
        <button type="button" aria-label="Show June 2025" onClick={() => setMonth(calendar.months.next)}>
          <Icon name="chevron" size={15}/>
        </button>
      </div>
      <div className="calendar-grid">
        {calendar.weekdays.map(({ day, initial }) => <b key={day}>{initial}</b>)}
        {calendar.cells.map(({ position, date, selected, color }) => (
          <button key={position} type="button" className={`${selected ? 'selected' : ''} ${color ? 'recorded' : ''}`}>
            <span>{date}</span>
            {color && <i style={{ background: color }}/>}
          </button>
        ))}
      </div>
      <div className="calendar-legend">
        <span><i className="good"/>High energy</span>
        <span><i className="steady"/>Steady</span>
        <span><i className="low"/>Low</span>
      </div>
    </Card>
  )
}
