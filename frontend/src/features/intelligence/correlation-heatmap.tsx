'use client'

import { Fragment, useState } from 'react'
import { Card } from '@/components/ui/card'
import { correlationMetrics, correlations, correlationSample } from './mock-data'

function cellBackground(value: number) {
  if (value === 1) return 'var(--surface-3)'
  const color = value > 0 ? '52,211,153' : '248,113,113'
  return `rgba(${color},${Math.abs(value) * .65})`
}

export function CorrelationHeatmap() {
  const [[row, column], setCell] = useState<[number, number]>([0, 1])
  const selectedValue = correlations[row][column]

  return (
    <Card>
      <div className="card-head">
        <div>
          <span className="kicker">CORRELATIONS</span>
          <h2>Metric heatmap</h2>
        </div>
        <span className="scale">−1 <i/> +1</span>
      </div>
      <div className="heatmap">
        <div/>
        {correlationMetrics.map(metric => <span key={metric}>{metric.slice(0, 3)}</span>)}
        {correlationMetrics.map((metric, rowIndex) => (
          <Fragment key={metric}>
            <b>{metric}</b>
            {correlations[rowIndex].map((value, columnIndex) => (
              <button
                key={correlationMetrics[columnIndex]}
                type="button"
                aria-label={`${metric} × ${correlationMetrics[columnIndex]}`}
                aria-pressed={row === rowIndex && column === columnIndex}
                onClick={() => setCell([rowIndex, columnIndex])}
                style={{ background: cellBackground(value) }}
              >
                {value === 1 ? '—' : value.toFixed(2)}
              </button>
            ))}
          </Fragment>
        ))}
      </div>
      <div className="heat-detail">
        <span>{correlationMetrics[row]} × {correlationMetrics[column]}</span>
        <b className={selectedValue > 0 ? 'positive' : 'negative'}>
          {selectedValue > 0 ? '+' : ''}{selectedValue.toFixed(2)}
        </b>
        <small>n = {correlationSample.observations} · {correlationSample.days} days</small>
      </div>
    </Card>
  )
}
