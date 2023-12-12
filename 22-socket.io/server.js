const express = require('express');
const app = express();
const http = require('http');
const SocketIO = require('socket.io');

const server = http.createServer(app);
const io = SocketIO(server);

const PORT = 8000;

let users = [];
let conn = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
	res.render('chat');
});
app.get('/prac', (req, res) => {
	res.render('chat_prac');
});
app.get('/prac2', (req, res) => {
	res.render('chat_prac_login');
});

io.on('connection', (socket) => {
	//connection 이벤트는 클라이언트가 접속 했을때 발생
	// 콜백 함수의 인자로 소켓 객체를 제공
	conn.push(socket.id);
	console.log(users);
	/* if (conn.length > 5) {
		// socket.disconnect();
		// socket.emit("disconnect");
		users = [];
		io.emit('notice', { msg: `최대 참여 수를 초과 하였습니다. 새로고침 해 주세요` });
		return;
	} */
	//socket.id : 소켓 고유 아이디 (브라우저 탭 단위)
	console.log('서버 연결 완료 : ', socket.id);

	socket.on('login', (data) => {
		const { name, id } = data;
		let userInfo = { name, id };

		const isName = users.filter((user) => user.name == name).length;
		if (!isName) {
			users.push(userInfo);
			console.log('users:', users);
			io.emit('login', { users, id, isConnect: true });
		} else {
			io.emit('login', { isConnect: false, msg: '중복된 이름이 있습니다. 다시 설정해 주세요' });
		}
	});
	socket.on('secret', (data) => {
		const { who, msg, id } = data;
		io.to(id).emit('secret', { who, msg });
	});
	//[실습2] 채팅 메세지
	socket.on('user', (data) => {
		const { who, msg, id } = data;
		console.log('server user data: ', data);
		socket.emit('user', { who: who, msg: msg });
		io.emit('other', { who: who, msg: msg, id: id });
	});
	//[실습3] 채팅창 입장 안내 문구
	//같은 채팅방이니까 한쪽에 다른 유저가 접속하더라도
	// 다른쪽(다른 브라우저 탭_에도 나와야 할거에요
	// emit() from server
	// socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터 전송
	// io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
	// io.to(소켓 아이디).emit(event_name, data): 소켓 아이디에 해당하는 클라이언트에게만 전송

	// 전체 클라이언트에게 입장 안내
	io.emit('notice', { id: socket.id, msg: `${socket.id}님이 입장 하셨습니다.` });
});
server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
