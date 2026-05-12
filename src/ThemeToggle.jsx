import React, { useContext } from 'react';
import { FormContext } from './FormContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(FormContext);

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeToggle;
