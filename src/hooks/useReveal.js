import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.2) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        if (el) observer.observe(el);
        return () => el && observer.unobserve(el);
    }, [threshold]);

    return [ref, visible];
}