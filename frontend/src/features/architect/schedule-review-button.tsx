'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export function ScheduleReviewButton() {
  const [reviewed, setReviewed] = useState(false)

  return (
    <Button primary onClick={() => setReviewed(true)}>
      {reviewed ? <><Icon name="check" /> Review scheduled</> : <>Begin May review <Icon name="arrow" /></>}
    </Button>
  )
}
