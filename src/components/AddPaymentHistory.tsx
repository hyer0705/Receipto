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

function AddPaymentHistory() {
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
        <form className="space-y-4">
          <Label htmlFor="title">결제 항목</Label>
          <Input id="title" placeholder="예: 점심, 저녁, 카페" />
          <Label htmlFor="amount">금액</Label>
          <Input id="amount" type="number" placeholder="0" />
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">결제 내역 추가</Button>
      </CardFooter>
    </Card>
  );
}

export default AddPaymentHistory;
