export const analysisStats = [
  { label: 'Observations', value: '1,284' },
  { label: 'Tracked metrics', value: '18' },
  { label: 'Data completeness', value: '87%' },
  { label: 'Last analysis', value: 'Today, 8:40 AM' },
]

export const correlationMetrics = ['Sleep', 'Focus', 'Energy', 'Stress', 'Exercise', 'Mood']

export const correlations = [
  [1, .78, .72, -.63, .31, .46],
  [.78, 1, .68, -.52, .42, .59],
  [.72, .68, 1, -.61, .51, .71],
  [-.63, -.52, -.61, 1, -.44, -.69],
  [.31, .42, .51, -.44, 1, .56],
  [.46, .59, .71, -.69, .56, 1],
]

export const correlationSample = { observations: 82, days: 90 }

export const networkNodes = [
  { label: 'Sleep', x: 85, y: 90, radius: 23 },
  { label: 'Focus', x: 210, y: 65, radius: 23 },
  { label: 'Energy', x: 300, y: 135, radius: 28 },
  { label: 'Stress', x: 205, y: 210, radius: 23 },
  { label: 'Exercise', x: 75, y: 220, radius: 23 },
  { label: 'Mood', x: 340, y: 245, radius: 23 },
  { label: 'Screen', x: 380, y: 75, radius: 23 },
]

export const networkEdges = [
  { from: 0, to: 1, polarity: 'pos' },
  { from: 0, to: 2, polarity: 'pos' },
  { from: 0, to: 3, polarity: 'neg' },
  { from: 1, to: 2, polarity: 'pos' },
  { from: 1, to: 6, polarity: 'neg' },
  { from: 2, to: 5, polarity: 'pos' },
  { from: 3, to: 5, polarity: 'neg' },
  { from: 4, to: 5, polarity: 'pos' },
  { from: 2, to: 4, polarity: 'pos' },
]

export const detectedPatterns = [
  {
    icon: 'sleep',
    color: '#60A5FA',
    tag: 'High confidence',
    title: 'Consistent sleep, sustained focus',
    text: 'Your highest-focus days tend to follow bedtimes within 35 minutes of your usual schedule.',
    meta: '82 observations · 90 days',
  },
  {
    icon: 'users',
    color: '#F472B6',
    tag: 'Moderate confidence',
    title: 'Connection lifts mood',
    text: 'Mood ratings average 1.3 points higher on days with at least one social activity.',
    meta: '54 observations · 90 days',
  },
  {
    icon: 'activity',
    color: '#34D399',
    tag: 'Emerging',
    title: 'Movement buffers stress',
    text: 'Exercise days show lower evening stress, even after controlling for workload.',
    meta: '38 observations · 60 days',
  },
] as const

export const relationshipPoints = [
  [55, 170], [82, 154], [104, 143], [121, 150], [150, 126],
  [174, 113], [196, 120], [220, 92], [247, 80], [270, 67],
  [299, 54], [327, 61], [347, 36],
]

export const relationshipFilters = [
  { label: 'Variable X', options: ['Hours of sleep', 'Exercise duration', 'Screen time'] },
  { label: 'Variable Y', options: ['Next-day focused work', 'Energy rating', 'Mood'] },
  { label: 'Time lag', options: ['One day', 'Same day', 'Two days'] },
  { label: 'Date range', options: ['Last 90 days', 'Last 30 days'] },
]

export const relationshipResult = {
  correlation: '+0.78',
  strength: 'Strong positive relationship',
  observations: 82,
  uncertainty: '±0.09',
  interpretation: 'On average, an additional hour of sleep is associated with 42 more minutes of focused work the following day.',
}

export const recommendedAction = {
  title: 'Protect a 7.5-hour sleep opportunity before deep-work days',
  description: 'Your data shows a strong next-day relationship. Measure focused minutes and perceived difficulty for 14 days.',
}
