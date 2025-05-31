import { ShipCargoItem } from './item.ship.dto';

export interface ShipCargo {
    capacity: number,
    units: number,
    inventory: ShipCargoItem[]
}