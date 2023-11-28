const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

// ajax
app.get('/ajax', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);

    // 의도적으로 에러 발생
    // res.status(400).send('error msg!');
})

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// fetch
app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);

    // 의도적으로 에러 발생
    // res.status(400).send('error msg!');
})

app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);

    // 의도적으로 에러 발생
    // res.status(400).send('error msg!');
});


app.get('/prac1', (req, res) => {
    res.render('prac1');
})
app.get('/join', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})
app.get('/prac2', (req, res) => {
    res.render('prac2');
})
app.post('/login', (req, res) => {
    const dbData = {
        id:'홍길동',
        pw:'1111'
    }
    
    console.log('login page req: ',req.body);
    const { id , pw } = req.body;
    if (dbData.id == id && dbData.pw == pw) {
        // res.send('성공');
        res.send({userInfo: req.body, isSuccess:true});
    }else{
        // res.status(400).send('실패');
        res.send({isSuccess:false});
    }
})

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})