//[After] model 연결
const Comment = require('../model/Comment');


//[Before] Model 연결 전
// (임시) DB로부터 받아온 데이터 댓글 목록
/* const comments = [
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
 */

// GET '/' 주소가 /로 접근할때
exports.main = (req,res)=>{
    res.render('index');
};

// GET '/comments'
exports.comments = (req,res)=>{
    console.log('Comment: ',Comment.commentInfos());// [{},{},{}..]
    res.render('comments',{ commentInfos:Comment.commentInfos(), msg:'' });
};

// GET '/comment/:id'
exports.comment = (req,res)=>{
    // req.query : /comment?id=1
    console.log(req.params); // {id:'1'} : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id: ',req.params.id);

    const comments = Comment.commentInfos(); // model 연결 후 추가
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
};

// 