import type { ReactNode } from 'react'
import { Button } from './button'
import { Icon } from './icon'

type PageIntroProps = {
  eyebrow: string
  title: string
  text: string
  children: ReactNode
}

export function PageIntro({ eyebrow, title, text, children }: PageIntroProps) {
  return (
    <div className="page">
      <div className="hero-row">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="hero-actions">
          <Button><Icon name="calendar" /> Last 90 days</Button>
          <Button><Icon name="sliders" /> Filters</Button>
        </div>
      </div>
      {children}
    </div>
  )
}
