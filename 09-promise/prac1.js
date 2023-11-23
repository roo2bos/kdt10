//콜백
function call(name, cb){
    setTimeout(function(){
        console.log(name);
        cb(name);
    },1000)
}

function back(cb){
    setTimeout(function (){
        console.log('back');
        cb('back');
    },1000);
}
function hell(cb){
    setTimeout(function (){
        cb('callback hell');
    },1000);
}
/* call('kim', function (name){
    console.log(name+'반가워');
    back(function (txt){
        console.log(txt + '을 실행했구나');
        hell(function (message){
            console.log('여기는'+ message);
        });        
    })    
}); */

// 실습 : 프로미스
function callPromise(name){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000);
    });
}
function backPromise(txt){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log(txt)
            resolve('back');
        },700);
    });
}
function hellPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve('callback hell');
        },500);
    });
}

/* callPromise('kim').then((name)=>{
    console.log(name+' 반가워');
    return backPromise('back');
}).then((txt)=>{
    console.log(txt+'을 샐행 했구나');
    return hellPromise();
}).then((message)=>{
    console.log('여기는'+ message);
}).catch((error)=>console.log(error)); */

//풀이
function callPromise(name){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000);
    });
}
function backPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log('back')
            resolve('back');
        },700);
    });
}
function hellPromise(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve('callback hell');
        },500);
    });
}

callPromise('kim').then((name)=>{
    console.log(name+' 반가워');
    return backPromise();
}).then((txt)=>{
    console.log(txt+'을 샐행 했구나');
    return hellPromise();
}).then((message)=>{
    console.log('여기는'+ message);
}).catch((error)=>console.log(error));