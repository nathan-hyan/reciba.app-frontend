export interface Invoice {
  _id?: string;
  invoiceNumber: number;
  logo?: string;
  date: Date | string;
  from: string;
  amountText: string;
  amount: number;
  concept: string;
  sign?: string;
  currency: string;
  pending: boolean;
  tags?: string[];
  alreadySent?: {
    isAlreadySent: Boolean;
    emailAddress?: String;
  };
  payment?: 'check' | 'transfer' | 'cash' | 'creditcard';
}

export interface queryType {
  from?: string;
  to?: string;
  tags?: string;
}
