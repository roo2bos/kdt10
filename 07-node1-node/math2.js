//math2 module
//add 더하기 함수를 정의한 파일
const add = (a,b) => a+b;
const PI = 3.141592;
const E = 2.718;

//1) 객체로 감싸서 내보내기
module.exports = {
    add,//키랑 밸류가 같으면 add:add -> add만 적어도 무방
    PI:PI,
    E:E
}
//2) 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// // 3) 위에꺼 생략
// exports.add = add;
// exports.PI = PI;
// exports.E = E;