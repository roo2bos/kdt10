// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다.' },
//         { id: 2, name: '이찬혁', comment: '으라차차' }
//     ]
// }

// ---- mysql 연결 -----
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
})

// 목록 출력
exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        //db 데이터 가져온 후 실행
        if (err) throw err;

        console.log('model getVisitors Visitor.js >', rows);
        /**
         * [
            { id: 1, name: '홍길동', comment: '내가 왔다.' },   
            { id: 2, name: '이찬혁', comment: '으라차차' }      ]
         */
        cb(rows);// 컨트롤러 결과값을 넘겨줌
    })
}

// add (등록)
exports.postVisitor = (data, cb) => {
    console.log('postVisitor >', data);

    /**
     * Prepared Statements
     * SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을
     * 방지하기 위한 방법
     * 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
     * 플레이스홀더 사용하여 쿼리 작성
     * mysql 에서는 ? (물음표) 사용
     */
    const sql = 'INSERT INTO visitor (name, comment) VALUES ( ? , ? )';
    const values = [data.name, data.comment];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model postVisitor Visitor.js : ', rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 3,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        // }
        cb(rows.insertId);//콜백함수 호출, 매개변수로 3이라는 값을 넘겨줌
    })
}

// 수정 : 인풋으로 전달.
exports.getVisitor = (id, cb) =>{
    const sql = 'SELECT * FROM visitor WHERE id = ?';
    conn.query(sql, [id], (err, rows) => {
        if(err) throw err;
        console.log('model getVisitor Visitor.js', rows);
        cb(rows[0]);
    });
}

// 수정 : 인풋에 등록된 값 db에 등록
exports.patchVisitor = (data, cb) => {
    console.log('patchVisitor >', data);
    const sql = `UPDATE visitor set 
        name = ?, comment = ? 
        WHERE id = ?`;
    const values = [data.name, data.comment, data.id];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('model patchVisitor Visitor.js : ', rows);
        cb(rows);
    })
}


// 삭제 : 인풋에 등록된 값 db에 등록
exports.deleteVisitor = (id, cb) => {
    console.log('deleteVisitor >', id);
    const sql = `DELETE FROM visitor WHERE id = ?`;
    conn.query(sql, [id], (err, rows) => {
        if (err) throw err;

        console.log('model patchVisitor Visitor.js : ', rows);
        cb(rows);
    })
}