//math 모듈을 불러와서 사용 : package.json에서 type을 module로 설정 [안]했을때.
// const add = require('./math.js')
// console.log(add(5,7));


//import : package.json에서 type을 module로 설정 했을때.
import { add } from "./math.js";
console.log(add(5,7))