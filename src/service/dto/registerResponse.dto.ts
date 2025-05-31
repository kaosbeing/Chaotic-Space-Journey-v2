import { Agent } from './agent.dto';
import { Contract } from './contract/contract.dto';
import { Faction } from './faction.dto';
import { Ship } from './ship/ship.dto';

export interface RegisterResponse {
    agent: Agent;
    contract: Contract;
    faction: Faction;
    ship: Ship;
    token: string;
}
