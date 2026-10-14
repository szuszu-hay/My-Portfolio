import ThemePanel from "./ThemePanel";

function Navbar({ theme, setTheme, visible }) {
    return (
        <div className={"navContainer" + (visible ? " is-visible" : "")}>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="themeNav">
                <ThemePanel theme={theme} setTheme={setTheme} variant="themeBar--nav" />
            </div>
        </div>
    )
}

export default Navbar;