import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { PageIntro } from '@/components/ui/page-intro'

import { AppearanceOptions, WeeklyReviewToggle } from './settings-controls'
import { SettingsData } from './settings-data'

const settingsSections = [
  'Profile', 'Appearance', 'Life domains', 'Custom metrics', 'Dashboard',
  'Daily check-in', 'Notifications', 'Privacy', 'Data management',
]

export function Settings() {
  return (
    <>
      <PageIntro
        eyebrow="SETTINGS"
        title="Settings & data"
        text="Configure your experience, metrics, and privacy preferences."
      >
        <div className="settings-layout">
          <aside>
            {settingsSections.map((section) => (
              <button type="button" className={section === 'Appearance' ? 'active' : ''} key={section}>
                {section}<Icon name="chevron" size={15} />
              </button>
            ))}
          </aside>
          <div>
            <Card>
              <span className="kicker">APPEARANCE</span>
              <h2>Choose your interface</h2>
              <p className="settings-copy">Select how LifeOS looks on this device.</p>
              <AppearanceOptions />
            </Card>
            <Card>
              <span className="kicker">PREFERENCES</span>
              <div className="setting-row">
                <div><h3>Compact data density</h3><p>Show more information in tables and analytical views.</p></div>
                <button type="button" className="toggle active" aria-label="Compact data density" aria-pressed><i /></button>
              </div>
              <div className="setting-row">
                <div><h3>Weekly review email</h3><p>Receive your performance summary every Monday.</p></div>
                <WeeklyReviewToggle />
              </div>
              <div className="setting-row">
                <div><h3>Reduce motion</h3><p>Minimize non-essential interface transitions.</p></div>
                <button type="button" className="toggle" aria-label="Reduce motion" aria-pressed={false}><i /></button>
              </div>
            </Card>
          </div>
        </div>
      </PageIntro>
      <SettingsData />
    </>
  )
}
