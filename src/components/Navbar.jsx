import { useLocation, useNavigate } from "react-router-dom";
import ThemePanel from "./ThemePanel";

const LINKS = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

function Navbar({ theme, setTheme, visible }) {
    const location = useLocation();
    const navigate = useNavigate();

    const goTo = (id) => (e) => {
        e.preventDefault();
        if (location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: id } });
        }
    };

    return (
        <div className={"navContainer" + (visible ? " is-visible" : "")}>
            <nav className="navbar">
                <ul>
                    {LINKS.map(({ label, id }) => (
                        <li key={id}>
                            <a href={`/#${id}`} onClick={goTo(id)}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="themeNav">
                <ThemePanel theme={theme} setTheme={setTheme} variant="themeBar--nav" />
            </div>
        </div>
    )
}

export default Navbar;