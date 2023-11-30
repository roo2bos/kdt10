const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
    {
        id:1,
        userid:'helloworld',
        date:'2023-10-31',
        comment:'안녕하세요~'
    },
    {
        id:2,
        userid:'apple',
        date:'2023-11-01',
        comment:'반가워요~'
    },
    {
        id:3,
        userid:'hello',
        date:'2023-11-04',
        comment:'좋은 아침~'
    },
    {
        id:4,
        userid:'world',
        date:'2023-11-06',
        comment:'안녕~?'
    },
    {
        id:5,
        userid:'orange',
        date:'2023-11-10',
        comment:'하이~'
    },
];

const userInfo = {
    realId: 'helloworld',
    realPw: '1234',
    name: '홍길동',
    age: '20',
}

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아 진다면? app.js 코드가 길어짐 -> 유지 보수성 하락

// GET '/'
app.get('/',(req,res)=>{
    res.render('index');
});

// GET '/comments'
app.get('/comments',(req,res)=>{
    console.log(comments);// [{},{},{}..]
    res.render('comments',{commentInfos:comments});
});

// GET '/comment/:id'
app.get('/comment/:id',(req,res)=>{
    // req.query : /comment?id=1
    console.log(req.params); // {id:'1'} : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id: ',req.params.id);

    const commentId = req.params.id;// 댓글 id: url로 들어옴 매개변수
    console.log(comments[commentId - 1]);

    // 존재하지 않는 댓글 id 접속시 404 페이지
    if(commentId < 1 || commentId > comments.length){
        return res.render('404',{msg: `${req.params.id}은(는) 없는 페이지 입니다`});
    }

    console.log(typeof commentId);//string
    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if(isNaN(commentId)){
        return res.render('404',{msg:'댓글확인은 숫자로된 URL(:id)만 허용 합니다. 예) /comment/1'});
    }
    
    res.render('comment',{commentInfos:comments[commentId - 1]});
});

// GET '/user'
app.get('/user',(req,res)=>{
    res.render('user',{userInfo});
});

//[404 error]
// 맨 마지막에 라이트로 선언: 위에다 하게 되면 나머지 코드 무시 되기 때문에 
app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})