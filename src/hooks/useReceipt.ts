import { useReducer } from 'react';
import type { PaymentHistory, Receipt, ReceiptAction } from '../types/payment';

function reducer(state: Receipt, action: ReceiptAction): Receipt {
  const { type, receipt } = action;
  switch (type) {
    case 'CHANGED_TITLE':
      return {
        ...state,
        title: receipt.title,
      };
    case 'CHANGED_DATE':
      return {
        ...state,
        date: receipt.date,
      };
    case 'ADD_PAYMENT_HISTORY':
      return {
        ...state,
        histories: [...state.histories, receipt.history],
      };
    case 'DELETE_PAYMENT_HISTORY':
      return {
        ...state,
        histories: state.histories.filter(
          (history) => history.id !== receipt.history.id,
        ),
      };
    case 'CHANGED_PEOPLE_COUNT':
      return {
        ...state,
        peopleCount: receipt.peopleCount,
      };
    default:
      return { ...state };
  }
}

export function useReceipt() {
  const [receipt, dispatch] = useReducer(reducer, {
    title: '',
    date: undefined,
    histories: [],
    peopleCount: 0,
  });

  const changeTitle = (newTitle: string) => {
    dispatch({ type: 'CHANGED_TITLE', receipt: { title: newTitle } });
  };

  const changeDate = (newDate: Date | undefined) => {
    dispatch({ type: 'CHANGED_DATE', receipt: { date: newDate } });
  };

  const addPaymentHistory = (newHistory: PaymentHistory) => {
    dispatch({
      type: 'ADD_PAYMENT_HISTORY',
      receipt: {
        history: newHistory,
      },
    });
  };

  const deletePaymentHistory = (deleteHistory: PaymentHistory) => {
    dispatch({
      type: 'DELETE_PAYMENT_HISTORY',
      receipt: { history: deleteHistory },
    });
  };

  const changePeopleCount = (newPeopleCount: number) => {
    dispatch({
      type: 'CHANGED_PEOPLE_COUNT',
      receipt: { peopleCount: newPeopleCount },
    });
  };

  return {
    receipt,
    changeTitle,
    changeDate,
    addPaymentHistory,
    deletePaymentHistory,
    changePeopleCount,
  };
}
