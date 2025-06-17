interface PaymentHistory {
  id: string;
  content: string;
  amount: number;
}

export interface Receipt {
  title: string;
  date: Date | undefined;
  histories: PaymentHistory[];
  peopleCount: number;
}

export type ReceiptAction =
  | {
      type: 'CHANGED_TITLE';
      receipt: { title: string };
    }
  | { type: 'CHANGED_DATE'; receipt: { date: Date | undefined } }
  | {
      type: 'ADD_PAYMENT_HISTORY';
      receipt: { history: PaymentHistory };
    }
  | {
      type: 'DELETE_PAYMENT_HISTORY';
      receipt: {
        history: PaymentHistory;
      };
    }
  | {
      type: 'CHANGED_PEOPLE_COUNT';
      receipt: {
        peopleCount: number;
      };
    };
