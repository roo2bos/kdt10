const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');

router.get('/',controller.main);

// get /visitors - 전체 조회
router.get('/visitors',controller.getVisitors);

// post /visitor
router.post('/visitor',controller.postVisitor);


// get /visitor - 하나 조회
// queryString 방식
router.get('/visitor',controller.getVisitor);// req.query
router.get('/visitor/:id',controller.getVisitor2);// req.params

/* 
// 주의) params 사용시 라우터 정의 순서에 주의해야 함.
// /:id 방식이 /test 방식보다 보다 위에 오게 되면 js 특성상 위에서부터 처리 순서상
// params가 test라고 인식 할수가 있음. 원래 의도는 /visitor/1 이여야 함.
// router.get('/visitor/:id',controller.getVisitor2);// id: test
// router.get('/visitor/test',controller.getVisitor2);// req.params 
*/

// PATCH /visitor - 하나 수정
router.patch('/visitor',controller.patch_visitor);
// DELETE /visitor - 하나 삭제
router.delete('/visitor',controller.delete_visitor);

module.exports = router;
