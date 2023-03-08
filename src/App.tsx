import { useEffect } from "react";
import useTheme from "./hooks/useTheme";
import AppHeader from './components/Layouts/AppHeader'
import AppSidebar from './components/Layouts/AppSidebar';
import AppContent from './components/Layouts/AppContent';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const { mode, setting } = useTheme();

  useEffect(() => {
    const initColor = () => {
      document.documentElement.style.setProperty('--appBarBgColor', setting.appBarBgColor);
      document.documentElement.style.setProperty('--appBarColor', setting.appBarColor);
      document.documentElement.style.setProperty('--btnBgColor', setting.btnBgColor);
      document.documentElement.style.setProperty('--btnColor', setting.btnColor);
      document.documentElement.style.setProperty('--appLeftBgColor', setting.appLeftBgColor);
      document.documentElement.style.setProperty('--appLeftColor', setting.appLeftColor);
      document.documentElement.style.setProperty('--appRightBgColor', setting.appRightBgColor);
      document.documentElement.style.setProperty('--appRightColor', setting.appRightColor);
      document.documentElement.style.setProperty('--appModalBgColor', setting.appModalBgColor);
    }
    initColor();
  }, [mode, setting]);

  return (
    <div className="page-wrap-container">
      <Router>
        <AppHeader />
        <div className="page-wrap-content">
          <AppSidebar />
          <AppContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
