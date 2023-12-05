const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

router.get('/',controller.getUser);
//로그인
router.get('/signin',controller.getSignin);
router.post('/signin',controller.postSignin);

//회원가입
router.get('/signup',controller.getSignup);
router.post('/signup',controller.postSignup);

//정보변경
router.post('/profile',controller.postProfile);
router.patch('/profile/edit',controller.patchProfileUser);
router.delete('/profile/delete',controller.deleteProfileUser);

module.exports = router;
