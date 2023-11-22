//rest(나머지) 파라미터
//1 함수에서 rest 파라미터 사용
const values=[1,2,3,4,5];
function get(a,b,...rest){
    console.log('a :',a);
    console.log('b :',b);
    console.log('rest :',rest);
}

//함수호출 (spread 사용)
get(...values);
/* 
a : 1
b : 2
rest : [ 3, 4, 5 ] 
*/
console.log('----');
get(values);
/* 
a : [ 1, 2, 3, 4, 5 ]
b : undefined
rest : [] 
*/
console.log('----');

//2 객체에서 rest
const icecream={
    flavor: 'choco',
    price: 1000,
    company: 'bingre'
}
const {flavor, ...rest} = icecream;
console.log(flavor);
console.log(rest);
console.log('----');

//3 배열에서 rest
const number=[1,2,3,4,5,6];
const [one, two, ...rest1] = number;
console.log(one);// 1
console.log(two);// 2
console.log(rest1);// [ 3, 4, 5, 6 ]