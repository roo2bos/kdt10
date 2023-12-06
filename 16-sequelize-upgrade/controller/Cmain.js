const { Op } = require('sequelize');
const { Player, Profile, Team } = require('../models/index');

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.send(players);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}
exports.getPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const player = await Player.findOne({
            where:{
                player_id: player_id
            }
        });
        // ! 200 코드 : player_id가 없는 경우 에러는 아니고 예외처리 할것.
        res.send(player);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}

exports.postPlayer = async (req, res) => {
    try {
        //createdAt, updatedAt 생략 가능
        //insert into player(name, age, team_id) values 
        const { name, age, team_id } = req.body;
        const newPlayer = await Player.create({
            name, age, team_id
        });
        res.send(newPlayer);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}

exports.patchPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const { team_id } = req.body;
        const updatePlayer = await Player.update({
            team_id
        },{
            where: {player_id}
        });
        res.send(updatePlayer);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}
exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const isDeleted = await Player.destroy({
            where: {player_id }
        });
        console.log(player_id);
        //성공시 1, 실패시 0
        if(isDeleted){
            res.send({isDeleted:true});
        }else{
            res.send({isDeleted:false});
        }
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}

exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findAll();
        res.send(profile[0]);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}

exports.getTeams = async (req, res) => {
    try {
        const { sort , search } = req.query;
        let teams;
        // sort 키가 있는 경우 name 기준으로 오름차순 정렬
        if(sort === 'name_asc'){
            // 전체 팀 조회 - 이름순 오름차순
            // GET /teams?sort=name_asc
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order:[['name','asc']]
            });
            console.log('sort: ',teams)
        }else if(sort === 'name_desc'){
            // 전체 팀 조회 - 이름순 오름차순
            // GET /teams?sort=name_asc
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order:[['name','desc']]
            });
            console.log('sort: ',teams)
        }else if(search){
            //전체 팀 조회 - 팀 이름 검색
            // GET /teams/?search=lg
            // search key에 대한 값이 있다면
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where:{
                    name:{[Op.like]: `%${search}%`}
                }
            })
        }else{
            // 전체 팀 조회
            // GET /teams
            teams = await Team.findAll({
                attributes: ['team_id', 'name']
            })
        }

        res.send(teams);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}


exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            attributes:['team_id', 'name'],
            where:{ team_id }
        });

        res.send(team);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}
exports.getTeamPlayers = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            where:{ team_id },
            include: [{model: Player}] // join과 같은 역할
        });

        res.send(team);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!');
    }
}