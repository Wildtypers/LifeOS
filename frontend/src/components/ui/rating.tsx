import { useId } from 'react'

type RatingProps = {
  label: string
  value: number
  set: (value: number) => void
}

export function Rating({ label, value, set }: RatingProps) {
  const id = useId()

  return (
    <div className="rating">
      <div>
        <label htmlFor={id}>{label}</label>
        <b>{value}<small>/10</small></b>
      </div>
      <input id={id} type="range" min="1" max="10" value={value} onChange={event => set(event.target.valueAsNumber)} />
      <div className="range-labels"><span>Low</span><span>High</span></div>
    </div>
  )
}
