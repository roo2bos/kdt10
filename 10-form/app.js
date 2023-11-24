const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views','views');

//미들웨어
//req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록

//post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());//json 형식으로 데이터를 주고 받음

app.get('/',(req,res) => {
    //views 폴더 내부에 index라는 ejs 파일을 보여줌
    res.render('index')
});

//form 페이지
app.get('/prac1',(req,res) => {
    res.render('prac1')
});
app.get('/prac2',(req,res) => {
    res.render('prac2')
});

//get 방식 전송
app.get('/pracResult1',(req,res)=>{
    res.render('pracResult1',{userInfo:req.query})
});

//post 방식 전송
app.post('/pracResult2',(req,res)=>{
    res.render('pracResult2',{userInfo:req.body})
});

//GET '/login' 요청이 들어오면 임의의 메세지 전송
//get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login',(req,res)=>{
    console.log('-----');
    console.log('req.query: ',req.query);
    // res.send('get 요청 성공!');
    res.render('result',{title:'Get 요청',userInfo:req.query})
});

//POST '/login' 요청으로 들어오면 임의의 메세지 전송
//post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/login',(req,res)=>{
    console.log('-----');
    console.log('req.body: ',req.body);
    //res.send('post 요청 성공!');
    res.render('result',{title:'POST 요청',userInfo:req.body,setColor:null})
});

app.post('/js-form-check',(req,res)=>{
    console.log('-----');
    console.log('req.body: ',req.body);
    res.send('js validation 요청 성공!');
    // res.render('result',{title:'POST 요청',userInfo:req.body})
});

app.listen(PORT, function (){
    console.log(`${PORT} is opening!`);
});