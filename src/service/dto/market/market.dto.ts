import { TradeGoodDetails } from './tradeGoodDetails.market.dto';
import { TradeGood } from './tradegood.market.dto';

export interface Market {
    symbol: string;
    exports: TradeGood[];
    imports: TradeGood[];
    exchange: TradeGood[];
    transactions: string;
    tradeGoods: TradeGoodDetails[];
}
