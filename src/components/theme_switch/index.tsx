import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/offline';
import iconSun from '@iconify-icons/carbon/sun';
import iconMoon from '@iconify-icons/carbon/moon';

import './index.scss';

const win: any = window;

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setTheme(win.__theme);
  }, [win.__theme]);

  const handleChange = () => {
    const isDark = theme === 'dark';
    const _theme = isDark ? 'light' : 'dark';
    setDark(isDark);
    setTheme(_theme);
    win.__setPreferredTheme(_theme);
  };

  return (
    <Icon
      className="dev-theme-toggle"
      onClick={handleChange}
      icon={isDark ? iconSun : iconMoon}
      fontSize="20"
      color="var(--icon)"
    />
  );
};

export default ThemeSwitch;
