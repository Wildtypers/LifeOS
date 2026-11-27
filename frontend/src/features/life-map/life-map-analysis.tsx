'use client'

import { useState, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'

import { domains } from './mock-data'

export function LifeMapAnalysis({ children }: { children: ReactNode }) {
  const [customize, setCustomize] = useState(false)
  const close = () => setCustomize(false)

  return (
    <>
      <div className="section-title">
        <div>
          <span className="kicker">CURRENT SELF VS. IDEAL SELF</span>
          <h2>Priority-weighted gap analysis</h2>
        </div>
        <Button onClick={() => setCustomize(true)}><Icon name="sliders" /> Customize Life Map</Button>
      </div>
      {children}
      {customize && (
        <Modal close={close} label="Customize Life Map">
          <div className="wizard">
            <span className="kicker">CUSTOMIZE LIFE MAP</span>
            <h2>How your profile is calculated</h2>
            <p>Each domain combines progress toward your goals and selected metrics using the weights below. Missing data remains unavailable.</p>
            <div className="weight-list">
              {domains.slice(0, 5).map((domain, index) => (
                <div key={domain.name}>
                  <i style={{ background: domain.color }} />
                  <span><b>{domain.name}</b><small>{index + 2} associated metrics</small></span>
                  <input type="range" defaultValue={80 - index * 7} aria-label={`${domain.name} weight`} />
                  <button type="button" className="toggle active" aria-label={`Toggle ${domain.name}`}><i /></button>
                </div>
              ))}
            </div>
            <div className="wizard-actions">
              <Button onClick={close}>Cancel</Button>
              <Button primary onClick={close}>Save configuration</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
