export interface HeadCell {
    id: string;
    label: string;
  }

  export interface DataItem {
    invoiceId: string;
    amount: number;
    status: string;
    subject: string;
    action: string;
  }

  export interface IstatusData { color: string; statusText: string }