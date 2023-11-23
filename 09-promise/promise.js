//promise(프로미스) 객체
/**
 * - 비동기 함수를 동기처리하기 위해 만든 객체
 * - 미래에 성공/실패에 대한 결과 값을 "약속"한다는 의미
 * - 성공과 실패를 분리해서 번환
 * - 성공에 대한 결과는 then 이라는 메서드로,
 * - 실패에 대한 결과는 catch라는 메서드로 처리
 * - resolve: 설공
 * - rejected: 실패
 */

//1. promise를 생성하는 코드

/* function promise1(flag){
    // 프로미스 객체를 생성하여 반환
    console.log(flag)
    return new Promise(function(resolve, reject){
        if(flag){
            console.log(resolve)
            resolve(`현재 프로미스의 상태는 fulfilled(이행),
            then 메서드로 연결! flag: ${flag}`);
        }else{
            reject(`현재 프로미스의 상태는 rejected(거절), 
            catch 메서드로 연결 flag: ${flag}`);
        }
    })
}

//2. promise를 사용하는 코드
promise1(5 > 3).then((result) => {
    console.log(`result:`, result);
}).catch((error) => {
    console.log('error: ', error);
});
console.log('----------'); */


// ------- 프로미스 예제
// index.js에서 '콜백 함수'를 이용해서 동기처리한 코드를
// 'promise'를 이용해 동기처리

/* function goMart(){  
    console.log('마트에 와서 어떤 음료를 살지 고민중...');
}
function pickDrink(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('고민 끝');
            product ='콜라';
            price=2600;
            const money = 2000;
            if( price > money ){
                reject();
            }else{
                resolve()
            }
            //resolve();//성공을 의미하는 resolve 실행(=성공 값을 전달)
        },3000);
    })
}
function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;
goMart();
pickDrink().then(()=>{
    pay(product, price);
}).catch(()=>console.log('돈이 부족하다'));
 */

//-- 프로미스 체이닝
// 함수를 이용해서 (4+3) * 2 - 1 = 13을 연산 하자

//1. 콜백함수라면?
function add(n1, n2, cb){
    setTimeout(function (){
        const result = n1 + n2;
        cb(result);// mul(result)에 넘겨줌
    },1000);
}
function mul(n, cb){
    setTimeout(function (){
        const result = n * 2;
        cb(result);// sub(result)에 넘겨줌
    },700);
}
function sub(n, cb){
    setTimeout(function (){
        const result = n - 1;
        cb(result);// (result)
    },500);
}

/* add(4,3,function (result){
    console.log('add result :',result);
    mul(result, function (result){
        console.log('mul result: ',result);
        sub(result, function (result){
            console.log('sub result: ',result);
        });
    });
}); */

//2 프로미스 체이닝이라면?
function addPromise(n1, n2){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            const result = n1 + n2;
            resolve(result);
        },1000);    
    });
    
}
function mulPromise(n){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            const result = n * 2;
            // resolve(result);
            reject('의도적인 에러 일으킴!');//의도적 리젝
        },700);
    });
}
function subPromise(n){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            const result = n - 1;
            resolve(result);// (result)
        },500);
    });
}

addPromise(3,4)
.then((result1)=>{
    console.log('1 add: ',result1);
    return mulPromise(result1);
}).then((result2)=>{
    console.log('2 mul: ',result2);
    return subPromise(result2);
}).then((result3)=>{
    console.log('2 sub: ',result3);
}).catch((error)=>console.log(error));