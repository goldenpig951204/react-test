import { createContext, useEffect, useState, ReactNode } from 'react'

const theme = {
  dark: {
    appBarBgColor: "#c0c0c0",
    appBarColor: "#2f4f4f",
    btnBgColor: "#f0f8ff",
    btnColor: "#800080",
    appLeftBgColor: "#ffffff",
    appLeftbarColor: "#696969",
    appRightBgColor: "#008080",
    appRightColor: "#ffffff",
    appModalBgColor: "#808080",
  },
  light: {
    appBarBgColor: "#808080",
    appBarColor: "#ff0ff0",
    btnBgColor: "#cc0000",
    btnColor: "#ffffff",
    appLeftBgColor: "#cecece",
    appLeftColor: "#2f4f4f",
    appRightBgColor: "#ffffff",
    appRightColor: "#000000",
    appModalBgColor: "#c0c0c0",
  }
}

interface IProvider {
  mode: string
  setting: {
    appBarBgColor: string,
    appBarColor: string,
    btnBgColor: string,
    btnColor: string,
    appLeftBgColor: string,
    appLeftColor: string,
    appRightBgColor: string,
    appRightColor: string
    appModalBgColor: string,
  },
  sidebarExpanded: boolean,
  updateTheme: (mode: string) => void,
  updateSidebar: (sidebarExpanded: boolean) => void
}

const defaultProvider: IProvider = {
  mode: 'dark',
  setting: {
    appBarBgColor: theme.light.appBarBgColor,
    appBarColor: theme.light.appBarColor,
    btnBgColor: theme.light.btnBgColor,
    btnColor: theme.light.btnColor,
    appLeftBgColor: theme.light.appLeftBgColor,
    appLeftColor: theme.light.appLeftColor,
    appRightBgColor: theme.light.appRightBgColor,
    appRightColor: theme.light.appRightColor,
    appModalBgColor: theme.light.appModalBgColor,
  },
  sidebarExpanded: localStorage.getItem("sidebarExpanded") === "true",
  updateTheme: mode => null,
  updateSidebar: sidebarExpanded => null
}

const ThemeContext = createContext(defaultProvider)

interface Props {
  children: ReactNode
}

const ThemeProvider = (props: Props) => {
  const { children } = props
  const [mode, setMode] = useState < string > (defaultProvider.mode);
  const [setting, setSetting] = useState < any > (defaultProvider.setting);
  const [sidebarExpanded, setSidebarExpanded] = useState < boolean > (defaultProvider.sidebarExpanded);

  useEffect(() => {
    const _mode =
      localStorage.getItem('mode') !== null
        ? localStorage.getItem('mode')
        : 'dark'
    if (_mode) {
      setMode(_mode)
      if (_mode === 'dark') {
        setSetting(theme['dark'])
      } else {
        setSetting(theme['light'])
      }
    }
  }, [mode])

  useEffect(() => {
    const sidebar = localStorage.getItem("sidebarExpanded");
    setSidebarExpanded((sidebar === "true"));
  }, [])

  const updateTheme = (mode: string) => {
    localStorage.setItem('mode', mode)
    setMode(mode)
  }

  const updateSidebar = (mode: boolean) => {
    localStorage.setItem("sidebarExpanded", mode.toString());
    setSidebarExpanded(mode)
  }

  const values = {
    mode,
    setting,
    sidebarExpanded,
    updateTheme,
    updateSidebar,
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
