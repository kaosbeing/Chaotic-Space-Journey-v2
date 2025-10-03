import { ShipRequirements } from './requirements.ship.dto';

export interface ShipEngine {
    symbol:
        | 'ENGINE_IMPULSE_DRIVE_I'
        | 'ENGINE_ION_DRIVE_I'
        | 'ENGINE_ION_DRIVE_II'
        | 'ENGINE_HYPER_DRIVE_I';
    name: string;
    description: string;
    condition: number;
    speed: number;
    requirements: ShipRequirements;
}
