import { domains } from '@/features/life-map/mock-data'

export const customMetrics = [
  { name: 'Deep work quality', type: 'Rating scale', frequency: 'Per session', target: '≥ 8/10', color: domains[1].color },
  { name: 'Learning retention', type: 'Percentage', frequency: 'Weekly', target: '≥ 85%', color: domains[2].color },
  { name: 'Unplanned spending', type: 'Currency', frequency: 'As needed', target: '≤ $40', color: domains[3].color },
  { name: 'Connection time', type: 'Duration', frequency: 'Weekly', target: '≥ 4h', color: domains[4].color },
]

export const privacyPreferences = [
  { name: 'Statistical relationship analysis', enabled: true, description: 'Uses your local LifeOS records' },
  { name: 'Simulated AI-generated summaries', enabled: true, description: 'Uses your local LifeOS records' },
  { name: 'Anonymous product analytics', enabled: false, description: 'Share anonymous interaction data' },
]
