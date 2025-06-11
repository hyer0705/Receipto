import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function PaymentHistory() {
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
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">
                  카페(아메리카노+라떼+케이크)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm">13,000원</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
              >
                Delete
              </Button>
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

export default PaymentHistory;
