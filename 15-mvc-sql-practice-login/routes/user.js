const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

router.get('/',controller.getUser);
router.get('/user',controller.getUser);
//로그인
router.get('/user/signin',controller.getSignin);
router.post('/user/signin',controller.postSignin);

//회원가입
router.get('/user/signup',controller.getSignup);
router.post('/user/signup',controller.postSignup);

//정보변경
router.post('/user/profile',controller.postProfile);
router.patch('/user/profile/edit',controller.patchProfileUser);
router.delete('/user/profile/delete',controller.deleteProfileUser);

module.exports = router;
