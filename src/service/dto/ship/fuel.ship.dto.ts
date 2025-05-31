export interface ShipFuel {
    current: number;
    capacity: number;
    consumed?: {
        amount: number;
        timestamp: string;
    };
}
