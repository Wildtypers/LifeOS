import { useId } from 'react'

export function Sparkline({ points, color }: { points: string; color: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 105 38" preserveAspectRatio="none" className="sparkline" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity=".28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`${points} 105,38 0,38`} fill={`url(#${gradientId})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  )
}
