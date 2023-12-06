const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// localhost:PORT/ 기본 주소
// router.get('/', controller.main);

// GET /players - 전체 선수 조회
router.get('/players', controller.getPlayers);
// /players/player_id : 특정선수 조회
router.get('/players/:player_id', controller.getPlayer);
router.post('/players', controller.postPlayer);

// PATCH /players/:player_id/team : 특정선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

//### DELETE /player/:player_id
router.delete('/players/:player_id', controller.deletePlayer);

//-- 팀관련 API
// GET /teams : 전체 팀 조회
router.get('/teams', controller.getTeams);

// GET /teams/:team_id : 특정 팀 조회
router.get('/teams/:team_id', controller.getTeam);

// GET /teams/:team_id/players : 특정 팀 조회
router.get('/teams/:team_id/players', controller.getTeamPlayers);


router.get('/profile', controller.getProfile);


module.exports = router;