import { WaypointType } from '../../waypoint.type';

export interface ShipNavRouteWaypoint {
    symbol: string,
    type: WaypointType,
    systemSymbol: string,
    x: number,
    y: number
}