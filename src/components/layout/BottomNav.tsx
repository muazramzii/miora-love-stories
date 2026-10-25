import { tabs } from '../../data/navigation'
import Icon from '../ui/Icon'
import './BottomNav.css'

type BottomNavProps = {
  activeId: string
}

/** Mobile-only quick navigation, shown below 768px. */
export default function BottomNav({ activeId }: BottomNavProps) {
  return (
    <nav className="tabbar" aria-label="Quick sections">
      <ul className="tabbar__list">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              className="tabbar__link"
              href={`#${tab.id}`}
              aria-current={tab.id === activeId ? 'location' : undefined}
            >
              <Icon name={tab.icon} size={22} />
              <span>{tab.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
