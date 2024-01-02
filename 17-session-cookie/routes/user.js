const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

router.get('/', controller.getUser);
//로그인
router.get('/signin', controller.getSignin);
router.get('/signin2', controller.getSignin2);

router.post('/signin', controller.postSignin);
router.post('/signin2', controller.postSignin2);

// router.get('/signout',controller.getSignout);
router.post('/signout', controller.postSignout);

//회원가입
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);

//정보변경
router.post('/profile', controller.postProfile);
router.patch('/profile/edit', controller.patchProfileUser);
router.delete('/profile/delete', controller.deleteProfileUser);

router.post('/profile2', controller.postProfile2);
router.patch('/profile2/edit', controller.patchProfileUser2);
router.delete('/profile2/delete', controller.deleteProfileUser2);

module.exports = router;
