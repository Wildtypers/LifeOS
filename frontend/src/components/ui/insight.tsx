import type { ReactNode } from 'react'
import { Card } from './card'
import { Icon, type IconName } from './icon'

type InsightProps = {
  icon: IconName
  color: string
  title: string
  tag: string
  text: ReactNode
  meta: string
}

export function Insight({ icon, color, title, tag, text, meta }: InsightProps) {
  return (
    <Card className="insight-card">
      <div className="insight-top">
        <span className="insight-icon" style={{ color, background: `${color}15` }}>
          <Icon name={icon} />
        </span>
        <span className="insight-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="insight-meta">
        <span>{meta}</span>
        <button type="button" aria-label={title}><Icon name="arrow" size={16} /></button>
      </div>
    </Card>
  )
}
