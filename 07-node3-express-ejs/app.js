const express = require('express');
const app = express();
const PORT = 8000;

//express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine','ejs');
//템플릿 엔진 파일(.ejs)을 저장할 위치 등록
app.set('views','./views');

//static 미들웨어 등록(정적파일 로드. 예 : css, js)
//static 이라는 실제 폴더를 static 이름으로 접근하겠다.
// app.use('/static', express.static(__dirname+ '/static'))
app.use('/public', express.static(__dirname+ '/static'))
console.log(__dirname)

//app.get(경로, 해당 경로로 들어왔을때 실행할 함수)
//localhost:8000/ 경로로 접속 했을때
app.get('/',function(req,res){
    //console.log(req.query)
    //res.send(응답 내용)
    // res.send('<h1>Hello Express!</h1>')

    //index라는 파일명을 찾아서 해당 파일 렌더
    res.render('index',{
        btns:['사과','오렌지','키위'],
        isLogin:true,
        me:{
            name:'ho',
            msg:'반갑습니다'
        }
    });
    //2번째 인자를 통해서 변수(btns)를 보낼 수 있음
});
app.get('/login',function(req,res){
    res.render('login');
});
app.get('/register',function(req,res){
    res.render('register');
});
app.get('/intro',function(req,res){
    //res.send(응답 내용)
    // res.send('<h1>Hello Express!</h1>')

    //index라는 파일명을 찾아서 해당 파일 호출
    res.render('intro');
});

app.get('/kdt',function(req,res){
    //res.send(응답 내용)

    console.log('originalUrl : '+req.originalUrl);
    console.log('baseUrl : '+req.baseUrl);
    console.log('path : '+req.path);

    res.send('<h1>Hello KDT!</h1>')
});

app.listen(PORT, function (){
    console.log(`server listening on ${PORT}`);//8000번 포트로 서버 실행
})