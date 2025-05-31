export interface ShipyardTransaction {
    waypointSymbol: string;
    /** @deprecated */
    shipSymbol: string;
    shipType: string;
    price: number;
    agentSymbol: string;
    timestamp: string;
}