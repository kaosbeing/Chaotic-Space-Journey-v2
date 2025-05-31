export interface ShipRegistration {
    name: string;
    factionSymbol: string;
    role: 'FABRICATOR' | 'HARVESTER' | 'HAULER' | 'INTERCEPTOR' | 'EXCAVATOR' | 'TRANSPORT' | 'REPAIR' | 'SURVEYOR' | 'COMMAND' | 'CARRIER' | 'PATROL' | 'SATELLITE' | 'EXPLORER' | 'REFINERY';
}