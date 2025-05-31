import { ShipNavRoute } from './nav/route.nav.dto';

export interface ShipNav {
    systemSymbol: string;
    waypointSymbol: string;
    route: ShipNavRoute;
    status: 'IN_TRANSIT' | 'IN_ORBIT' | 'DOCKED';
    flightMode: 'DRIFT' | 'STEALTH' | 'CRUISE' | 'BURN';
}
