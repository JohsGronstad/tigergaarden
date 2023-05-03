import { useEffect, useState } from 'react';

function useDarkModeClass() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkModeClass = () => {
      const hasDarkClass = document.body.classList.contains('dark');
      setIsDark(hasDarkClass);
    };

    // Check initially
    checkDarkModeClass();

    // Set up an observer to watch for changes in the body class list
    const observer = new MutationObserver(checkDarkModeClass);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDark;
}

export default useDarkModeClass;
