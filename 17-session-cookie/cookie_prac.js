const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
// 일반
// app.use(cookieParser());
// 암호화
app.use(cookieParser('mySecretKey'));

const cookieConfig = {
    httpOnly: true,
    maxAge: 86400, // 하루
    signed:true
}



app.get('/', (req, res) => {
    console.log('get isPop: ',req.signedCookies.popup);
    /* if(req.signedCookies.popup==undefined){
        res.render('index_release', {popup:true});
        console.log('쿠키 없다')
    }else{
        res.render('index_release', {popup:false});
        console.log('쿠키 있다')
    } */    
    res.render('index_cookie', {popup:req.signedCookies.popup});
});


app.post('/setCookie', (req, res) => {
    // TODO: 쿠키 생성
    // 쿠키 이름: 'popup', 쿠키 값: 'hide'
    if(req.body.cookie){
        res.cookie('popup','hide', cookieConfig);
        res.send({popup:true});
    }else{
        res.send({popup:false});
    }
});

app.post('/clearCookie', (req, res) => {
    res.clearCookie('popup','hide', cookieConfig);
    res.send('clear cookie!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
