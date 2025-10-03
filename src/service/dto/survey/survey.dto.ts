import { SurveyDeposit } from './deposit.survey.dto';

export interface Survey {
    signature: string;
    symbol: string;
    deposits: SurveyDeposit[];
    expiration: string;
    size: 'SMALL' | 'MODERATE' | 'LARGE';
}
