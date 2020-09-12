import { useEffect, useState } from 'react';
import { DARK_THEME, LIGHT_THEME, THEME_STORAGE_KEY } from '../constants';
import { storage } from '../storage';

const useDarkMode = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const setMode = (mode) => {
    storage.set(THEME_STORAGE_KEY, mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    const themeToSwitch = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setMode(themeToSwitch);
  };

  useEffect(() => {
    const storageTheme = storage.get(THEME_STORAGE_KEY);
    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);

  return [theme, themeToggler];
};

export default useDarkMode;
