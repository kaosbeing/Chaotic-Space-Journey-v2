import { ShipRegistration } from './registration.ship.dto';
import { ShipNav } from './nav.ship.dto';
import { ShipCrew } from './crew.ship.dto';
import { ShipFrame } from './frame.ship.dto';
import { ShipReactor } from './reactor.ship.dto';
import { ShipEngine } from './engine.ship.dto';
import { ShipCooldown } from './cooldown.ship.dto';
import { ShipModule } from './module.ship.dto';
import { ShipMount } from './mount.ship.dto';
import { ShipCargo } from './cargo.ship.dto';
import { ShipFuel } from './fuel.ship.dto';

export interface Ship {
    symbol: string;
    registration: ShipRegistration;
    nav: ShipNav;
    crew: ShipCrew;
    frame: ShipFrame;
    reactor: ShipReactor;
    engine: ShipEngine;
    cooldown: ShipCooldown;
    modules: ShipModule[];
    mounts: ShipMount[];
    cargo: ShipCargo;
    fuel: ShipFuel;
}
