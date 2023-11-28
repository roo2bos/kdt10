const express = require('express');
const app = express();
const PORT = 8000;

//multer
const multer = require('multer');
const path = require('path');// 경로에 대한 내장 모듈
const upload = multer({//미들웨어
    dest:'uploads/', // dest: 클라이트가 업로드한 파일을 저장할 서버측 경로
});

app.set('view engine', 'ejs');
app.set('views','./views');

//body.parse
app.use(express.urlencoded({ extended:true }));
app.use(express.json());//json 형식으로 데이터를 주고 받음

//static 등록 => 이미지 경로 접근 (프론트)
app.use('/uploads', express.static(__dirname + '/uploads'));


app.get('/',(req,res)=>{
    res.render('index');
})

const uploadDetailUser = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');// 파일을 업로드할 경로 설정
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);//확장자 추출
            
            let newFileName = req.body.id;
            console.log('테스트 : ',newFileName);
            done(null, path.basename(newFileName, ext) + ext);
        }
    }),
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB로 제한
    }
});

app.get('/prac1_dynamic',(req,res)=>{
    res.render('prac1_dynamic');
});
app.post('/upload/practice2',uploadDetailUser.single('profile'),(req,res)=>{
    console.log('서버 req.file: ',req.file);
    console.log('서버 req.body: ',req.body);
    res.send({
        file:req.file, 
        id: req.body.id,
        pw: req.body.pw,
        username: req.body.username,
        age: req.body.age
    });
})

app.listen(PORT, function (){
    console.log(`${PORT} is opening!`);
});