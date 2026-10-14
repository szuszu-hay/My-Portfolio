import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import StoryCharacter from "./StoryCharacter";

const SECTION_POSE = {
    hero: "idle",
    about: "idle",
    projects: "idle",
    experience: "idle",
    contact: "idle",
};

function CharacterGuide({ theme }) {
    const activeId = useActiveSection(Object.keys(SECTION_POSE));
    const progress = useScrollProgress();
    const isScrolling = useIsScrolling();

    if (theme !== "story") return null;

    const pose = isScrolling ? "walking" : (SECTION_POSE[activeId] || "idle");

    return (
        <>
            <div className="scroll-path" aria-hidden="true" />
            <StoryCharacter pose={pose} progress={progress} />
        </>
    );
}

export default CharacterGuide;