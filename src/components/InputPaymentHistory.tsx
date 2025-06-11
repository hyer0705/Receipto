import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { PaymentAction } from '@/types/payment';
import { useState } from 'react';

interface InputPaymentHistoryProps {
  dispatch: React.ActionDispatch<[action: PaymentAction]>;
}

function InputPaymentHistory({ dispatch }: InputPaymentHistoryProps) {
  const [history, setHistory] = useState<{ content: string; amount: number }>({
    content: '',
    amount: 0,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          ➕ 결제 내역 추가
        </CardTitle>
        <CardDescription className="text-sm">
          모임에서 발생한 결제 내역을 기록하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <Label htmlFor="title">결제 항목</Label>
          <Input
            id="title"
            placeholder="예: 점심, 저녁, 카페"
            value={history.content}
            onChange={(e) =>
              setHistory((prev) => ({ ...prev, content: e.target.value }))
            }
          />
          <Label htmlFor="amount">금액</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0"
            value={history.amount}
            onChange={(e) =>
              setHistory((prev) => ({
                ...prev,
                amount: Number(e.target.value),
              }))
            }
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            const { amount, content } = history;
            dispatch({
              type: 'ADD_PAYMENT_HISTORY',
              payment: {
                history: { id: Date.now().toString(), content, amount },
              },
            });
            setHistory({ amount: 0, content: '' });
          }}
          className="w-full"
        >
          결제 내역 추가
        </Button>
      </CardFooter>
    </Card>
  );
}

export default InputPaymentHistory;
