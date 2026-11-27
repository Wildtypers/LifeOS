import { domains } from '@/features/life-map/mock-data'

export const strategicRoadmap = [
  {
    status: 'Planned',
    goals: [
      { title: 'Complete portfolio refresh', domain: domains[0], progress: 12, due: 'Jun 28', milestones: 2 },
      { title: 'Build 3-month savings buffer', domain: domains[1], progress: 12, due: 'Jun 28', milestones: 3 },
    ],
  },
  {
    status: 'In progress',
    goals: [
      { title: 'Complete CS specialization', domain: domains[1], progress: 68, due: 'Jun 28', milestones: 2 },
      { title: 'Build a consistent fitness base', domain: domains[2], progress: 74, due: 'Jun 28', milestones: 3 },
    ],
  },
  {
    status: 'Completed',
    goals: [
      { title: 'Define personal operating principles', domain: domains[2], progress: 100, due: 'Apr 30', milestones: 2 },
    ],
  },
  {
    status: 'Paused',
    goals: [
      { title: 'Launch weekly newsletter', domain: domains[3], progress: 35, due: 'Jun 28', milestones: 2 },
    ],
  },
]

export const vision = {
  title: 'A grounded, capable, and connected life',
  description: 'I’ve built durable systems for focused work, physical energy, financial stability, and meaningful relationships—without sacrificing curiosity or rest.',
  alignment: 74,
}

type RoadmapItem = {
  title: string
  description: string
  color?: string
}

export const roadmapLevels: { label: string; cadence: 'annual' | 'quarterly' | 'weekly'; items: RoadmapItem[] }[] = [
  {
    label: '1 YEAR VISION',
    cadence: 'annual',
    items: [
      { title: 'Build a grounded, capable, connected life', description: `${vision.alignment}% aligned`, color: '#818CF8' },
    ],
  },
  {
    label: 'QUARTERLY OBJECTIVES',
    cadence: 'quarterly',
    items: [
      { title: 'Complete core specialization', description: '2 goals · 68%', color: '#60A5FA' },
      { title: 'Establish fitness baseline', description: '3 goals · 74%', color: '#34D399' },
      { title: 'Build financial resilience', description: '2 goals · 52%', color: '#FBBF24' },
    ],
  },
  {
    label: 'THIS WEEK',
    cadence: 'weekly',
    items: [
      { title: 'Submit capstone draft', description: 'Education · 4h' },
      { title: 'Complete three workouts', description: 'Health · 2.5h' },
      { title: 'Automate savings transfer', description: 'Finances · 20m' },
    ],
  },
]

export const weeklyActionPlan = {
  dates: 'May 12–18',
  plannedHours: 11.5,
  actions: [
    { day: 'Mon', title: 'Deep work · Algorithms', time: '8:30 AM', domain: 'Education', color: domains[0].color },
    { day: 'Tue', title: 'Strength session', time: '5:30 PM', domain: 'Health', color: domains[1].color },
    { day: 'Wed', title: 'Experiment observation', time: '6:30 PM', domain: 'Life Lab', color: domains[2].color },
    { day: 'Thu', title: 'Capstone draft', time: '9:00 AM', domain: 'Education', color: domains[3].color },
    { day: 'Sat', title: 'Connection time', time: '6:00 PM', domain: 'Relationships', color: domains[4].color },
  ],
}
