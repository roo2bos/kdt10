// ---- mysql 연결 -----
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
})

// add (등록)
exports.postSignup = (data, cb) => {
    //data: req.body
    console.log('postSignup  :', data);
    const sql = 'INSERT INTO user2 (name, userid, pw) VALUES ( ? , ? , ? )';
    const values = [data.name, data.userid, data.pw];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model postSignup User.js : ', rows);
        cb(rows.insertId);
    })
}

// 목록 출력
exports.postSignin = (data,cb) => {
    const sql = `SELECT * FROM user2 WHERE userid = ? and pw = ?`;
    conn.query(sql, [data.userid, data.pw], (err, rows) => {
        if (err) throw err;

        console.log('model getProfile User : ', rows[0]);
        // cb(rows[0]);
        cb(rows); // 에러를 더 없애려면 배열로 전달. 컨트롤러에선 length로 받음.
    });
}

exports.getProfile = (id, cb) =>{
    console.log('data : ',id);
    const sql = `SELECT * FROM user2 WHERE userid = ?`;
    conn.query(sql, [id], (err, rows) => {
        if (err) throw err;

        console.log('model getProfile User : ', rows[0]);
        cb(rows[0]);
    });
}
//회원정보 자신꺼 출력
/* exports.postProfile = (data, cb) =>{
    console.log('data',data);
    const sql = `UPDATE user2 SET name = ?, pw = ? WHERE id = ?;`;
    const values = [data.name, data.pw, data.userid];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model postProfile User : ', rows);
        cb(rows);
    });
} */
exports.postProfile = (data, cb) =>{
    console.log('data',data);
    const sql = `SELECT * FROM  user2 WHERE userid = ?;`;
    const values = [data.userid];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model postProfile User : ', rows);
        cb(rows);
    });
}
//회원정보 수정
exports.patchProfileUser = (data, cb) =>{
    console.log('data',data);
    const sql = `UPDATE user2 SET name = ?, pw = ? WHERE id = ?;`;
    const values = [data.name, data.pw, data.id];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model patchProfileUser User : ', rows);
        cb(rows);
    });
}
//회원정보 수정
exports.deleteProfileUser = (id, cb) =>{
    console.log('data',id);
    const sql = `DELETE FROM user2 WHERE id = ?;`;
    conn.query(sql, [id], (err, rows) => {
        // if (err) throw err;
        if (err) console.log(err);

        console.log('model deleteProfileUser User : ', rows);
        cb(rows);
    });
}
