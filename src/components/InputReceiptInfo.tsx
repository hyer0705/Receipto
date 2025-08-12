import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  // TODO: 한국 기준으로 바꾸기!
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

interface InputReceiptInfoProps {
  title: string;
  date: Date | undefined;
  changeTitle: (newTitle: string) => void;
  changeDate: (newDate: Date | undefined) => void;
}

function InputReceiptInfo({
  title,
  date,
  changeTitle,
  changeDate,
}: InputReceiptInfoProps) {
  const [open, setOpen] = useState(false);

  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));

  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          <Label htmlFor="title">정산 제목</Label>
          <Input
            id="title"
            placeholder="예: 6/20 서울 나들이"
            type="text"
            value={title}
            onChange={(e) => {
              const newTitle = e.target.value;

              changeTitle(newTitle);
            }}
          />
          <Label htmlFor="date">날짜</Label>
          <div className="relative flex gap-2">
            <Input
              value={value}
              placeholder="2025-06-10"
              className="bg-background pr-10"
              onChange={(e) => {
                const currentDate = new Date(e.target.value);
                setValue(e.target.value);

                changeDate(currentDate);

                setMonth(currentDate);
              }}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                >
                  📆
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(selectedDate) => {
                    changeDate(selectedDate);

                    setValue(formatDate(selectedDate));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InputReceiptInfo;
