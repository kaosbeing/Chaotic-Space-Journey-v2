import { ShipType } from './type.shipyard.dto';
import { ShipyardTransaction } from './transaction.shipyard.dto';
import { Ship } from './ship.shipyard.dto';

export interface Shipyard {
    symbol: string;
    shipTypes: ShipType[];
    transactions: ShipyardTransaction[];
    ships?: Ship[];
    modificationsFee: number;
}