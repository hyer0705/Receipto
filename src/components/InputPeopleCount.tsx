import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function InputPeopleCount() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">인원 수</CardTitle>
        <CardDescription className="text-sm">
          정산에 참여할 인원 수를 입력하세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="peopleCount">참여 인원</Label>
          <Input id="peopleCount" type="number" placeholder="예: 2" min="1" />
        </div>
      </CardContent>
    </Card>
  );
}

export default InputPeopleCount;
