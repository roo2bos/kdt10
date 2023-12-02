const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');

router.get('/',controller.main);
router.get('/visitor',controller.getVisitors);
router.post('/visitor',controller.postVisitor);

module.exports = router;
