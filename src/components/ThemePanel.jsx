function ThemePanel({ theme, setTheme, variant = ""}) {
    return (
        <div className={`themeBar current-${theme} ${variant}`}>
            <nav aria-label="Theme switcher">
                <ul>
                    <li>
                        <button onClick={() => setTheme('light')} aria-label="Light theme" aria-pressed={theme === 'light'}>☀️</button>
                    </li>
                    <li>
                        <button onClick={() => setTheme('dark')} aria-label="Dark theme" aria-pressed={theme === 'dark'}>🌙</button>
                    </li>
                    <li>
                        <button onClick={() => setTheme('story')} aria-label="Story theme" aria-pressed={theme === 'story'}>🌿</button>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default ThemePanel;