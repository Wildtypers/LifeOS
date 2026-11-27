import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Modal } from '@/components/ui/modal'
import { Rating } from '@/components/ui/rating'

export function QuickCheckin({ close }: { close: () => void }) {
  const [mood, setMood] = useState(7)
  const [energy, setEnergy] = useState(8)

  return (
    <Modal close={close} label="Daily check-in">
      <div className="quick-checkin">
        <span className="kicker">DAILY CHECK-IN</span>
        <h2>Take a moment to check in</h2>
        <p>This usually takes less than a minute.</p>
        <Rating label="Mood" value={mood} set={setMood} />
        <Rating label="Energy" value={energy} set={setEnergy} />
        <div className="wizard-actions">
          <Button onClick={close}>Not now</Button>
          <Button primary onClick={close}>Save check-in <Icon name="check" /></Button>
        </div>
      </div>
    </Modal>
  )
}
