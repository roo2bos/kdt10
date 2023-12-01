const Database = require('../model/db');

exports.main = (req,res)=>{
    res.render('index');
};

exports.login = (req, res) => {
    const { id , pw } = req.body;
    if (Database.userInfo.id == id && Database.userInfo.pw == pw) {
        res.send({userInfo: req.body, isSuccess:true});
    }else{
        res.send({isSuccess:false});
    }
};