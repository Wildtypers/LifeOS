'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { RadarChart } from '@/components/charts/radar-chart'
import { BrandMark } from '@/components/ui/brand-mark'
import { Button, ButtonLink } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { domains } from '@/features/life-map/mock-data'

import { onboardingOptions } from './mock-data'

const titles = [
  'Welcome to LifeOS',
  'Choose your life domains',
  'Define your priorities',
  'Choose your signals',
  'Design your daily check-in',
  'Set your initial targets',
  'Your Life Map starts here',
]

const steps = titles.length

function WelcomePrinciples() {
  return (
    <div className="onboarding-principles">
      <div><Icon name="book" /><b>Track with intention</b><span>Capture only data that helps you make a better decision.</span></div>
      <div><Icon name="brain" /><b>Understand patterns</b><span>Discover relationships across every part of your life.</span></div>
      <div><Icon name="flask" /><b>Test what works</b><span>Replace guesswork with structured personal experiments.</span></div>
    </div>
  )
}

function InitialLifeMap() {
  return (
    <div className="onboarding-map">
      <RadarChart domains={domains} />
      <div>
        <span className="simulated">INITIAL ESTIMATE</span>
        <h3>Your profile is ready to develop</h3>
        <p>Three domains have enough initial information. The remaining scores will appear after 7–14 days of check-ins.</p>
        <div className="data-state">
          <i />
          <span><b>3 of 8 domains available</b><small>LifeOS never converts missing data into a zero score.</small></span>
        </div>
      </div>
    </div>
  )
}

export function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<string[]>(() => domains.map(({ name }) => name))
  const firstStep = step === 1
  const lastStep = step === steps
  const options = onboardingOptions[step]

  function toggle(name: string) {
    setSelected((current) => current.includes(name) ? current.filter((domain) => domain !== name) : [...current, name])
  }

  return (
    <div className="onboarding-page">
      <header>
        <div className="auth-brand"><BrandMark /><b>LifeOS</b></div>
        <span>Step {step} of {steps}</span>
        <button type="button" onClick={() => router.push('/dashboard')}>Save and exit</button>
      </header>
      <div className="onboarding-progress"><i style={{ width: `${step / steps * 100}%` }} /></div>
      <main>
        <span className="kicker">GET STARTED · {String(step).padStart(2, '0')}</span>
        <h1>{titles[step - 1]}</h1>
        {firstStep && <p>LifeOS turns your daily signals into a clearer understanding of what helps you thrive.</p>}
        {lastStep && <p>Your profile will become more useful as you record real data. Missing information is never treated as zero.</p>}
        {!firstStep && !lastStep && <p>Customize LifeOS around what matters to you. You can change this at any time.</p>}
        {firstStep && <WelcomePrinciples />}
        {step === 2 && (
          <div className="domain-picker">
            {domains.map(({ name, color, icon }) => {
              const chosen = selected.includes(name)
              return (
                <button
                  type="button"
                  className={chosen ? 'selected' : ''}
                  aria-pressed={chosen}
                  onClick={() => toggle(name)}
                  key={name}
                >
                  <span style={{ color, background: `${color}16` }}><Icon name={icon} /></span>
                  <b>{name}</b>
                  <i>{chosen && <Icon name="check" size={14} />}</i>
                </button>
              )
            })}
          </div>
        )}
        {options && (
          <div className="onboarding-options" key={step}>
            {options.map((option, index) => (
              <label key={option}>
                <input type="checkbox" defaultChecked={index < 3} />
                <span>
                  <b>{option}</b>
                  <small>{step === 3 ? 'Recommended based on your selected domains' : 'Include in your LifeOS profile'}</small>
                </span>
              </label>
            ))}
          </div>
        )}
        {lastStep && <InitialLifeMap />}
        <div className="onboarding-actions">
          {!firstStep && <Button onClick={() => setStep(step - 1)}>Back</Button>}
          {lastStep ? (
            <ButtonLink href="/dashboard" primary>Go to my dashboard <Icon name="arrow" /></ButtonLink>
          ) : (
            <Button primary onClick={() => setStep(step + 1)}>
              {firstStep ? 'Begin setup' : 'Continue'} <Icon name="arrow" />
            </Button>
          )}
        </div>
      </main>
    </div>
  )
}
