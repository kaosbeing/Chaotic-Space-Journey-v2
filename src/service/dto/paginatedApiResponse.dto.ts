import { Meta } from './meta.dto';

export interface PaginatedApiResponse<T> {
    data: T;
    meta: Meta;
}
