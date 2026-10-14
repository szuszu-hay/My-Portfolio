import { CHARACTER_IMAGES } from "./characterStates";

const TRACK_TOP_VH = 15;
const TRACK_BOTTOM_GAP_PX = 110;

function StoryCharacter({ pose = "idle", progress = 0 }) {
    const src = CHARACTER_IMAGES[pose] || CHARACTER_IMAGES.idle;
    const top = `calc(${TRACK_TOP_VH}vh + (${100 - TRACK_TOP_VH}vh - ${TRACK_BOTTOM_GAP_PX}px) * ${progress})`;

    return (
        <img
            src={src}
            alt=""
            className={`story-character pose-${pose}`}
            style={{ top }}
        />
    );
}

export default StoryCharacter;