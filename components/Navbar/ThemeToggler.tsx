import { clickableIcon } from '@styles/common';
import { Moon } from '../common/icons';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };
  return (
    <div
      className={clickableIcon()}
      onClick={toggleTheme}
      title="Enable Dark Mode"
      aria-label="Enable Dark Mode"
    >
      <Moon width="18" />
    </div>
  );
}

export default ThemeToggler;
