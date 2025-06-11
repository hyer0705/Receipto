import AddPaymentHistory from './components/AddPaymentHistory';
import Container from './components/Container';
import Header from './components/Header';
import InputPeopleCount from './components/InputPeopleCount';
import PaymentHistory from './components/PaymentHistory';

function App() {
  return (
    <Container>
      <Header />
      <AddPaymentHistory />
      <PaymentHistory />
      <InputPeopleCount />
    </Container>
  );
}

export default App;
