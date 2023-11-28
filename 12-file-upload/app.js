const express = require('express');
const app = express();
const PORT = 8000;

//multer
const multer = require('multer');
const path = require('path');// 경로에 대한 내장 모듈
const upload = multer({//미들웨어
    dest:'uploads/', // dest: 클라이트가 업로드한 파일을 저장할 서버측 경로
});

const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    storage:multer.diskStorage({
        //destination: 경로 설정
        destination(req, file, done){
            //done : callback 함수
            //done(null, xx): null => 에러가 없다는 의미
            done(null, 'uploads/');// 파일을 업로드할 경로 설정
        },
        filename(req, file, done){
            //파일의 확장자를 추출 => 'path' 모듈 활용
            const ext = path.extname(file.originalname);//확장자 추출(apple.png)
            //path.basename(file.originalname, ext) => apple
            //=> 확장자를 제외한 파일이름만
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    //limits: 파일 제한 정보
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB로 제한
    }
});

app.set('view engine', 'ejs');
app.set('views','./views');

//body.parse
app.use(express.urlencoded({ extended:false }));
app.use(express.json());//json 형식으로 데이터를 주고 받음

//static 등록 => 이미지 경로 접근 (프론트)
app.use('/uploads', express.static(__dirname + '/uploads'));


app.get('/',(req,res)=>{
    res.render('index');
})

//1 single(): 하나의 파일을 업로드
// upload.single('userfile') : 클라이언트 요청이 들어오면,
//multer 설정에 따라 파일을 업로드 한 후, req.file 객체를 생성
//single() 인자는 input 태그의 name 값과 일치시켜야 함.

//upload만 사용하면 파일명만 있고 확장자가 없어서 확장자를 추가하는 작업을한 uploadDetail로 적용
app.post('/upload',uploadDetail.single('userfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    // res.send(req.body);
    res.send('파일 업로드 완료');
    /* {
        fieldname: 'userfile',//폼에 정의한 name 값
        originalname: '313436471_567633168698766_979945503348324055_n.jpeg',// 원본 파일명
        encoding: '7bit', // 파일 인코딩 타입
        mimetype: 'image/jpeg',// 파일 타입
        destination: 'uploads/',// 파일 저장 경로
        filename: 'a01b3ca460f7b486384c5788f8dff07a',// 저장된 파일명
        path: 'uploads/a01b3ca460f7b486384c5788f8dff07a', // 업로드된 파일 전체 경로
        size: 424555// 파일 사이즈
      } */
})

//2. array() 하나의 인푸에 여러 파일 업로드
app.post('/upload/array', uploadDetail.array('userfiles'),(req,res)=>{
    //req.files : [{file1 정보}, {file2 정보}] : 배열 형태로 받아짐.
    console.log(req.files);
    console.log(req.body);
    res.send('하나의 인풋에 여러개의 파일 업로드 완료');
})

//3 fileds() 여러 파일을 각각의 인풋에 업로드
app.post('/upload/fields', uploadDetail.fields([
    {name: 'userfile1'},
    {name: 'userfile2'}
]),(req,res)=>{
    /*
    {
        userfile1:[
            {파일 정보}
        ],
        userfile2:[
            {파일 정보}
        ]
    }
     */
    
    console.log(req.files);
    console.log(req.body);
    res.send('여러 개의 인풋에 각각의 파일 업로드 완료');
})

app.post('/dynamic',uploadDetail.single('dynamicFile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    // res.send('성공');
    res.send({file:req.file, title: req.body.title});
});


const uploadDetailUser = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');// 파일을 업로드할 경로 설정
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);//확장자 추출
            
            let newFileName = req.body.id;
            console.log('테스트 : ',newFileName);
            // done(null, path.basename(newFileName, ext) + Date.now() + ext);
            done(null, newFileName + ext);
        }
    }),
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB로 제한
    }
});

app.get('/prac1',(req,res)=>{
    res.render('prac1');
});
app.post('/uploads/register',uploadDetailUser.single('dynamicFile'),(req,res)=>{
    console.log('서버 req.file: ',req.file);
    console.log('서버 req.body: ',req.body);
    res.send({
        file:req.file, 
        id: req.body.idd,
        pw: req.body.pw,
        username: req.body.username,
        age: req.body.age
    });
})

app.listen(PORT, function (){
    console.log(`${PORT} is opening!`);
});