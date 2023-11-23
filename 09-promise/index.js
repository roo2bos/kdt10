//ex. 편의점에 들어가서  음료수를 사고 나오는 상황
/* function goMart(){  
    console.log('마트에 와서 어떤 음료를 살지 고민중...');
}
function pickDrink(){
    setTimeout(function(){
        console.log('고민 끝');
        product ='콜라';
        price=1600;
    },3000);
}
function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;
goMart();
pickDrink();
pay(product, price); */

// ------ 콜백함수 이용 ------

function goMart(){  
    console.log('마트에 와서 어떤 음료를 살지 고민중...');
}
function pickDrink(callback){
    setTimeout(function(){
        console.log('고민 끝');
        product ='콜라';
        price=1600;
        //위의 코드가 실행된 이후 실행될 콜백함수
        callback(product, price);// 매개변수로 넘긴 콜백함수 실행
    },3000);
}
/* function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
} */

let product, price;
goMart();
//pickDrink(pay)
pickDrink(function(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
});
