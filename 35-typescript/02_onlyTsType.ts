let drink: [string, string] = ['cola', 'cidar'] as const;
drink[0] = '콜라';
drink[1] = '사이다';
drink.push('환타');
console.log(drink); //[ '콜라', '사이다', '환타' ]

//readonly: 요소 타입과 순서와 길이를 고정
let drink2: readonly [string, number] = ['사이다', 1500];
// drink2.push('환타');
console.log(drink2); //[ '사이다', 1500 ]

// enum type
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
console.log(Auth.user); //1

enum Cafe {
  americano = '아메리카노',
  latte = '라떼',
}
console.log(Cafe); //{ americano: '아메리카노', latte: '라떼' }
enum Cake {
  choco,
  cream,
  fruit = '과일 케이크',
}
console.log(Cake); //{ '0': 'choco', '1': 'cream', choco: 0, cream: 1, fruit: '과일 케이크' }
console.log(Cake.choco); //0
console.log(Cake.fruit); //과일 케이크

//any
let v2;
v2 = 1;
v2 = 'str';
v2 = true;
v2 = null;
v2 = undefined;
console.log(v2);

let olimpic_newgame: readonly [object, boolean] = [
  { name: '쇼트트랙', type: '혼성계주' },
  true,
];
// olimpic_newgame[1] = false;//error
console.log(olimpic_newgame);

////////////////////////////////////
//type & interface

//interface
interface Student {
  name: string;
  // grade: number;
  isPassed: boolean;
}

const student: Student = {
  name: 'hong',
  // grade: 1,
  isPassed: true,
};
const student2: Student = {
  name: 'song',
  // grade: 99,
  isPassed: true,
};
//object 타입 사용시 value의 타입을 지정하지 못함.
const student3: object = {
  name: 'song',
  // grade: 99,
  isPassed: true,
};

//interface 상속
enum Score {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}
interface BaseballClub extends Student {
  name: string;
  position: string;
  height: number;
  backNumber?: number; //있어도 되고 없어도되는 값
  [grade: number]: Score; // 1:Score.A // 1:A
  isPassed: boolean;
}
const otani: BaseballClub = {
  name: 'otani',
  height: 193,
  position: 'picher',
  backNumber: 10, //있어도 되고 없어도되는 값
  isPassed: true,
  1: Score.A,
};
console.log(otani);

//type : interface와 마찬가지로 타입 만들어줌, 오브젝트 뿐만아니라 문자,숫자로 제한을 둘 수 있음
type Gender = 'Female' | 'Male';
const gender: Gender = 'Female';
//const gender2 : Gender = 'female';//type에서 지정하지 않은 값이 들어올 경우 type error

//enum vs type
enum UserNumber {
  one = 1,
  ten = 10,
}
type UserNumber2 = 1 | 10;
const num1: UserNumber = UserNumber.ten;
const num2: UserNumber2 = 10;

//교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  price: number;
}
interface Car {
  name: string;
  price: number;
  color: string;
}
type ToyCar = Toy & Car;

const toycar: ToyCar = {
  name: 'tayo',
  price: 56000,
  color: 'blue',
};

//type Gender = 'Female' | 'Male';
type Person = {
  name: string;
  age: number;
  hobby: string[];
  gender: Gender;
};

let dong: Person = {
  name: 'gildong',
  gender: 'Female',
  age: 20,
  hobby: ['backing', 'sleep'],
};
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
console.log(heroGame_A, heroGame_B);
