import { useEffect, useReducer } from 'react';

import { Button } from '@/components/ui/button';
import Container from './components/Container';
import Header from './components/Header';
import InputPeopleCount from './components/InputPeopleCount';
import PaymentHistory from './components/PaymentHistory';
import PaymentResult from './components/PaymentResult';
import InputPaymentInfo from './components/InputPaymentInfo';
import InputPaymentHistory from './components/InputPaymentHistory';
import type { Payment, PaymentAction } from './types/payment';

function reducer(state: Payment, action: PaymentAction): Payment {
  const { type, payment } = action;
  switch (type) {
    case 'CHANGED_TITLE':
      return {
        ...state,
        title: payment.title,
      };
    case 'CHANGED_DATE':
      return {
        ...state,
        date: payment.date,
      };
    case 'ADD_PAYMENT_HISTORY':
      return {
        ...state,
        histories: [...state.histories, payment.history],
      };
    case 'DELETE_PAYMENT_HISTORY':
      return {
        ...state,
        histories: state.histories.filter(
          (history) => history.id !== payment.history.id,
        ),
      };
    case 'CHANGED_PEOPLE_COUNT':
      return {
        ...state,
        peopleCount: payment.peopleCount,
      };
    default:
      return { ...state };
  }
}

function App() {
  const [payment, dispatch] = useReducer(reducer, {
    title: '',
    date: undefined,
    histories: [],
    peopleCount: 0,
  });

  useEffect(() => {
    console.log(payment);
  }, [payment]);

  return (
    <Container>
      <Header />
      <InputPaymentInfo
        title={payment.title}
        date={payment.date}
        dispatch={dispatch}
      />
      <InputPaymentHistory dispatch={dispatch} />
      <PaymentHistory histories={payment.histories} dispatch={dispatch} />
      <InputPeopleCount dispatch={dispatch} />
      <PaymentResult
        histories={payment.histories}
        peopleCount={payment.peopleCount}
      />
      <Button className="w-full h-12 text-base font-medium" size="lg">
        공유하기
      </Button>
      <footer className="text-center py-4">
        <p className="text-xs text-gray-500">모임 정산이 쉬워졌어요! 🎉</p>
      </footer>
    </Container>
  );
}

export default App;
