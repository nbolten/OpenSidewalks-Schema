import { Feature, Point } from "geojson";

import { BaseNodeFields } from "./base-node-fields";
import { Brunnel, Layer, Surface, TactilePaving } from "../fields";

/**
 * Fields that identify a curb ramp.
 */
interface CurbRampIdentifyingFields extends BaseNodeFields {
  kerb: "lowered";
}

/**
 * Fields that apply to a curb ramp.
 */
interface CurbRampFields extends CurbRampIdentifyingFields {
  brunnel?: Brunnel;
  layer?: Layer;
  surface?: Surface;
  tactile_paving?: TactilePaving;
}

/**
 * A curb ramp (curb cut) mapped as a curb interface. Mapped at the location where the two edges that it connects meet one another.
 *
 */
export type CurbRamp = Feature<Point, CurbRampFields>;
