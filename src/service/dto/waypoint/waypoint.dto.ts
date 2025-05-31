import { Faction } from "../faction.dto";
import { WaypointType } from "../waypoint.type";
import { WaypointChart } from "./chart.waypoint.dto";
import { WaypointModifier } from "./modifier.waypoint.dto";
import { WaypointOrbital } from "./orbital.waypoint.dto";
import { WaypointTrait } from "./trait.waypoint.dto";

export interface Waypoint {
    symbol: string;
    type: WaypointType;
    systemSymbol: string;
    x: number;
    y: number;
    orbitals: WaypointOrbital[];
    orbits?: string;
    faction: Faction;
    traits: WaypointTrait[];
    modifiers: WaypointModifier[];
    chart?: WaypointChart[];
    isUnderConstruction: boolean;
}