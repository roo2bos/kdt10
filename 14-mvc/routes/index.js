const express = require('express');
const router = express.Router();

// controller
const controller = require('../controller/Cmain');

//Controller 연결
//경로를 컨트롤러와 연결지어 사용 가능
router.get('/',controller.main);
router.get('/comments',controller.comments);
router.get('/comment/:id',controller.comment);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함함.
module.exports = router;
