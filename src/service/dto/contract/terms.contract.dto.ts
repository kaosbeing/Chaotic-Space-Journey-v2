import { ContractDeliverGood } from './deliverGood.contract.dto';
import { ContractPayment } from './payment.contract.dto';

export interface ContractTerms {
    deadline: string;
    payment: ContractPayment;
    deliver: ContractDeliverGood;
}
