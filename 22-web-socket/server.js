const express = require('express');
const app = express();
const PORT = 8000;
const ws = require('ws');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.render('client');
});
const server = app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});

// express 서버와 웹소켓 서버를 연결( 같은 포트를 공유)
const wsServer = new ws.Server({ server: server });
const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on('connection', (socket) => {
	console.log('[클라이언트 연결 완료]');
	sockets.push(socket);

	// 클라이언트의 메세지 수신
	socket.on('message', (message) => {
		console.log('클라이언트로부터 받은 메세지 :', message);
		// 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
		// = 브로드캐스팅(여러 컴퓨터한테 데이터 전송)
		//: 탭 여러개에서 http://localhost:8000/ 접속시 동시에 같은 내용이 보임
		sockets.forEach((socket) => {
			socket.send(`${message}`);
		});
		//한곳에서만
		// socket.send(`${message}`);
		socket.on('error', (error) => {
			console.log('에러 발생: ', error);
		});
		socket.on('close', (err) => {
			console.log('[클라이언트 연결 종료]');
		});
	});
});
