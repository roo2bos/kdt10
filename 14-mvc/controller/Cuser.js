//[After] model 연결
const Cuser = require('../model/User');


// GET '/comments'
console.log('ctr: ',Cuser.userInfo());
exports.userInfo = (req,res)=>{
    res.render('user',{userInfo:Cuser.userInfo()});
};