// TODO: User 모델 모듈 불러오기
const { Op } = require('sequelize');
const { User } = require('../models/index');
// TODO: bcrypt 패키지 불러오기
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'asldfl23j43209s9fjk23jdlzxkjcvasd';

exports.index = (req, res) => {
	// index.ejs 렌더 (data 키로 session 객체의 userInfo 전달)
	const userid = req.session.userid;
	const name = req.session.name;
	const token = req.session.token;
	console.log('index: ', req.session);
	if (token !== undefined) {
		res.render('index', { isLogin: true });
	} else res.render('index', { isLogin: false });
	console.log('index session: ', name, userid, token);

	/* const token = ;
	console.log('index token: ', token);
	if (token) {
		res.render('index', { isLogin: true, data: user });
	} else res.render('index', { isLogin: false }); */
};

exports.postToken = async (req, res) => {
	// console.log('post token: ', req.headers.authorization);
	if (req.headers.authorization) {
		const auth = req.headers.authorization.split(' ');
		// console.log('post token split: ', auth);
		token = auth[1];
		try {
			const result = jwt.verify(token, SECRET);
			console.log('post token result: ', result);
			const user = await User.findOne({
				where: {
					userid: result.userid,
				},
			});
			console.log('user.name: ', user.name);
			if (result) {
				res.send({ result: true, name: user.name });
			} else {
				res.send({ result: false, msg: '잘못된 접근입니다!' });
			}
		} catch (err) {
			console.log('err: ', err);
			res.send({ result: false, msg: '인증된 회원이 아닙니다!' });
		}
	} else {
	}
};

exports.getRegister = (req, res) => {
	// register.ejs 렌더
	res.render('register');
};

exports.getLogin = (req, res) => {
	// login.ejs 렌더
	// if (req.session.userid) {
	if (req.session.token != undefined) {
		/* const userid = req.session.userid;
		const user = User.findOne({
			where: {
				userid: userid,
			},
		}); */
		res.redirect('/');
	} else {
		console.log('session 없음');
		res.render('login');
	}
};

exports.getUsers = async (req, res) => {
	// 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
	// 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
	// -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
	if (req.session.userid) {
		try {
			const users = await User.findAll();
			const { name } = users;
			// console.log('req.session: ', req.session);
			res.render('users', { name: req.session.name, users: users });
		} catch (err) {
			console.error(err);
			res.send('Internal Server Error!');
		}
	} else {
		res.render('login');
	}
};

exports.getProfile = async (req, res) => {
	// 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
	// 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김

	console.log(req.session.token);
	if (req.session.userid) {
		const userid = req.session.userid;
		const user = await User.findOne({
			where: {
				userid: userid,
			},
		});
		console.log('get profile user: ', user);
		res.render('profile', { data: user });
	} else {
		res.render('login');
	}
};

exports.postRegister = async (req, res) => {
	// 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
	// 응답은 {result: true}
	try {
		const { userid, pw, name } = req.body;
		// const originalPW = pw; // 원본 비번
		// const hashedPW = hashPW(originalPW);
		const hash = await bcrypt.hash(pw, saltRounds);
		console.log(`hashed PW: ${hash}`);

		//createdAt, updatedAt 생략 가능
		//insert into player(userid, pw, name) values

		const newUser = await User.create({
			userid,
			pw: hash,
			name,
		});
		res.send({ userInfo: newUser, result: true });
	} catch (err) {
		console.error(err);
		res.send('Internal Server Error!');
	}
};

exports.postLogin = async (req, res) => {
	try {
		// Step1. 아이디를 찾아서 사용자 존재 유무 체크
		const { userid, pw } = req.body;
		const user = await User.findOne({
			where: {
				userid,
			},
		});
		// Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
		// 2-1. 유저 있음
		// 2-1-1. 비밀번호 일치;
		//    userInfo 키 값으로 세션 생성 (userInfo는 name키와 id 키를 갖는 "객체")
		//    응답 데이터: { result: true, data: step1에서 찾은 유저 }
		// 2-1-2. 비밀번호 불일치;
		//    응답 데이터; { result: false, message: '비밀번호가 틀렸습니다.'
		// 2-2. 유저 없음
		//    응답 데이터; { result: false, message: '존재하는 사용자가 없습니다' }
		if (user) {
			// const { id: realId, pw: realPw } = user;
			const result = await bcrypt.compare(pw, user.pw);
			console.log(`req.body pw: ${user.pw}, ${pw} ${result}`);
			// console.log('findOne: ', user.name);
			if (result) {
				const token = jwt.sign({ userid: userid }, SECRET);
				// console.log('token:', token);
				req.session.userid = userid;
				req.session.name = user.name;
				req.session.token = token;
				res.send({ data: user, result: true, token });
				// res.send({ data: user, result: true });
			} else {
				res.send({ result: false, message: '비밀번호가 틀렸습니다.' });
			}
		} else {
			res.send({ result: false, message: '존재하는 사용자가 없습니다' });
		}
	} catch (err) {
		console.log('err: ', err);
	}
};
exports.getLogout = async (req, res) => {
	try {
		req.session.destroy((err) => {
			if (err) {
				console.log(err);
				res.send('fail');
			}
			res.redirect('/');
		});
	} catch (err) {
		console.log('err: ', err);
	}
};
exports.patchProfile = async (req, res) => {
	// 사용자가 요청한 데이터를 변경
	// 응답 데이터; { result: true }
	try {
		const { userid, pw, name, id } = req.body;
		const hash = await bcrypt.hash(pw, saltRounds);
		const dbUser = await User.findOne({
			where: { id },
		});

		const compare = await bcrypt.compare(dbUser.pw, pw);
		console.log('compare: ', compare, pw, dbUser.pw);
		const updateUser = await User.update(
			{
				name: req.body.name,
				id: req.body.id,
				userid: req.body.userid,
				pw: hash,
			},
			{
				where: { userid },
			}
		);
		res.send({ data: updateUser, result: true });
	} catch (err) {
		console.error(err);
		res.send('Internal Server Error!');
	}
};

exports.deleteUser = async (req, res) => {
	const user = req.session.userid; //user id
	// 1. 유저 삭제
	// 2. 세션 삭제
	try {
		const { id } = req.body;
		const isDeleted = await User.destroy({
			where: { id },
		});
		console.log(isDeleted);

		//성공시 1, 실패시 0
		if (isDeleted) {
			res.send({ result: true });
			req.session.destroy((err) => {
				if (err) {
					console.log(err);
					res.send('fail');
				}
			});
		} else {
			res.send({ result: false });
		}
		if (user !== undefined) {
		}
	} catch (err) {
		console.error(err);
		res.send('Internal Server Error!');
	}
};

// 비밀번호 암호화 함수 => (선택) 가능하다면 비밀번호 암호화와 관련된 별도의 모듈로 작성해보기! (utils/encrypt.js)
const saltRounds = 11;
// TODO: 비밀번호를 해싱하는 함수 정의 (bcryptPassword)
function hashPW(password) {
	return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

// TODO: 비밀번호와 원본 비번을를 비교하는 함수 정의 (compareFunc)
function comparePW(password, hashedPW) {
	return bcrypt.compareSync(password, hashedPW);
}
