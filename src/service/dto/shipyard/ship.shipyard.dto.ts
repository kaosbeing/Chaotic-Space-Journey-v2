import { ShipFrame } from '../ship/frame.ship.dto';
import { ShipReactor } from '../ship/reactor.ship.dto';
import { ShipEngine } from '../ship/engine.ship.dto';
import { ShipModule } from '../ship/module.ship.dto';
import { ShipMount } from '../ship/mount.ship.dto';

export interface Ship {
    type: 'SHIP_PROBE' | 'SHIP_MINING_DRONE' | 'SHIP_SIPHON_DRONE' | 'SHIP_INTERCEPTOR' | 'SHIP_LIGHT_HAULER' | 'SHIP_COMMAND_FRIGATE' | 'SHIP_EXPLORER' | 'SHIP_HEAVY_FREIGHTER' | 'SHIP_LIGHT_SHUTTLE' | 'SHIP_ORE_HOUND' | 'SHIP_REFINING_FREIGHTER' | 'SHIP_SURVEYOR';
    name: string;
    description: string;
    supply: 'SCARCE' | 'LIMITED' | 'MODERATE' | 'HIGH' | 'ABUNDANT';
    activity: 'WEAK' | 'GROWING' | 'STRONG' | 'RESTRICTED';
    purchasePrice: number;
    frame: ShipFrame;
    reactor: ShipReactor;
    engine: ShipEngine;
    modules: ShipModule[];
    mounts: ShipMount[];
    crew: {
        required: number;
        capacity: number;
    };
}