'use client'

import { useState, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'

export function CustomMetricsCard({ children }: { children: ReactNode }) {
  const [showMetric, setShowMetric] = useState(false)

  function close() {
    setShowMetric(false)
  }

  return (
    <>
      <Card>
        <div className="card-head">
          <div><span className="kicker">CUSTOM METRICS</span><h2>Your measurement system</h2></div>
          <Button primary onClick={() => setShowMetric(true)}><Icon name="plus" /> New metric</Button>
        </div>
        {children}
      </Card>
      {showMetric && (
        <Modal close={close} label="Create a new metric">
          <div className="wizard">
            <span className="kicker">CUSTOM METRIC</span>
            <h2>Create a new metric</h2>
            <div className="form-grid">
              <label className="form-field">Metric name<input placeholder="e.g. Reading comprehension" /></label>
              <label className="form-field">
                Life domain
                <select><option>Education</option><option>Physical health</option><option>Personal growth</option></select>
              </label>
              <label className="form-field">
                Data type
                <select>
                  <option>Numeric value</option><option>Duration</option><option>Percentage</option><option>Rating scale</option>
                  <option>Boolean</option><option>Currency</option><option>Count</option>
                </select>
              </label>
              <label className="form-field">Unit<input placeholder="e.g. score" /></label>
              <label className="form-field">
                Logging frequency
                <select><option>Daily</option><option>Weekly</option><option>Per activity</option></select>
              </label>
              <label className="form-field">Target value<input placeholder="e.g. 8" /></label>
            </div>
            <label className="form-field">Description<input placeholder="What does this metric help you understand?" /></label>
            <div className="wizard-actions">
              <Button onClick={close}>Cancel</Button>
              <Button primary onClick={close}>Create metric</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
