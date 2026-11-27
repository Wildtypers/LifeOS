import type { IconName } from '@/components/ui/icon'

export type WorkspaceLink = {
  label: string
  path: string
  icon: IconName
}

export const workspaceLinks: readonly WorkspaceLink[] = [
  { label: 'Overview', path: '/dashboard', icon: 'grid' },
  { label: 'Life Map', path: '/life-map', icon: 'radar' },
  { label: 'Intelligence', path: '/intelligence', icon: 'brain' },
  { label: 'Life Journal', path: '/journal', icon: 'book' },
  { label: 'Life Lab', path: '/lab', icon: 'flask' },
  { label: 'Life Architect', path: '/architect', icon: 'layers' },
]

export const managementLinks: readonly WorkspaceLink[] = [
  { label: 'Goals', path: '/goals', icon: 'target' },
  { label: 'Settings', path: '/settings', icon: 'settings' },
]
