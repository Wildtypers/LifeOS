'use client'

import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'
import { managementLinks, workspaceLinks } from './navigation'
import { QuickCheckin } from './quick-checkin'
import { WorkspaceContext } from './workspace-context'
import { WorkspaceHeader } from './workspace-header'
import { WorkspaceSidebar } from './workspace-sidebar'

const links = [...workspaceLinks, ...managementLinks]

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [light, setLight] = useState(false)
  const [checkin, setCheckin] = useState(false)
  const current = links.find(link => link.path === pathname)?.label ?? 'Overview'

  return (
    <WorkspaceContext.Provider value={{ openCheckin: () => setCheckin(true) }}>
      <div className={light ? 'app light' : 'app'}>
        <WorkspaceSidebar
          pathname={pathname}
          collapsed={collapsed}
          light={light}
          toggleTheme={() => setLight(value => !value)}
          toggleSidebar={() => setCollapsed(value => !value)}
        />
        <main className={collapsed ? 'main collapsed' : 'main'}>
          <WorkspaceHeader current={current} />
          {children}
        </main>
        {checkin && <QuickCheckin close={() => setCheckin(false)} />}
      </div>
    </WorkspaceContext.Provider>
  )
}
