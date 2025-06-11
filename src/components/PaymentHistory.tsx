import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Payment, PaymentAction } from '@/types/payment';

interface PaymentHistoryProps {
  histories: Payment['histories'];
  dispatch: React.ActionDispatch<[action: PaymentAction]>;
}

function PaymentHistory({ histories, dispatch }: PaymentHistoryProps) {
  return (
    <Card>
      <CardHeader className="">
        <CardTitle className="text-lg">결제 내역</CardTitle>
        <CardDescription className="text-sm">
          등록된 모든 결제 내역을 확인하세요!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="space-y-3">
          {histories.map((history) => (
            <div
              key={history.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{history.content}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm">{history.amount}원</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
                  onClick={() => {
                    dispatch({
                      type: 'DELETE_PAYMENT_HISTORY',
                      payment: { history },
                    });
                  }}
                >
                  Del
                </Button>
              </div>
            </div>
          ))}
        </article>
      </CardContent>
    </Card>
  );
}

export default PaymentHistory;
