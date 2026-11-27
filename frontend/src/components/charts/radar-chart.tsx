'use client'

import { useState } from 'react'

type RadarDomain = {
  name: string
  value: number
  prev: number
  target: number
  color: string
}

const centerX = 190
const centerY = 170
const radius = 128
const gridLevels = [20, 40, 60, 80, 100]

function angleAt(index: number, count: number) {
  return -Math.PI / 2 + index * Math.PI * 2 / count
}

function polygon(values: number[]) {
  return values.map((value, index) => {
    const angle = angleAt(index, values.length)
    const distance = radius * value / 100
    return `${centerX + Math.cos(angle) * distance},${centerY + Math.sin(angle) * distance}`
  }).join(' ')
}

export function RadarChart({ domains, large = false }: { domains: readonly RadarDomain[]; large?: boolean }) {
  const [hovered, setHovered] = useState<RadarDomain | null>(null)
  const change = hovered ? hovered.value - hovered.prev : 0

  return (
    <div className="radar-wrap">
      <svg className="radar-chart" viewBox="0 0 380 360" style={{ maxWidth: large ? 480 : 390 }} role="img" aria-label="Life domain progress radar chart">
        {gridLevels.map(level => (
          <polygon key={level} points={polygon(domains.map(() => level))} className="radar-grid" />
        ))}
        {domains.map((domain, index) => {
          const angle = angleAt(index, domains.length)
          return (
            <line
              key={domain.name}
              x1={centerX}
              y1={centerY}
              x2={centerX + Math.cos(angle) * radius}
              y2={centerY + Math.sin(angle) * radius}
              className="radar-grid"
            />
          )
        })}
        <polygon points={polygon(domains.map(domain => domain.target))} className="radar-target" />
        <polygon points={polygon(domains.map(domain => domain.prev))} className="radar-prev" />
        <polygon points={polygon(domains.map(domain => domain.value))} className="radar-current" />
        {domains.map((domain, index) => {
          const angle = angleAt(index, domains.length)
          const x = centerX + Math.cos(angle) * radius * domain.value / 100
          const y = centerY + Math.sin(angle) * radius * domain.value / 100
          const labelX = centerX + Math.cos(angle) * 151
          const labelY = centerY + Math.sin(angle) * 151
          const textAnchor = Math.abs(labelX - centerX) < 10 ? 'middle' : labelX < centerX ? 'end' : 'start'

          return (
            <g key={domain.name} className="radar-point" onMouseEnter={() => setHovered(domain)} onMouseLeave={() => setHovered(null)}>
              <circle cx={x} cy={y} r="10" className="radar-hit" />
              <circle cx={x} cy={y} r="3.5" fill={domain.color} stroke="var(--surface)" strokeWidth="2" />
              <text x={labelX} y={labelY} textAnchor={textAnchor} dominantBaseline="middle">{domain.name.split(' ')[0]}</text>
            </g>
          )
        })}
      </svg>
      {hovered && (
        <div className="chart-tooltip">
          <div className="tooltip-title"><span style={{ background: hovered.color }} />{hovered.name}</div>
          <strong>{hovered.value}<small>/100</small></strong>
          <div><span>Previous</span><b>{hovered.prev}</b></div>
          <div><span>Target</span><b>{hovered.target}</b></div>
          <div><span>Change</span><b className={change < 0 ? 'negative' : 'positive'}>{change > 0 ? `+${change}` : change}</b></div>
        </div>
      )}
    </div>
  )
}
