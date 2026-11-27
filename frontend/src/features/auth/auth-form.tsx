'use client'

import { useState } from 'react'

import { ButtonLink } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

const authModes = {
  signin: {
    eyebrow: 'WELCOME BACK',
    heading: 'Sign in to LifeOS',
    description: 'Continue to your personal intelligence workspace.',
    action: 'Sign in',
    destination: '/dashboard',
  },
  create: {
    eyebrow: 'CREATE YOUR WORKSPACE',
    heading: 'Begin understanding your life',
    description: 'No credit card. Your data stays yours.',
    action: 'Create account',
    destination: '/onboarding',
  },
  reset: {
    eyebrow: 'ACCOUNT RECOVERY',
    heading: 'Reset your password',
    description: 'We’ll send a secure reset link to your email.',
    action: 'Send reset link',
    destination: '/dashboard',
  },
} as const

export function AuthForm() {
  const [mode, setMode] = useState<keyof typeof authModes>('signin')
  const { eyebrow, heading, description, action, destination } = authModes[mode]

  return (
    <div className="auth-form">
      <span className="kicker">{eyebrow}</span>
      <h1>{heading}</h1>
      <p>{description}</p>
      <label className="form-field">Email address<input type="email" placeholder="alex@example.com" /></label>
      {mode !== 'reset' && (
        <label className="form-field">Password<input type="password" placeholder="Enter your password" /></label>
      )}
      {mode === 'signin' && (
        <button type="button" className="forgot" onClick={() => setMode('reset')}>Forgot password?</button>
      )}
      <ButtonLink href={destination} primary className="full">{action} <Icon name="arrow" /></ButtonLink>
      <div className="auth-switch">
        {mode === 'signin' && (
          <>New to LifeOS? <button type="button" onClick={() => setMode('create')}>Create an account</button></>
        )}
        {mode === 'create' && (
          <>Already have an account? <button type="button" onClick={() => setMode('signin')}>Sign in</button></>
        )}
        {mode === 'reset' && (
          <button type="button" onClick={() => setMode('signin')}>Back to sign in</button>
        )}
      </div>
      <small className="prototype-note">Prototype authentication only. No account service is connected.</small>
    </div>
  )
}
