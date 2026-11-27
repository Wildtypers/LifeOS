import { networkEdges, networkNodes } from './mock-data'

export function NetworkGraph() {
  return (
    <svg viewBox="0 0 460 300" className="network" role="img" aria-label="Network of connected life signals">
      {networkEdges.map(({ from, to, polarity }) => (
        <line
          key={`${from}-${to}`}
          x1={networkNodes[from].x}
          y1={networkNodes[from].y}
          x2={networkNodes[to].x}
          y2={networkNodes[to].y}
          className={polarity}
        />
      ))}
      {networkNodes.map(({ label, x, y, radius }) => (
        <g className="network-node" key={label}>
          <circle cx={x} cy={y} r={radius}/>
          <text x={x} y={y + 4} textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  )
}
