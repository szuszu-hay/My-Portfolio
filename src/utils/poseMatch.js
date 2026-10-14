export const KEYPOINT = {
    nose: 0,
    leftShoulder: 5,
    rightShoulder: 6,
    leftElbow: 7,
    rightElbow: 8,
    leftWrist: 9,
    rightWrist: 10,
    leftHip: 11,
    rightHip: 12,
};

// only score/draw the upper body — reliable and enough for a fun game.
const COMPARE_POINTS = [
    KEYPOINT.nose,
    KEYPOINT.leftShoulder, KEYPOINT.rightShoulder,
    KEYPOINT.leftElbow, KEYPOINT.rightElbow,
    KEYPOINT.leftWrist, KEYPOINT.rightWrist,
];

export const SKELETON_EDGES = [
    [KEYPOINT.nose, KEYPOINT.leftShoulder],
    [KEYPOINT.nose, KEYPOINT.rightShoulder],
    [KEYPOINT.leftShoulder, KEYPOINT.rightShoulder],
    [KEYPOINT.leftShoulder, KEYPOINT.leftElbow],
    [KEYPOINT.leftElbow, KEYPOINT.leftWrist],
    [KEYPOINT.rightShoulder, KEYPOINT.rightElbow],
    [KEYPOINT.rightElbow, KEYPOINT.rightWrist],
];

// Re-center on the hips, re-scale by shoulder width.
export function normalize(keypoints) {
    const hipL = keypoints[KEYPOINT.leftHip];
    const hipR = keypoints[KEYPOINT.rightHip];
    const shL = keypoints[KEYPOINT.leftShoulder];
    const shR = keypoints[KEYPOINT.rightShoulder];

    const centerX = (hipL.x + hipR.x) / 2;
    const centerY = (hipL.y + hipR.y) / 2;
    const scale = Math.hypot(shL.x - shR.x, shL.y - shR.y) || 1;

    return keypoints.map((kp) => ({
        x: (kp.x - centerX) / scale,
        y: (kp.y - centerY) / scale,
        score: kp.score,
    }));
}

// Compares live keypoints to a stored target pose.
// Returns a 0–100 "match" percentage.
export function scorePose(liveKeypoints, targetNormalized) {
    if (!liveKeypoints) return 0;
    const live = normalize(liveKeypoints);

    let totalDist = 0;
    let counted = 0;

    for (const i of COMPARE_POINTS) {
        if (live[i].score < 0.3) continue; // model wasn't confident here — skip it
        const target = targetNormalized[i];
        const dx = live[i].x - target.x;
        const dy = live[i].y - target.y;
        totalDist += Math.hypot(dx, dy);
        counted++;
    }

    if (counted === 0) return 0;
    const avgDist = totalDist / counted;
    return Math.round(Math.max(0, 100 - avgDist * 60));
}