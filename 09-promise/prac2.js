//풀이
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
            console.log('back');
            resolve('back');
        },700);
    });
}
function hellPromise(msg){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve('callback hell');
        },500);
    });
}

/* callPromise('kim').then((name)=>{
    console.log(name+' 반가워');
    return backPromise();
}).then((txt)=>{
    console.log(txt+'을 샐행 했구나');
    return hellPromise();
}).then((message)=>{
    console.log('여기는'+ message);
}).catch((error)=>console.log(error));
 */
async function exec(){
    let name = await callPromise('kim');
    console.log(name+' 반가워');
    let txt = await backPromise();
    console.log(txt+'을 샐행 했구나');
    let message = await hellPromise();
    console.log('여기는'+ message);
}
exec();
