import styles from './ThemeSwitcher.module.scss';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);
	const themeText = isDark ? 'Dark' : 'Light';
	const ThemeIcon = isDark ? SunIcon : MoonIcon;

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	return (
		<button
			aria-label='Switch Theme'
			className={styles.themeSwitcher}
			onClick={() => setIsDark(!isDark)}>
			<span>{themeText}</span>
			<ThemeIcon className={styles.icon} />
		</button>
	);
};
