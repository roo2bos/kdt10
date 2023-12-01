const Database = require('../model/db');

exports.main = (req,res)=>{
    res.render('index');
};

exports.login = (req, res) => {
    const { id , pw } = req.body;
    if (Database.userInfo.id == id && Database.userInfo.pw == pw) {
        // res.send({userInfo: req.body, isSuccess:true});
        res.send({userInfo: Database.userInfo, isSuccess:true});// 실제 db의 유저 데이터(Database.userInfo)를 반환해 줌
    }else{
        res.send({isSuccess:false});
    }
};