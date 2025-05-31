export interface WaypointModifier {
    symbol:
        | 'STRIPPED'
        | 'UNSTABLE'
        | 'RADIATION_LEAK'
        | 'CRITICAL_LIMIT'
        | 'CIVIL_UNREST';
    name: string;
    description: string;
}
