import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Button } from 'design-system/button';

const HomeView: React.FC = () => {
  return (
    <main>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Button
            i={2}
            title="Change theme"
            rfull
            onClick={() => toggleTheme(theme === `dark` ? `light` : `dark`)}
          >
            {theme === `light` ? (
              <BiMoon className="text-2xl" />
            ) : (
              <BiSun className="text-2xl" />
            )}
          </Button>
        )}
      </ThemeToggler>
    </main>
  );
};

export default HomeView;
