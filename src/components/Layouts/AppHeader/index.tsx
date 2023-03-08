import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import useTheme from "../../../hooks/useTheme";
import "./index.css"

const AppHeader = () => {
  const { sidebarExpanded, updateSidebar } = useTheme();

  const handleSidebarStatus = () => {
    updateSidebar(!sidebarExpanded);
  }

  return (
    <div className="app-header">
      <button className="collapse-menu-btn" onClick={handleSidebarStatus}>
        <FontAwesomeIcon icon={solid('bars')} className="nav-link-icon" />
      </button>
      <h1 className="logo-brand">Pioneering Programmers</h1>
    </div>
  )
}

export default AppHeader