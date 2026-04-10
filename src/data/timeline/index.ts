export { beforeFirstAgeEvents } from "./before-first-age";
export { firstAgeEvents } from "./first-age";
export { secondAgeEvents } from "./second-age";
export { thirdAgeEvents } from "./third-age";
export { AGE_LABELS, AGE_ORDER, TAG_LABELS } from "./types";
export type { Age, EventTag, Significance, TimelineEvent } from "./types";

import { beforeFirstAgeEvents } from "./before-first-age";
import { firstAgeEvents } from "./first-age";
import { secondAgeEvents } from "./second-age";
import { thirdAgeEvents } from "./third-age";
import type { TimelineEvent } from "./types";

export const allTimelineEvents: TimelineEvent[] = [
    ...beforeFirstAgeEvents,
    ...firstAgeEvents,
    ...secondAgeEvents,
    ...thirdAgeEvents,
];
