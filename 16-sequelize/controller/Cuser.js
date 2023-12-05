const models = require('../models/index');
const User = models.User;

//GET /
exports.main = (req,res)=>{
    res.render('index');
};
exports.getUser = (req,res)=>{
    res.render('user');
};

//회원가입 화면
exports.getSignup = (req,res)=>{
    res.render('signup');
};
//회원가입 정보 전송
exports.postSignup = (req,res)=>{
    const {userid, name, pw} = req.body;
    console.log(req.body);

    //'INSERT INTO user2 (name, userid, pw) VALUES ( ? , ? , ? )'
    User.create({
        userid: userid,
        name: name,
        pw: pw
    }).then((result)=>{
        console.log('create: ', result);
        res.send(result);
    });
    /*  User.postSignup(req.body,(result)=>{
        // result: rows
        console.log('ctr postSignup : ',result);
        res.send(result);
    }); */
};

// /user/signin (로그인 화면)
exports.getSignin = (req,res)=>{
    console.log(req.body);
    res.render('signin');
};
// /user/signin 로그인 버튼(로그인 정보 전송)
exports.postSignin = (req,res)=>{
    const {userid, pw} = req.body;
    console.log('postSignin : ',userid, pw);// form 인풋 값들. hong 1111

    //SELECT * FROM user2 WHERE userid = ? and pw = ?
    //findAll() 버전:
    /* User.findAll({
        where:{
            userid : userid,
            pw : pw
        }
    }).then((result) => {
        console.log('findAll: ', result);
        // console.log('findAll2: ', result[0].dataValues.id);
        // res.render('user',{data:result[0].dataValues});
        if (result.length) res.send({userInfo: result[0].dataValues, isSuccess:true});
        else res.send({isSuccess:false});
    }); */
    //findOne() 버전:
    User.findOne({
        raw:true,
        where:{
            userid : userid,
            pw : pw
        }
    }).then((result) => {
        //result 결과
        // id, pw일치 할때 : {}
        // 불일치 : null
        // res.render('user',{data:result[0].dataValues});
        console.log("findOne: ", result);
        if (result) res.send({userInfo: result, isSuccess:true});
        else res.send({isSuccess:false});
    });

   /*  User.postSignin(req.body,(result)=>{
        if (result.length) res.send({userInfo: result[0], isSuccess:true});
        else res.send({isSuccess:false});
    }); */
};

// 회원정보
exports.postProfile = (req,res)=>{
    console.log('Cuser postProfile reuslt: ',req.body);
    //SELECT * FROM  user2 WHERE userid = ?;
    console.log('postPrifile: ',req.body.id);
    //findAll
    /* User.findAll({
        where:{ 
            id: req.body.id
        }
    }).then((result)=>{
        console.log(result);
        console.log(result[0].dataValues);
        if(result.length) res.render('profile',{data:result[0].dataValues});
    }); */

    //findOne
    User.findOne({
        where:{ 
            id: req.body.id
        }
    }).then((result)=>{
        console.log(result);
        if(result) res.render('profile',{data:result});
    });
    /* User.postProfile(req.body, (result) => {
        console.log('Cuser postProfile reuslt: ',req.body, result);
        if(result.length) res.render('profile',{data:result[0]});
    }); */
};

exports.patchProfileUser = (req,res)=>{
    //UPDATE user2 SET name = ?, pw = ? WHERE id = ?;
    User.update({
            name: req.body.name,
            pw: req.body.pw
        }, {
            where:{
                id: req.body.id,
            }
        }
    ).then((result)=>{
        console.log('update : ', result);
        res.send('회원정보 수정 성공!');
    });
    /* User.patchProfileUser(req.body, (result) => {
        res.send('회원정보 수정 성공!');
    }); */
};
exports.deleteProfileUser = (req,res)=>{
    //DELETE FROM user2 WHERE id = ?;
    User.destroy({
        where: {id: req.body.id }
    }).then((result)=>{
        console.log('destroy: ',result);
        //res.send('삭제 성공!');
        res.send({deleteUserId:req.body.id});
    })

    /* User.deleteProfileUser(req.body.id, (result) => {
        // 모델에 rows를 result라는 변수명으로 받음.
        console.log('Cuser deleteProfileUser reuslt: ',req.body, result);
        res.send({deleteUserId:req.body.id});
    }); */
};