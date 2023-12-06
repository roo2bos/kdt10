const User = require('../model/User');
const express = require('express');
const app = express();
//GET /
exports.main = (req,res)=>{
    res.render('index',{isSuccess:false});
};
exports.getUser = (req,res)=>{
    res.render('user',{isSuccess:false});
};

//회원가입 화면
exports.getSignup = (req,res)=>{
    res.render('signup',{isSuccess:false});
};
//회원가입 정보 전송
exports.postSignup = (req,res)=>{
    const {name, comment} = req.body;
    console.log(req.body);
    // res.send();
    User.postSignup(req.body,(result)=>{
        // result: rows
        console.log('ctr postSignup : ',result);
        // res.send(result);
    });
};

// /user/signin (로그인 화면)
exports.getSignin = (req,res)=>{
    console.log(req.body);
    res.render('signin',{isSuccess:false});
};
// /user/signin 로그인 버튼(로그인 정보 전송)
exports.postSignin = (req,res)=>{
    const {userid, pw} = req.body;
    console.log('postSignin : ',req.body);// form 인풋 값들. hong 1111
    
    User.postSignin(req.body,(result)=>{
        console.log('postSignin session: ',req.sessionID);
        if (result.length) res.send({userInfo: result[0], isSuccess:true,session:req.session});
        else res.send({isSuccess:false});
    });
};
exports.getSignout = (req,res)=>{
    res.render('signin');
};
exports.postSignout = (req,res)=>{
    const {userid, pw} = req.body;
    console.log('postSignout : ',req.body);// form 인풋 값들. hong 1111
    User.postSignout(req.body,(result)=>{
        console.log('postSignin session: ',req.session);
        if (result.length) res.send({userInfo: result[0], isSuccess:true,session:req.session});
        else res.send({isSuccess:false});
    });
};

// 회원정보
exports.postProfile = (req,res)=>{
    console.log('Cuser postProfile reuslt: ',req.body);
    User.postProfile(req.body, (result) => {
        console.log('Cuser postProfile reuslt: ',req.body, result);
        // if(result.length) res.render('profile',{data:result[0]});
        if(result.length) res.render('signin',{data:result[0],msg:`${result[0].name}님 환영합니다.`,isSuccess:true});
        // if(result.length) res.send({data:result[0],msg:`${result[0].name}님 환영합니다.`});
    });
};

exports.patchProfileUser = (req,res)=>{
    User.patchProfileUser(req.body, (result) => {
        res.send('회원정보 수정 성공!');
    });
};
exports.deleteProfileUser = (req,res)=>{
    User.deleteProfileUser(req.body.id, (result) => {
        // 모델에 rows를 result라는 변수명으로 받음.
        console.log('Cuser deleteProfileUser reuslt: ',req.body, result);
        res.send({deleteUserId:req.body.id});
    });
};