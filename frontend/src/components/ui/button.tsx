import Link from 'next/link'
import type { ComponentProps, ComponentPropsWithoutRef } from 'react'

function buttonClassName(primary: boolean, className: string) {
  return ['button', primary && 'primary', className].filter(Boolean).join(' ')
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & { primary?: boolean }

export function Button({ primary = false, className = '', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClassName(primary, className)} {...props} />
}

type ButtonLinkProps = ComponentProps<typeof Link> & { primary?: boolean }

export function ButtonLink({ primary = false, className = '', ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName(primary, className)} {...props} />
}
