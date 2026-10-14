import { useEffect, useState, useRef } from "react";

export function useIsScrolling(delay = 200) {
    const [isScrolling, setIsScrolling] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        function onScroll() {
            setIsScrolling(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setIsScrolling(false), delay);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            clearTimeout(timeoutRef.current);
        };
    }, [delay]);

    return isScrolling;
}