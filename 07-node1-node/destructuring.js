//구조분해 할당 : 구조를 분해해서 변수에 할당
//1. 객체를 구조분해
const cookie = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트맛'
}
console.log(cookie.choco)

//구조분해할당
const {choco, vanilla, mint} = cookie;
console.log(choco)
console.log(vanilla)
console.log(mint)

//2. 배열로 구조분해
const arr = ['first','second']
const [one, two] = arr;
//const [one,two]=['first','second']; 와 같다

console.log(one, two);
//arr 배열은 아래와 같다.
//const one=arr[0];
//const two=arr[1];