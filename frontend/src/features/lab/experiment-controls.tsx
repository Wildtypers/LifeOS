'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'
import { experimentTabs, featuredExperiment } from './mock-data'

const steps = [
  'Research question',
  'Form your hypothesis',
  'Experimental design',
  'Choose metrics',
  'Duration & schedule',
  'Review experiment',
]

const designOptions = ['Baseline vs. intervention', 'Alternating conditions', 'Before-and-after comparison']

function ExperimentWizard({ close }: { close: () => void }) {
  const [step, setStep] = useState(0)
  const firstStep = step === 0
  const lastStep = step === steps.length - 1

  return (
    <Modal close={close} label="New experiment">
      <div className="wizard">
        <div className="wizard-progress">
          <span>NEW EXPERIMENT</span>
          <b>Step {step + 1} of {steps.length}</b>
          <div><i style={{ width: `${(step + 1) / steps.length * 100}%` }}/></div>
        </div>
        <h2>{steps[step]}</h2>
        <p>{firstStep
          ? 'What would you like to learn about yourself?'
          : 'Define the next part of your experiment. You can adjust this later.'}
        </p>
        {firstStep ? (
          <textarea aria-label="Research question" defaultValue={featuredExperiment.question}/>
        ) : (
          <div className="option-list">
            {designOptions.map((option, index) => (
              <button key={option} type="button" className={index === 0 ? 'selected' : ''}>
                <i/>{option}<Icon name="chevron"/>
              </button>
            ))}
          </div>
        )}
        <div className="wizard-actions">
          <Button onClick={firstStep ? close : () => setStep(step - 1)}>Back</Button>
          <Button primary onClick={lastStep ? close : () => setStep(step + 1)}>
            {lastStep ? 'Launch experiment' : 'Continue'} <Icon name="arrow"/>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export function ExperimentControls() {
  const [tab, setTab] = useState<(typeof experimentTabs)[number]['label']>('Active')
  const [wizardOpen, setWizardOpen] = useState(false)

  return (
    <>
      <div className="page-toolbar">
        <div className="tabs">
          {experimentTabs.map(({ label, count }) => (
            <button
              key={label}
              type="button"
              aria-pressed={tab === label}
              className={tab === label ? 'active' : ''}
              onClick={() => setTab(label)}
            >
              {label}<span>{count}</span>
            </button>
          ))}
        </div>
        <Button primary onClick={() => setWizardOpen(true)}><Icon name="plus"/> New experiment</Button>
      </div>
      {wizardOpen && <ExperimentWizard close={() => setWizardOpen(false)}/>}
    </>
  )
}
