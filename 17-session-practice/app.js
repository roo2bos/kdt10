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

const userInfo = {id:'aaaa',pw:'1111'}

app.get('/', (req, res)=>{
    //req.session.user 값이 있는지 검사를 해서 isLogin 변수로 로그인 여부를 보내줄게요
    const user = req.session.user;
    console.log('user: ',user);
    console.log('res: ',req);
    if(user !== undefined) res.render('index',{isLogin:true, user:user});
    else res.render('index',{isLogin:false});
});

app.get('/login', (req, res)=>{
    res.render('login');
});
app.post('/login', (req, res)=>{
    const { id , pw} = req.body;
    if(id=== userInfo.id && pw === userInfo.pw){
        req.session.user = id;
        res.redirect('/');
    }else{
        res.send('로그인 실패');
    }
});

app.get('/logout', (req, res)=>{
    const user = req.session.user; //user id
    if(user !== undefined){
        req.session.destroy((err)=>{
            res.redirect('/');
        });
    }else{
        res.send('잘못된 접근 입니다.')
    }
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})