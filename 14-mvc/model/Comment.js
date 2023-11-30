// (임시) DB로부터 받아온 데이터 댓글 목록(db에서 가저왔다는 가정)

exports.commentInfos = () => {
    return [
        {
            id:1,
            userid:'helloworld',
            date:'2023-10-31',
            comment:'안녕하세요~'
        },
        {
            id:2,
            userid:'apple',
            date:'2023-11-01',
            comment:'반가워요~'
        },
        {
            id:3,
            userid:'hello',
            date:'2023-11-04',
            comment:'좋은 아침~'
        },
        {
            id:4,
            userid:'world',
            date:'2023-11-06',
            comment:'안녕~?'
        },
        {
            id:5,
            userid:'orange',
            date:'2023-11-10',
            comment:'하이~'
        },
    ];
}