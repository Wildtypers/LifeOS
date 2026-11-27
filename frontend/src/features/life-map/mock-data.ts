import type { IconName } from '@/components/ui/icon'

export type LifeDomain = {
  name: string
  value: number
  prev: number
  target: number
  color: string
}

type DomainDetails = LifeDomain & {
  icon: IconName
  priority: 'High' | 'Medium'
  goal: string
}

export const domains: readonly DomainDetails[] = [
  { name: 'Physical health', value: 78, prev: 70, target: 88, color: '#34D399', icon: 'heart', priority: 'Medium', goal: 'Fitness base' },
  { name: 'Education', value: 85, prev: 79, target: 92, color: '#60A5FA', icon: 'book', priority: 'High', goal: 'CS specialization' },
  { name: 'Career', value: 72, prev: 69, target: 85, color: '#A78BFA', icon: 'layers', priority: 'Medium', goal: 'Portfolio refresh' },
  { name: 'Finances', value: 65, prev: 62, target: 80, color: '#FBBF24', icon: 'wallet', priority: 'Medium', goal: 'Savings buffer' },
  { name: 'Relationships', value: 54, prev: 61, target: 75, color: '#F472B6', icon: 'users', priority: 'High', goal: 'Connection time' },
  { name: 'Mental well-being', value: 71, prev: 67, target: 82, color: '#2DD4BF', icon: 'brain', priority: 'Medium', goal: 'Stable energy' },
  { name: 'Personal growth', value: 82, prev: 74, target: 90, color: '#818CF8', icon: 'sparkles', priority: 'Medium', goal: 'Read 24 books' },
  { name: 'Lifestyle', value: 63, prev: 66, target: 78, color: '#FB923C', icon: 'sun', priority: 'Medium', goal: 'Protected downtime' },
]

export const lifeProfile = {
  score: '71.3',
  monthlyIncrease: '+4.2',
}
