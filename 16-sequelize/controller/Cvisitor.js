const models = require('../models/index');
const Visitor = models.Visitor;


//GET /
exports.main = (req,res)=>{
    res.render('index');
};

//GET /visitor - db 목록 조회
exports.getVisitors = (req, res) => {
    // [Before]
    /* Visitor.getVisitors((result) => {
        // 모델에 rows를 result라는 변수명으로 받음.
        console.log('Cvisitor reuslt: ',result);
        res.render('visitor',{ data: result });
    }); */

    // [After]
    // SELECT * FROM visitor
    console.log(Visitor);
    Visitor.findAll().then((result) => {
        console.log('findAll: ', result);
        res.render('visitor',{data:result});
    })
};

//POST /visitor
exports.postVisitor = (req, res) => {
    const {name, comment} = req.body;
    // 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함.
    // Visitor.postVisitor( view에서 받아온 데이터, 콜백함수 ) 호출
    //[Before]
    /* Visitor.postVisitor(req.body,(result)=>{
        // result: rows.insertId => ex) 3
        console.log('post Cvisitor.js ',result);
        res.send({id:result, name, comment});
    }); */

    //[After]
    // INSERT INTO...
    Visitor.create({
        name: name,
        comment: comment
    }).then((result)=>{
        console.log('create: ', result);
        res.send(result);
    })
};

//get /visitor - 하나만 조회
//get /visitor -> localhost:PORT/visitor?id=N
exports.getVisitor = (req,res) => {
    console.log(req.query.id);

    // 모델 함수 호출
    //[Before]
    /* Visitor.getVisitor(req.query.id, (result)=>{
        console.log('getVisitor Cvisitor.js',result);
        res.send(result);
    }); */
    //[After]
    //
    Visitor.findOne({
        where:{ id: req.query.id}
    }).then((result)=>{
        console.log('findOne: ', result);
        res.send(result);
    })


}
//get /visitor - 하나만 조회
//get /visitor -> localhost:PORT/visitor/:id
exports.getVisitor2 = (req,res) => {
    console.log(req.params.id);

    // 모델 함수 호출
    //[Before]
    /* Visitor.getVisitor(req.params.id, (result)=>{
        console.log('getVisitor Cvisitor.js',result);
        res.send(result);
    }); */
    //[After]
    Visitor.findOne({
        where:{ id: req.params.id}
    }).then((result)=>{
        console.log('findOne: ', result);
        res.send(result);
    })
}


// PATCH / visitor
exports.patch_visitor = (req,res) => {
    console.log(req.body);

    // 모델 함수 호출
    //[Before]
    /* Visitor.patchVisitor(req.body, (result)=>{
        console.log('patchVisitor Cvisitor.js',result);
        res.send('수정 성공!');

        //에러처리는 나중에
    }); */
    //[After]
    // 'UPDATE visitor SET name = ?, comment =? '
    Visitor.update({
            name: req.body.name,
            comment: req.body.comment
        },
        {
            where:{
                id: req.body.id,
            }
        }
    ).then((result)=>{
        console.log('update : ', result);
        res.send('수정 성공!');
    })

}

// DELETE / visitor
exports.delete_visitor = (req,res) => {
    console.log(req.body);

    // 모델 함수 호출
    //[Before]
    /* Visitor.deleteVisitor(req.body.id, (result)=>{
        console.log('deleteVisitor Cvisitor.js', result);
        res.send('삭제 성공!');
    }); */
    //[After]
    //'DELETE FROM visitor WHERE id = ?
    Visitor.destroy({
        where: {id: req.body.id }
    }).then((result)=>{
        console.log('destroy: ',result);
        res.send('삭제 성공!')
    })
}


