import { Faction } from '../faction.dto';
import { Waypoint } from './waypoint.system.dto';

export interface System {
    symbol: string;
    sectorSymbol: string;
    type:
        | 'NEUTRON_STAR'
        | 'RED_STAR'
        | 'ORANGE_STAR'
        | 'BLUE_STAR'
        | 'YOUNG_STAR'
        | 'WHITE_DWARF'
        | 'BLACK_HOLE'
        | 'HYPERGIANT'
        | 'NEBULA'
        | 'UNSTABLE';
    x: number;
    y: number;
    waypoints: Waypoint[];
    factions: Faction[];
}
