import './index.css'
import useTheme from '../../../hooks/useTheme'
import { Suspense } from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import routes from '../../../routes'

const AppContent = () => {
  const { sidebarExpanded } = useTheme()

  return (
    <div className={`app-content ${sidebarExpanded ? '' : 'collapsed'}`}>
      <Suspense>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={<route.element />} />
          ))}
          <Route path="/*" element={<Navigate to="/page1" replace />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default AppContent
