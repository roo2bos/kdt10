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
})

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})