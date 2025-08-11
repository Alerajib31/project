import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ];

  return (
    <div className="relative">
      <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full p-1 transition-colors duration-200">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value as any)}
            className={`p-2 rounded-full transition-all duration-200 ${
              theme === value
                ? 'bg-white dark:bg-neutral-700 text-accent-600 shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400'
            }`}
            title={label}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;