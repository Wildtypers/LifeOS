'use client'

import { useState } from 'react'

import { Icon } from '@/components/ui/icon'

const themes = ['Dark', 'Light', 'System'] as const

export function AppearanceOptions() {
  const [theme, setTheme] = useState<(typeof themes)[number]>('Dark')

  return (
    <div className="theme-options">
      {themes.map((option) => (
        <button
          type="button"
          className={option === theme ? 'active' : ''}
          aria-pressed={option === theme}
          onClick={() => setTheme(option)}
          key={option}
        >
          <div className={`theme-preview ${option.toLowerCase()}`}><i /><span /><span /></div>
          <b>{option}</b>
          {option === theme && <Icon name="check" />}
        </button>
      ))}
    </div>
  )
}

export function WeeklyReviewToggle() {
  const [emails, setEmails] = useState(true)

  return (
    <button
      type="button"
      className={`toggle ${emails ? 'active' : ''}`}
      aria-label="Weekly review email"
      aria-pressed={emails}
      onClick={() => setEmails((enabled) => !enabled)}
    >
      <i />
    </button>
  )
}

export function ExportDataButton() {
  const [exported, setExported] = useState(false)

  return (
    <button type="button" onClick={() => setExported(true)}>
      <Icon name="arrow" />
      <span><b>{exported ? 'Export prepared' : 'Export all data'}</b><small>Download a CSV archive</small></span>
      <Icon name={exported ? 'check' : 'chevron'} />
    </button>
  )
}
