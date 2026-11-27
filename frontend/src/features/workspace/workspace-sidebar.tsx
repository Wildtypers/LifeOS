import Link from 'next/link'
import { BrandMark } from '@/components/ui/brand-mark'
import { Icon } from '@/components/ui/icon'
import { managementLinks, workspaceLinks, type WorkspaceLink } from './navigation'

type SidebarLinksProps = {
  label: string
  links: readonly WorkspaceLink[]
  pathname: string
  collapsed: boolean
  className?: string
}

function SidebarLinks({ label, links, pathname, collapsed, className }: SidebarLinksProps) {
  return (
    <nav aria-label={label} className={className}>
      {!collapsed && <label>{label.toUpperCase()}</label>}
      {links.map(({ label, path, icon }) => {
        const active = pathname === path
        return (
          <Link
            key={path}
            href={path}
            title={label}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
            className={active ? 'active' : undefined}
          >
            <Icon name={icon} />
            {!collapsed && <span>{label}</span>}
          </Link>
        )
      })}
    </nav>
  )
}

type WorkspaceSidebarProps = {
  pathname: string
  collapsed: boolean
  light: boolean
  toggleTheme: () => void
  toggleSidebar: () => void
}

export function WorkspaceSidebar({ pathname, collapsed, light, toggleTheme, toggleSidebar }: WorkspaceSidebarProps) {
  return (
    <aside className={collapsed ? 'sidebar collapsed' : 'sidebar'}>
      <div className="brand">
        <BrandMark />
        {!collapsed && <b>LifeOS</b>}
      </div>
      {!collapsed && (
        <button className="profile-select" type="button">
          <span>AP</span>
          <div><b>Alex Parker</b><small>Personal workspace</small></div>
          <Icon name="chevron" size={14} />
        </button>
      )}
      <SidebarLinks label="Workspace" links={workspaceLinks} pathname={pathname} collapsed={collapsed} />
      <SidebarLinks label="Manage" links={managementLinks} pathname={pathname} collapsed={collapsed} className="secondary" />
      <div className="sidebar-bottom">
        <button type="button" onClick={toggleTheme} title="Toggle appearance" aria-label={light ? 'Dark mode' : 'Light mode'}>
          <Icon name={light ? 'moon' : 'sun'} />
          {!collapsed && <span>{light ? 'Dark mode' : 'Light mode'}</span>}
        </button>
        <button type="button" onClick={toggleSidebar} title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          <Icon name="menu" />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  )
}
