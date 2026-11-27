'use client'

import { useState } from 'react'

import { RadarChart } from '@/components/charts/radar-chart'
import { Card } from '@/components/ui/card'

import { domains } from './mock-data'

const periods = ['Today', '1M ago', '3M ago', 'Target'] as const

export function LifeProfileChart() {
  const [period, setPeriod] = useState<(typeof periods)[number]>('Today')

  return (
    <Card className="large-map">
      <div className="card-head">
        <h2>Life profile</h2>
        <div className="segment">
          {periods.map((option) => (
            <button
              key={option}
              type="button"
              className={period === option ? 'active' : ''}
              aria-pressed={period === option}
              onClick={() => setPeriod(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <RadarChart domains={domains} large />
      <div className="timeline">
        <span>May ’24</span>
        <input type="range" min="0" max="100" defaultValue="100" aria-label="Life profile timeline" />
        <span>Today</span>
      </div>
    </Card>
  )
}
