//http 모듈로 웹서버 생성
const http = require('http');//http모듈
const fs = require('fs');//파일시스템 모듈(파일 관련 내장 모듈)
const server = http.createServer(function(req,res){
    //req: request 객체(클라이언트에서 서버로 들어온 요청)
    //res: response 객체(서버에서 클라이언트로 보내는 응답)

    //응답 head, 본문, end를 지정
    // res.writeHead(200,{'content-type':'text/html;charset=utf-8'})//응답 해더
    // res.write('<h1>Hello nodeJS!</h1>')//응답 본문
    // res.end('My first node server!</p>')//응답 종료:end가 빠지면 서버가 계속 돌아가서 주의!
    //위에 코드는 localhost:8000 접속이 일어남.


    //예외 처리 -> try - catch문
    try{
        const data = fs.readFileSync('./inde.html');
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        res.write(data);
        res.end();
    } catch(error){
        //실습 : 404.html 만들어서 해당 html 파일을 응답으로 보내도록 코드 작성!
        const data = fs.readFileSync('./404.html');
        res.writeHead(404,{'content-type':'text/html;charset=utf-8'});
        res.write(data);
        res.end();
    }
});
const PORT = 8000;

//req 이벤트 : 클라이언트 요청
server.on('request',function(req,res){
    //console.log('request 이벤트 발생!',req.url);
});
//connection 이벤트 : 클라이언트가 접속(클-서 연결됐을때) 했을때 발생
server.on('connection',function(req,res){
    //console.log('connection 이벤트 발생!');
})
server.listen(PORT,function(){
    console.log(`server listening on ${PORT}`);//8000번 포트로 서버 실행

});

//10초후 서버 종료
// setTimeout(function(){
//     console.log('10초가 지나서 서버 종료');
//     server.close();//서버 종료 메서드
// },10000)