'use client'

import { useState, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'
import { Stat } from '@/components/ui/stat'

import { goalSummary, initialGoals, newGoalDefaults } from './mock-data'

export function GoalWorkspace({ aside }: { aside: ReactNode }) {
  const [showForm, setShowForm] = useState(false)
  const [goals, setGoals] = useState(initialGoals)
  const [name, setName] = useState('')

  function addGoal() {
    if (!name.trim()) return

    const { domain, progress, due, color, icon } = newGoalDefaults
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: `new-goal-${currentGoals.length}`, title: name, domain, progress, due, color, icon },
    ])
    setName('')
    setShowForm(false)
  }

  return (
    <>
      <div className="goal-summary">
        <Stat label="Active goals" value={String(goals.length)} />
        {goalSummary.map(({ label, value }) => <Stat key={label} label={label} value={value} />)}
        <Button primary onClick={() => setShowForm(true)}><Icon name="plus" /> New goal</Button>
      </div>
      <div className="goals-layout">
        <Card className="goals-list">
          <div className="card-head">
            <div><span className="kicker">ACTIVE GOALS</span><h2>Current priorities</h2></div>
            <div className="segment">
              <button type="button" className="active">All</button>
              <button type="button">At risk</button>
              <button type="button">Completed</button>
            </div>
          </div>
          {goals.map((goal) => (
            <button className="goal-detail-row" type="button" key={goal.id}>
              <span className="goal-domain-icon" style={{ color: goal.color, background: `${goal.color}16` }}>
                <Icon name={goal.icon} />
              </span>
              <div>
                <span>{goal.domain}</span>
                <h3>{goal.title}</h3>
                <div className="progress"><i style={{ width: `${goal.progress}%`, background: goal.color }} /></div>
              </div>
              <strong>{goal.progress}%</strong>
              <span className="goal-due"><Icon name="calendar" size={14} />{goal.due}</span>
              <Icon name="chevron" />
            </button>
          ))}
        </Card>
        {aside}
      </div>
      {showForm && (
        <Modal close={() => setShowForm(false)} label="New goal">
          <div className="wizard">
            <span className="kicker">NEW GOAL</span>
            <h2>What do you want to achieve?</h2>
            <p>Create a clear outcome and connect it to a life domain.</p>
            <label className="form-field">
              Goal name
              <input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Run a comfortable 10K" />
            </label>
            <div className="form-grid">
              <label className="form-field">
                Life domain
                <select>
                  <option>Personal growth</option>
                  <option>Physical health</option>
                  <option>Education</option>
                  <option>Career</option>
                </select>
              </label>
              <label className="form-field">
                Target date
                <input type="date" defaultValue={newGoalDefaults.date} />
              </label>
            </div>
            <div className="wizard-actions">
              <Button onClick={() => setShowForm(false)}>Cancel</Button>
              <Button primary onClick={addGoal}>Create goal <Icon name="arrow" /></Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
