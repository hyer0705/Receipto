import Container from './components/Container';
import Header from './components/Header';
import InputPeopleCount from './components/InputPeopleCount';
import ReceiptResult from './components/ReceiptResult';
import InputPaymentHistory from './components/InputPaymentHistory';
import InputReceiptInfo from './components/InputReceiptInfo';
import { useReceipt } from './hooks/useReceipt';
import PaymentHistoryList from './components/PaymentHistory';
import ShareReceipt from './components/ShareReceipt';

function App() {
  const {
    receipt,
    changeTitle,
    changeDate,
    addPaymentHistory,
    deletePaymentHistory,
    changePeopleCount,
  } = useReceipt();

  return (
    <Container>
      <Header />
      <InputReceiptInfo
        title={receipt.title}
        date={receipt.date}
        changeTitle={changeTitle}
        changeDate={changeDate}
      />
      <InputPaymentHistory addPaymentHistory={addPaymentHistory} />
      <PaymentHistoryList
        histories={receipt.histories}
        deletePaymentHistory={deletePaymentHistory}
      />
      <InputPeopleCount changePeopleCount={changePeopleCount} />
      <ReceiptResult
        histories={receipt.histories}
        peopleCount={receipt.peopleCount}
      />
      <ShareReceipt receipt={receipt} />
      <footer className="text-center py-4">
        <p className="text-xs text-gray-500">모임 정산이 쉬워졌어요! 🎉</p>
      </footer>
    </Container>
  );
}

export default App;
