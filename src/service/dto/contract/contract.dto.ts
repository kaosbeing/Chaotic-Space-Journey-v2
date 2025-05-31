import { FactionSymbol } from '../faction.type';
import { ContractTerms } from './terms.contract.dto';

export interface Contract {
    id: string;
    factionSymbol: FactionSymbol;
    type: 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE';
    terms: ContractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}
