'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Rating } from '@/components/ui/rating'
import { extractedActivities, today } from './mock-data'

function QuickCapture() {
  const [text, setText] = useState('')
  const [parsed, setParsed] = useState(false)

  return (
    <Card>
      <div className="card-head">
        <div>
          <span className="kicker">QUICK CAPTURE</span>
          <h2>Tell LifeOS about your day</h2>
        </div>
        <span className="simulated">SIMULATED AI</span>
      </div>
      <textarea
        aria-label="Tell LifeOS about your day"
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="I slept 8 hours last night, studied for 4 hours, went to the gym..."
      />
      <div className="capture-actions">
        <span>Use natural language. You’ll review everything first.</span>
        <Button primary onClick={() => setParsed(true)}><Icon name="sparkles"/> Extract activities</Button>
      </div>
      {parsed && (
        <div className="parsed">
          <div className="parsed-head">
            <b>Review extracted details</b>
            <button type="button" aria-label="Close extracted details" onClick={() => setParsed(false)}>
              <Icon name="x"/>
            </button>
          </div>
          {extractedActivities.map(({ label, value, icon }) => (
            <div className="parsed-row" key={label}>
              <span><Icon name={icon}/>{label}</span>
              <input aria-label={label} defaultValue={value}/>
              <button type="button" aria-label={`Remove ${label}`}><Icon name="x" size={14}/></button>
            </div>
          ))}
          <Button primary className="full">Approve and add to journal</Button>
        </div>
      )}
    </Card>
  )
}

export function JournalEntry() {
  const [mood, setMood] = useState(today.checkin.mood)
  const [energy, setEnergy] = useState(today.checkin.energy)
  const [stress, setStress] = useState(today.checkin.stress)
  const [saved, setSaved] = useState(false)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  function saveCheckin() {
    setSaved(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setSaved(false), 2500)
  }

  return (
    <>
      {saved && <div className="success-toast" role="status"><Icon name="check"/> Check-in saved to today’s journal.</div>}
      <div className="journal-grid">
        <Card>
          <div className="card-head">
            <div>
              <span className="kicker">DAILY CHECK-IN</span>
              <h2>How are you today?</h2>
            </div>
            <span className="score-chip"><i/> 3 of 5 complete</span>
          </div>
          <Rating label="Mood" value={mood} set={setMood}/>
          <Rating label="Energy" value={energy} set={setEnergy}/>
          <Rating label="Stress" value={stress} set={setStress}/>
          <div className="input-row">
            <label>Sleep duration<input type="number" defaultValue={today.checkin.sleep}/></label>
            <label>Focused work<input type="number" defaultValue={today.checkin.focusedWork}/></label>
          </div>
          <Button primary onClick={saveCheckin} className="full">Save check-in</Button>
        </Card>
        <QuickCapture/>
      </div>
    </>
  )
}
