import { ShipRequirements } from './requirements.ship.dto';

export interface ShipFrame {
    symbol: 'FRAME_PROBE' | 'FRAME_DRONE' | 'FRAME_INTERCEPTOR' | 'FRAME_RACER' | 'FRAME_FIGHTER' | 'FRAME_FRIGATE' | 'FRAME_SHUTTLE' | 'FRAME_EXPLORER' | 'FRAME_MINER' | 'FRAME_LIGHT_FREIGHTER' | 'FRAME_HEAVY_FREIGHTER' | 'FRAME_TRANSPORT' | 'FRAME_DESTROYER' | 'FRAME_CRUISER' | 'FRAME_CARRIER';
    name: string;
    description: string;
    condition: number;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    requirements: ShipRequirements;
}