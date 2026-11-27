import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon, type IconName } from '@/components/ui/icon'

const quickActions: readonly { icon: IconName; label: string; path?: string }[] = [
  { icon: 'activity', label: 'Log activity' },
  { icon: 'focus', label: 'Record metric' },
  { icon: 'book', label: 'Write journal entry', path: '/journal' },
  { icon: 'target', label: 'Create goal' },
  { icon: 'flask', label: 'Start experiment' },
]

export function WorkspaceHeader({ current }: { current: string }) {
  const router = useRouter()
  const [quick, setQuick] = useState(false)

  function selectAction(path?: string) {
    setQuick(false)
    if (path) router.push(path)
  }

  return (
    <header className="topbar">
      <div className="breadcrumb"><span>LifeOS</span><Icon name="chevron" size={14} /><b>{current}</b></div>
      <div className="top-actions">
        <label className="search">
          <Icon name="search" />
          <input placeholder="Search anything..." aria-label="Search anything" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification" type="button" aria-label="Notifications"><Icon name="bell" /><i /></button>
        <div className="quick-wrap">
          <Button primary aria-expanded={quick} onClick={() => setQuick(open => !open)}><Icon name="plus" /> Quick add</Button>
          {quick && (
            <div className="quick-menu">
              {quickActions.map(({ icon, label, path }) => (
                <button key={label} type="button" onClick={() => selectAction(path)}>
                  <span><Icon name={icon} /></span>{label}<small>⌘{label[0]}</small>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
