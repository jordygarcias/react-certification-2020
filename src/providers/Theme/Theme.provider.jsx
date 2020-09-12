import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from '../../utils/hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../components/Theme/Themes';
import { LIGHT_THEME } from '../../utils/constants';

const ThemeToggleContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without a ThemeProvider!`);
  }
  return context;
}

function MyThemeProvider({ children }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === LIGHT_THEME ? lightTheme : darkTheme;

  return (
    <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}

export { useTheme };
export default MyThemeProvider;
