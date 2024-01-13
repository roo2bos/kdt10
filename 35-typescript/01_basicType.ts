//명시적 타입 지정
let a: number = 1;
// a = 5;
// a = '안녕하세요';
console.log(a);

let b: string = 'str';
// let bb: string = 1; //error
let c: boolean = true;
let d: null = null;
let e: undefined;

//타입 추론(암묵적으로 타입 지정됨)
let aa = 5;
let bb = 'hello';
let cc = false;
let dd = null;
let ee;

//배열
//배열 타입을 지정하는 방법
//1.type[]
let numArr: number[] = [1, 2, 3, 4, 5];

//2. Array<type>
let strArr: Array<string> = ['a', 'b', 'c'];
//배열의 원소가 여러 타입일 경우
let arr1: (number | string | number[])[] = [1, [1, 2], '2'];
console.log(arr1);
//어떤 자료형이든 상관 없는 배열
let arr2: any[] = [1, 'bye', null, [1, 2, 3], ['1', '2'], true];

//객체
let obj: object = {
  name: 'abc',
  gender: 'male',
};
