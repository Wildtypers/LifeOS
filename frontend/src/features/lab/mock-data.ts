export const experimentTabs = [
  { label: 'Active', count: 2 },
  { label: 'Suggested', count: 5 },
  { label: 'Completed', count: 7 },
  { label: 'Archived', count: 1 },
] as const

export const featuredExperiment = {
  day: 8,
  totalDays: 14,
  progress: 57,
  title: 'Does studying in the morning improve retention?',
  question: 'Does studying in the morning improve my retention?',
  hypothesis: 'Studying before 11 AM may improve quiz performance compared with studying after 6 PM.',
  comparisons: [
    { label: 'Morning studying', percent: 86 },
    { label: 'Evening studying', percent: 72 },
  ],
  preliminarySignal: 'Morning sessions are showing a 14-point lift. Sample size is still small (n=8).',
  health: {
    status: 'On track',
    score: '92%',
    note: 'Excellent adherence. You’ve logged all scheduled observations this week.',
    checkins: '8/8',
    completeness: '100%',
  },
  next: {
    title: 'Evening study condition',
    when: 'Today, 6:30–8:00 PM',
  },
}

export const suggestedExperiments = [
  {
    icon: 'sleep',
    color: '#60A5FA',
    title: 'Consistent vs. variable bedtime',
    tag: 'Sleep · Focus',
    text: 'Test whether a bedtime within a 30-minute window improves next-day energy.',
    meta: 'Based on 82 observations',
  },
  {
    icon: 'focus',
    color: '#818CF8',
    title: 'Phone-free mornings',
    tag: 'Focus · Screen time',
    text: 'Measure whether delaying phone use until after your first work block protects focus.',
    meta: 'Based on a −0.52 correlation',
  },
  {
    icon: 'clock',
    color: '#FBBF24',
    title: '50 vs. 90 minute sessions',
    tag: 'Productivity',
    text: 'Compare focus quality and output across two deep-work session lengths.',
    meta: 'Based on 68 focus sessions',
  },
] as const

export const completedExperiments = [
  {
    icon: 'check',
    status: 'supported',
    statusLabel: 'Supports hypothesis',
    completed: 'Apr 28',
    title: 'Consistent bedtime and next-day energy',
    description: 'A bedtime within a 30-minute window improved average morning energy from 6.4 to 7.6.',
    baseline: { label: 'Baseline', value: '6.4' },
    intervention: { label: 'Intervention', value: '7.6' },
    change: { label: 'Change', value: '+18.8%' },
    completeness: '93%',
    action: 'View result',
  },
  {
    icon: 'activity',
    status: 'inconclusive',
    statusLabel: 'Inconclusive',
    completed: 'Mar 16',
    title: '50 vs. 90 minute focus sessions',
    description: 'Longer sessions increased output but also produced higher perceived fatigue. More observations are needed.',
    baseline: { label: '50 min', value: '7.8' },
    intervention: { label: '90 min', value: '7.9' },
    change: { label: 'Difference', value: '+1.3%' },
    completeness: '71%',
    action: 'Repeat experiment',
  },
] as const
