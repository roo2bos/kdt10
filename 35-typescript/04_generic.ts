const numArrLen = (arr: number[]): number => {
  return arr.length;
};
const strArrLen = (arr: string[]): number => {
  return arr.length;
};
console.log(numArrLen([1, 2, 3, 4])); // 4
console.log(strArrLen(['a', 'b', 'c'])); // 3

//generic
//선언할때 타입을 지정하기 어려운 경우 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에서 타입을 명시
// => "재상용성 증가"
// =>타입을 변수처럼 사용하는것
// 형태는 주로 <T>를 사용함. -> 사용시 T는 type만 작성가능.
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<number>([1, 2, 3]));
/* function arrLen<number>(arr: number[]): number {
  return arr.length;
} */
console.log(arrLen<string>(['a', 'b', 'c']));

function print3<T, U>(x: T, y: U): void {
  console.log(x, y);
}
print3<string, string>('와우~', '어려워요');

function print4<T, U>(x: T, y: U): void {
  console.log(x, y);
}
print4<string, number>('hihi~', 333);

interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}
const iphone13: Phone<string> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: 'black',
};

///////

type iphoneOption = {
  color: string;
  storage: number;
};
const iphone13Pro: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: {
    color: 'silver',
    storage: 256,
  },
};
console.log(iphone13);
console.log(iphone13Pro);
/*
function arrElement<T>(arr: T[], idx: number): T {
  return arr[idx];
}
console.log(arrElement<string>(['a'], 0));
 */
function arrElement<T>(arr: T[], idx: number): T | boolean {
  if (arr.length <= idx) {
    return false;
  }
  return arr[idx];
}
console.log(arrElement<string>(['a'], 0));
console.log(arrElement<string>(['a'], 1));
