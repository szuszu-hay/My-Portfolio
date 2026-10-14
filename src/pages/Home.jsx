import { useLocation } from "react-router-dom";
import Intro from "../components/Intro";
import ThemePanel from "../components/ThemePanel";
import About from "./About";
import ExperienceAndEdu from "./ExperienceAndEdu";
import Projects from "./Projects";
import { useEffect } from "react";

function Home({ theme, setTheme }) {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
            }
        }
    }, [location.state]);
    
    const scrollToNext = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div className="hero" id="hero">
                <div className="folder-container">
                    <ThemePanel theme={theme} setTheme={setTheme}/>
                    <Intro theme={theme} />
                </div>

                <button className="scroll-cue" onClick={scrollToNext} aria-label="Scroll to About section">
                    <span className="scroll-mouse"><span className="scroll-dot"></span></span>
                        <span className="scroll-label">Scroll</span>
                </button>
            </div>
            <About />
            <Projects theme={theme} setTheme={setTheme}/>
            <ExperienceAndEdu theme={theme} />
        </div>
    );
}

export default Home;