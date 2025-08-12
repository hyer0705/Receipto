export const getDisplayLength = (str: string) => {
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
