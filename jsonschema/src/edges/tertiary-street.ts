import { Feature, LineString } from "geojson";

import { BaseEdgeFields } from "./base-edge-fields";
import {
  Brunnel,
  Description,
  Foot,
  Incline,
  Layer,
  Length,
  Name,
  Surface,
  Width,
} from "../fields";

/**
 * Fields that identify a tertiary street.
 */
interface TertiaryStreetIdentifyingFields extends BaseEdgeFields {
  highway: "tertiary";
}

/**
 * Fields that apply to a tertiary street.
 */
export interface TertiaryStreetFields extends TertiaryStreetIdentifyingFields {
  brunnel?: Brunnel;
  description?: Description;
  incline?: Incline;
  foot?: Foot;
  layer?: Layer;
  length?: Length;
  name?: Name;
  surface?: Surface;
  width?: Width;
}

/**
 * A road linking small settlements, or the local centers of a large town or city.
 */
export type TertiaryStreet = Feature<LineString, TertiaryStreetFields>;
