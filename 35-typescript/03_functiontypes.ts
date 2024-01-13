function print(a: number, b: number, c?: number): void {
  console.log('a= ', a);
  console.log('b= ', b);
  console.log('c= ', c);
  console.log('-------');
}
// print(2, 4, 6);
// print(1, 5);

//매개 변수에 기본값 할당 가능
function print2(a: number, b: number, c: number = 50) {
  console.log('a= ', a);
  console.log('b= ', b);
  console.log('c= ', c);
  console.log('-------');
}

print2(2, 4, 6);
print2(1, 5);

function printHello(): void {
  console.log('hello');
}
printHello();

//void가 아닌 자료형을 반환하는 함수
function sayHello(): string {
  return 'hello~~';
}
console.log(sayHello());

function returnNum(): number {
  return 10 * 10;
}
console.log(returnNum());
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(500, 250));

//화살표 함수
const sum2 = (a: number, b: number): number => {
  return a + b;
};
console.log(sum2(500, 250));
//화살표 함수 리턴 생략
const sum3 = (a: number, b: number): number => a + b;
console.log(sum3(500, 250));

interface Greeting {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const greet: Greeting = {
  name: 'dooly',
  hi() {
    return `여기는 ${this.name} 월드`;
  },
  bye(a: number) {
    return `잘가라는 인사를 ${a}번 했습니다`;
  },
};

console.log(greet.hi()); //여기는 dooly 월드
console.log(greet.bye(1)); //잘가라는 인사를 1번 했습니다

function goingOn(): never {
  while (true) {
    console.log('gogo!');
  }
} //무한 루프에 빠져 함수가 끝나지 않음.

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기

const sum4 = (a: number, b: number): number => a + b;
console.log(sum4(5, 11));

// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

// 테스트는 이렇게!
const sum5 = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;
console.log(sum5(1, 2, 3, 4, 10)); // 20
