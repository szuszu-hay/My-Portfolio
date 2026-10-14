import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Playground from "./components/Playground.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import CharacterGuide from "./components/character/CharacterGuide.jsx";

function AppContent() {
    const [theme, setTheme] = useState("light");
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.remove("light-theme", "dark-theme", "story-theme");
        document.body.classList.add(`${theme}-theme`);
    }, [theme]);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setScrolledPastHero(!entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(hero);
        return () => observer.unobserve(hero);
    }, [location.pathname]);

    const showNavbar = location.pathname !== "/" || scrolledPastHero;

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} visible={showNavbar} />
            <Routes>
                <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
                <Route path="/projects/:id" element={<ProjectDetails theme={theme} />} />
            </Routes>
            <CharacterGuide theme={theme} />
            <Playground theme={theme} />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;