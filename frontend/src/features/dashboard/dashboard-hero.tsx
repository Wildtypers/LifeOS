'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { useWorkspace } from '@/features/workspace/workspace-context'

export function DashboardHero() {
  const [range, setRange] = useState('This month')
  const [customizing, setCustomizing] = useState(false)
  const { openCheckin } = useWorkspace()

  return (
    <>
      <div className="hero-row">
        <div>
          <p className="eyebrow">Monday, May 12</p>
          <h1>Good morning, Alex.</h1>
          <p>Here’s how your life is progressing.</p>
        </div>
        <div className="hero-actions">
          <select value={range} onChange={(event) => setRange(event.target.value)} aria-label="Date range">
            <option>Today</option>
            <option>This week</option>
            <option>This month</option>
            <option>Last 90 days</option>
          </select>
          <Button onClick={() => setCustomizing((active) => !active)}>
            <Icon name="sliders" /> Customize
          </Button>
          <Button primary onClick={openCheckin}>
            <Icon name="check" /> Daily check-in
          </Button>
        </div>
      </div>
      {customizing && (
        <div className="notice">
          <Icon name="sparkles" />
          <div>
            <b>Dashboard customization is active</b>
            <span>Choose which metrics appear and drag cards to reorder them.</span>
          </div>
          <button type="button" aria-label="Dismiss customization notice" onClick={() => setCustomizing(false)}>
            <Icon name="x" />
          </button>
        </div>
      )}
    </>
  )
}
