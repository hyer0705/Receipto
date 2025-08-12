import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface InputPeopleCountProps {
  changePeopleCount: (newPeopleCount: number) => void;
}

function InputPeopleCount({ changePeopleCount }: InputPeopleCountProps) {
  const [peoplCount, setPeopleCount] = useState('');

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
          <Input
            id="peopleCount"
            type="number"
            placeholder="예: 2"
            min="1"
            value={peoplCount}
            onChange={(e) => {
              const newPeopleCount = Number(e.target.value);

              changePeopleCount(newPeopleCount);

              setPeopleCount(newPeopleCount.toString());
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default InputPeopleCount;
