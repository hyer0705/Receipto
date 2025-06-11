interface PaymentHistory {
  id: number;
  content: string;
  amount: number;
}

export interface Payment {
  title: string;
  date: Date | undefined;
  history: PaymentHistory[];
  peopleCount: number;
  totalAmount: number;
}

export type PaymentAction =
  | {
      type: 'CHANGED_TITLE';
      payment: { title: string };
    }
  | { type: 'CHANGED_DATE'; payment: { date: Date | undefined } }
  | {
      type: 'ADD_PAYMENT_HISTORY';
      payment: { history: PaymentHistory };
    }
  | {
      type: 'DELETE_PAYMENT_HISTORY';
      payment: {
        history: PaymentHistory;
      };
    }
  | {
      type: 'CHANGED_PEOPLE_COUNT';
      payment: {
        peopleCount: number;
      };
    };
