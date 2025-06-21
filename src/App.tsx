import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Container from './components/Container';
import Header from './components/Header';
import InputPeopleCount from './components/InputPeopleCount';
import ReceiptResult from './components/ReceiptResult';
import InputPaymentHistory from './components/InputPaymentHistory';
import InputReceiptInfo from './components/InputReceiptInfo';
import { useReceipt } from './hooks/useReceipt';
import PaymentHistoryList from './components/PaymentHistory';

function App() {
  const {
    receipt,
    changeTitle,
    changeDate,
    addPaymentHistory,
    deletePaymentHistory,
    changePeopleCount,
  } = useReceipt();

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const getDisplayLength = (str: string) => {
    let length = 0;
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charAt(i);
      // 한글은 2자리, 영문/숫자는 1자리
      if (char.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)) {
        length += 2;
      } else {
        length += 1;
      }
    }
    return length;
  };

  const createReceipt = () => {
    const WIDTH = 25;
    const LINE = '='.repeat(WIDTH);

    const title = `[💳 ${receipt.title}]\n`;
    const items = receipt.histories.map((history) => {
      const priceText = `${history.amount.toLocaleString()}원`;
      const contentLen = getDisplayLength(history.content);
      const priceLen = getDisplayLength(priceText);

      const spaces =
        contentLen + priceLen < WIDTH ? WIDTH - contentLen - priceLen : 0;

      return `${history.content}: ${' '.repeat(spaces)}${priceText}`;
    });
    const totalPrice = receipt.histories.reduce(
      (acc, curr) => acc + curr.amount,
      0,
    );
    const totalPriceStr = `총 금액: ${' '.repeat(WIDTH - getDisplayLength('총 금액: ') - getDisplayLength(`${totalPrice.toLocaleString()}원`))}${totalPrice.toLocaleString()}원`;

    const pricePerPerson = `1/N 금액: ${' '.repeat(
      WIDTH -
        getDisplayLength('1/N 금액: ') -
        getDisplayLength(
          `${Math.ceil(totalPrice / receipt.peopleCount).toLocaleString()}원`,
        ),
    )}${Math.ceil(totalPrice / receipt.peopleCount).toLocaleString()}원`;

    return [title, ...items, LINE, totalPriceStr, pricePerPerson].join('\n');
  };

  const handleCopyButton = async () => {
    try {
      const created = createReceipt();

      await navigator.clipboard.writeText(created);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error('클립보드 복사 실패.. ', error);
    }
  };

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
      <Button
        onClick={() => setIsShareOpen(true)}
        className="w-full h-12 text-base font-medium"
      >
        공유하기
      </Button>
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">정산 결과 공유</DialogTitle>
          </DialogHeader>
          <article className="bg-gray-50 p-4 rounded-md max-h-[200px] overflow-y-auto whitespace-pre-wrap text-sm">
            {'horay~~~'}
          </article>
          <article className="flex flex-col gap-3">
            <Button
              onClick={handleCopyButton}
              className="w-full flex items-center justify-center gap-2 h-12"
            >
              {isCopied ? '복사 완료!' : '복사하기'}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsShareOpen(false)}
              className="w-full"
            >
              닫기
            </Button>
          </article>
        </DialogContent>
      </Dialog>
      <footer className="text-center py-4">
        <p className="text-xs text-gray-500">모임 정산이 쉬워졌어요! 🎉</p>
      </footer>
    </Container>
  );
}

export default App;
