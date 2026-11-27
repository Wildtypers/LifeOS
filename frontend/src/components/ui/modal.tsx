import type { ReactNode } from 'react'
import { Icon } from './icon'

type ModalProps = {
  children: ReactNode
  close: () => void
  label: string
}

export function Modal({ children, close, label }: ModalProps) {
  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={label} onMouseDown={event => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Close dialog" onClick={close}>
          <Icon name="x" />
        </button>
        {children}
      </div>
    </div>
  )
}
