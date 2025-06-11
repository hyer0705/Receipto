import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function PaymentResult() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          정산 결과
        </CardTitle>
        <CardDescription className="text-sm">
          1/N 분할 계산 결과를 확인하세요!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">총 금액</p>
              <p className="text-xl font-bold text-blue-600">20,000원</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">1인당 금액</p>
              <p className="text-xl font-bold text-green-600">10,000원</p>
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

export default PaymentResult;
