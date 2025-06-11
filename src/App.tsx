import { Button } from '@/components/ui/button';
import AddPaymentHistory from './components/AddPaymentHistory';
import Container from './components/Container';
import Header from './components/Header';
import InputPeopleCount from './components/InputPeopleCount';
import PaymentHistory from './components/PaymentHistory';
import PaymentResult from './components/PaymentResult';

function App() {
  return (
    <Container>
      <Header />
      <AddPaymentHistory />
      <PaymentHistory />
      <InputPeopleCount />
      <PaymentResult />
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
