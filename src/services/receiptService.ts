import type { Receipt } from '@/types/receipt';

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

export const createReceipt = (receipt: Receipt) => {
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
