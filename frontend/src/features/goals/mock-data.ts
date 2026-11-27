import type { IconName } from '@/components/ui/icon'

type Goal = {
  id: string
  title: string
  domain: string
  progress: number
  due: string
  color: string
  icon: IconName
}

export const initialGoals: readonly Goal[] = [
  { id: 'cs-specialization', title: 'Complete CS specialization', domain: 'Education', progress: 68, due: 'Jun 28', color: '#60A5FA', icon: 'book' },
  { id: 'fitness-base', title: 'Build a consistent fitness base', domain: 'Physical health', progress: 74, due: 'Jul 15', color: '#34D399', icon: 'activity' },
  { id: 'emergency-fund', title: 'Grow emergency fund to $12k', domain: 'Finances', progress: 52, due: 'Sep 01', color: '#FBBF24', icon: 'wallet' },
  { id: 'connection-time', title: 'Protect weekly connection time', domain: 'Relationships', progress: 38, due: 'Aug 30', color: '#F472B6', icon: 'users' },
]

export const newGoalDefaults = {
  domain: 'Personal growth',
  progress: 0,
  due: 'Oct 01',
  date: '2025-10-01',
  color: '#818CF8',
  icon: 'users',
} as const

export const goalSummary = [
  { label: 'On track', value: '3' },
  { label: 'Due this quarter', value: '2' },
  { label: 'Average progress', value: '58%' },
]

export const nextMilestone = {
  date: { day: '18', month: 'MAY', year: '2025' },
  title: 'Submit capstone project draft',
  goal: 'Complete CS specialization',
}

export const goalAllocation = [
  { domain: 'Education', share: 42, color: '#60A5FA', legend: 'Education' },
  { domain: 'Physical health', share: 28, color: '#34D399', legend: 'Health' },
  { domain: 'Finances', share: 18, color: '#FBBF24' },
  { domain: 'Other', share: 12, color: '#64748B' },
]
