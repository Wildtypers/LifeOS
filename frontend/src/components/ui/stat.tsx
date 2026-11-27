export function Stat({ label, value }: { label: string; value: string }) {
  return <div><span>{label}</span><b>{value}</b></div>
}
