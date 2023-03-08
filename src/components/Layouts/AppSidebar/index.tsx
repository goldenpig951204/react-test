import useTheme from '../../../hooks/useTheme'
import { useLocation, Link } from 'react-router-dom'
import routes from '../../../routes'
import './index.css'

const AppSidebar = () => {
  const location = useLocation()
  const { sidebarExpanded } = useTheme()

  return (
    <div className={`app-sidebar ${sidebarExpanded ? '' : 'collapsed'}`}>
      <ul className='nav-items'>
        {routes.map((route, idx) => (
          <li className={`nav-item ${location.pathname === route.path ? 'active' : ''}`} key={idx}>
            <Link className='nav-link' to={route.path}>
              <route.icon /> {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppSidebar
