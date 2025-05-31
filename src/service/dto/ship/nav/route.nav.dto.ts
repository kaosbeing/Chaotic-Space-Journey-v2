import { ShipNavRouteWaypoint } from './routeWaypoint.nav.dto';

export interface ShipNavRoute {
    destination: ShipNavRouteWaypoint;
    origin: ShipNavRouteWaypoint;
    departureTime: string;
    arrival: string;
}
