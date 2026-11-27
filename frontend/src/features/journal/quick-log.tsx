'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'
import { activityTypes, today } from './mock-data'

export function QuickLog() {
  const [activity, setActivity] = useState<string | null>(null)
  const close = () => setActivity(null)

  return (
    <>
      <div className="section-title">
        <div>
          <span className="kicker">QUICK LOG</span>
          <h2>Add an activity</h2>
        </div>
      </div>
      <div className="quick-activities">
        {activityTypes.map(({ icon, label }) => (
          <button key={label} type="button" onClick={() => setActivity(label)}>
            <span><Icon name={icon}/></span>{label}
          </button>
        ))}
      </div>
      {activity && (
        <Modal close={close} label={`Log ${activity}`}>
          <div className="wizard">
            <span className="kicker">LOG ACTIVITY</span>
            <h2>{activity}</h2>
            <p>Add the details you want to measure. Only entered values will be recorded.</p>
            <div className="form-grid">
              <label className="form-field">Date<input type="date" defaultValue={today.date}/></label>
              <label className="form-field">Duration<input placeholder="e.g. 45 minutes"/></label>
              <label className="form-field">Start time<input type="time" defaultValue="08:00"/></label>
              <label className="form-field">
                Life domain<select><option>Education</option><option>Physical health</option><option>Lifestyle</option></select>
              </label>
            </div>
            <label className="form-field">Notes<input placeholder="Optional context"/></label>
            <div className="wizard-actions">
              <Button onClick={close}>Cancel</Button>
              <Button primary onClick={close}>Add to journal</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
