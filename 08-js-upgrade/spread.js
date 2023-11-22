//spread 연산자
//반복가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할
//=> 객체들의 값을 펼처준다!

//배열에서 spread
const a = [1,2,3];
const b = [4,5];
const spared = [...a, ...b];
console.log(spared);

//문자열에서
const str='Hello';
console.log([...str]);//[ 'H', 'e', 'l', 'l', 'o' ]
console.log([...'Hello']);//위 전개연산자와 같음.
console.log(str.split(''));//위 전개연산자와 같음.

//객체에서 spread
const chip = {
    base: 'chip',
    company: 'lotte'
}
const potatochip={
    ...chip,
    flavor:'onion'
}
console.log('chip:',chip);
console.log('potatochip:',potatochip);

const sweetPotatoChip={
    ...potatochip,
    flavor:'sweet onion'
}

console.log('chip:',chip);
console.log('potatochip:',potatochip);
console.log('sweetPotatoChip:',sweetPotatoChip);//기존 값이 바뀜

//실습
const word1='abc';
const word2='xyz';
const word3=[...word1, ...word2];
console.log(word3);