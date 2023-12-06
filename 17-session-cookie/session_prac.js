const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 세션 옵션 객체
// secure: 값을 ture로 하면 http에서만 세션을 주고 받음
// secter: 한전하게 쿠키를 전송하기 위한 쿠키 서명 값(세션을 발급할 때 사용되는 키)
// resave: 세션에 수정사항이 생기지 않더라도, 매 요청(req)마다 세션을 다시 저장할 것인지, 세션을 항상 저장할 건지 지정하는 값(false)
// savUninitailized: 세션을 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
// httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능
// maxAge: 쿠키 수명(단위 ms)


app.use(session({
    secret:'mySessionSecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        maxAge: 60 * 1000
    }
}));

app.get('/', (req, res)=>{
    res.render('index_session');
});
const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('/user/signout', (req, res)=>{
    console.log('destroy: ',req.session.id);
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send('fail');
        }
        res.redirect('/user/signin');
    });
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})