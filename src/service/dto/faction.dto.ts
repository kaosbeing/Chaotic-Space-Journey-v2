import { FactionSymbol } from './faction.type';
import { FactionTrait } from './factionTrait.dto';

export interface Faction {
    symbol: FactionSymbol,
    name: string,
    description: string,
    headquarters: string,
    traits: FactionTrait[],
    isRecruiting: boolean
}
