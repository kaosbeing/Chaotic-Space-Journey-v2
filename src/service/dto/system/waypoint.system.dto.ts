import { WaypointOrbital } from '../waypoint/orbital.waypoint.dto';
import { WaypointType } from '../waypoint.type';

export interface Waypoint {
    symbol: string;
    type: WaypointType;
    x: number;
    y: number;
    orbitals: WaypointOrbital[];
    orbits?: string;
}
