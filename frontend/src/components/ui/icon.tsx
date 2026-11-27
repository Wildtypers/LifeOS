import type { ReactNode } from 'react'

export type IconName =
  | 'grid' | 'radar' | 'brain' | 'book' | 'flask' | 'layers' | 'target'
  | 'settings' | 'search' | 'bell' | 'plus' | 'sun' | 'moon' | 'chevron'
  | 'calendar' | 'sparkles' | 'check' | 'arrow' | 'clock' | 'heart'
  | 'activity' | 'wallet' | 'users' | 'focus' | 'sleep' | 'bolt' | 'menu'
  | 'x' | 'sliders' | 'more'

const paths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  radar: <><path d="M12 3 21 9.5l-3.4 10.6H6.4L3 9.5 12 3Z"/><path d="m12 8 4.3 3.1-1.6 5.1H9.3l-1.6-5.1L12 8Z"/><path d="M12 3v5M21 9.5l-4.7 1.6M17.6 20.1l-2.9-3.9M6.4 20.1l2.9-3.9M3 9.5l4.7 1.6"/></>,
  brain: <><path d="M9.5 4.5A3 3 0 0 0 5 7a3 3 0 0 0-1 5.2A3.5 3.5 0 0 0 8.5 18H10V6.5a2 2 0 0 0-.5-2Z"/><path d="M14.5 4.5A3 3 0 0 1 19 7a3 3 0 0 1 1 5.2 3.5 3.5 0 0 1-4.5 5.8H14V6.5a2 2 0 0 1 .5-2ZM8 10H5m3 4H6m10-4h3m-3 4h2"/></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"/></>,
  flask: <><path d="M9 3h6m-5 0v6l-5.5 9A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7.4 14h9.2"/></>,
  layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63 1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9 1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>, sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  moon: <path d="M20.8 15.2A9 9 0 1 1 8.8 3.2a7 7 0 0 0 12 12Z"/>,
  chevron: <path d="m9 18 6-6-6-6"/>, calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  sparkles: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z"/><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 14l.7 2.3L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.7L5 14Z"/></>,
  check: <path d="m5 12 4 4L19 6"/>, arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>, clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>,
  activity: <path d="M3 12h4l2-7 4 14 2-7h6"/>, wallet: <><path d="M4 6h14a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13"/><path d="M15 12h5"/></>,
  users: <><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0m0-16a4 4 0 0 1 0 7m2 2a6 6 0 0 1 4 6"/></>,
  focus: <><circle cx="12" cy="12" r="3"/><path d="M3 8V5a2 2 0 0 1 2-2h3m8 0h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/></>,
  sleep: <><path d="M3 12h8a3 3 0 0 1 3 3v4H3v-7Z"/><path d="M3 5v14m11-6h4a3 3 0 0 1 3 3v3h-7"/></>,
  bolt: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z"/>, menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  x: <path d="m6 6 12 12M18 6 6 18"/>, sliders: <><path d="M4 7h10m4 0h2M4 17h2m4 0h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></>,
  more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
}

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[name]}</svg>
}
