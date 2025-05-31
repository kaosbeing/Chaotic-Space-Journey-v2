import http from '../http.service';
import { Faction } from '../dto/faction.dto';
import { PaginatedApiResponse } from '../dto/paginatedApiResponse.dto';

export const listFaction = async (): Promise<
    PaginatedApiResponse<Faction[]>
> => {
    const response = await http.get('/factions');
    return response.data;
};
