import { initialGoals } from '@/features/goals/mock-data'

export const metricData = [
  { name: 'Sleep', value: '7.6', unit: 'hrs / night', change: '+6%', icon: 'sleep', color: '#60A5FA', points: '0,30 15,25 30,28 45,16 60,20 75,10 90,13 105,6' },
  { name: 'Focused work', value: '28.5', unit: 'hrs / week', change: '+12%', icon: 'focus', color: '#818CF8', points: '0,28 15,32 30,20 45,22 60,12 75,16 90,5 105,10' },
  { name: 'Exercise', value: '5', unit: 'of 7 days', change: '+2 days', icon: 'activity', color: '#34D399', points: '0,30 15,24 30,24 45,18 60,21 75,10 90,12 105,4' },
  { name: 'Energy', value: '7.8', unit: 'out of 10', change: '+0.6', icon: 'bolt', color: '#FBBF24', points: '0,25 15,18 30,23 45,14 60,16 75,8 90,12 105,5' },
  { name: 'Screen time', value: '2.8', unit: 'hrs / day', change: '−8%', icon: 'clock', color: '#FB923C', points: '0,8 15,12 30,10 45,20 60,15 75,24 90,20 105,26' },
  { name: 'Social activity', value: '3.2', unit: 'hrs / week', change: '−14%', icon: 'users', color: '#F472B6', points: '0,10 15,8 30,14 45,12 60,20 75,16 90,25 105,24' },
] as const

export const insights = [
  {
    icon: 'sleep',
    color: '#60A5FA',
    title: 'Sleep drives your best work',
    tag: 'Strong relationship',
    text: ['You averaged ', '32% more focused work', ' on days following at least 7.5 hours of sleep.'],
    meta: '30 days · 24 observations',
  },
  {
    icon: 'activity',
    color: '#F472B6',
    title: 'Your priorities are shifting',
    tag: 'Emerging pattern',
    text: ['Study time is up ', '18%', ', while social activity has declined for three consecutive weeks.'],
    meta: '3 weeks · Updated today',
  },
  {
    icon: 'clock',
    color: '#818CF8',
    title: 'Your productive hours',
    tag: 'Consistent pattern',
    text: ['Your highest-focus sessions occur between ', '8 AM and 11 AM', ', with 1.4× longer sessions.'],
    meta: '90 days · 68 sessions',
  },
] as const

export const activeExperiment = {
  title: 'Morning vs. evening studying',
  question: 'Does studying before 11 AM improve retention?',
  currentDay: 8,
  totalDays: 14,
  progress: 57,
  outcome: 'Quiz performance',
  signal: '+11.2%',
}

export const overviewGoals = initialGoals.slice(0, 3).map((goal) => ({
  ...goal,
  title: goal.id === 'emergency-fund' ? 'Grow emergency fund' : goal.title,
}))

export const weeklyReview = {
  period: 'MAY 5–11',
  score: '8.1',
  highlights: [
    {
      label: 'MOMENTUM',
      tone: 'positive',
      icon: 'arrow',
      title: 'Consistency is compounding',
      text: 'You completed 5 workouts and maintained a stable bedtime on 6 of 7 nights. Both are trending above your 8-week average.',
    },
    {
      label: 'WATCH',
      tone: 'attention',
      icon: 'activity',
      title: 'Social time is narrowing',
      text: 'Connection time fell 22% below your target. Consider protecting one low-pressure social block this week.',
    },
    {
      label: 'NEXT ACTION',
      tone: 'accent',
      icon: 'target',
      title: 'Protect the morning window',
      text: 'Schedule your most demanding study block between 8–11 AM while your current experiment continues.',
    },
  ],
} as const
