import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    const ticking = useRef(false);

    useEffect(() => {
        function update() {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const pct = maxScroll > 0 ? scrollTop / maxScroll : 0;
            setProgress(Math.min(1, Math.max(0, pct)));
            ticking.current = false;
        }

        function onScroll() {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(update);
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return progress;
}