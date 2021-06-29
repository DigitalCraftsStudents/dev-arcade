require('dotenv').config();    // don't forget to require dotenv

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const pgp = require('pg-promise')();
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const { brotliDecompress } = require('zlib');
const FileStore = require('session-file-store')(session);


const app = express();
const server = http.createServer(app);
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
    // store: new FileStore({logFn: function(){}}),  // no options for now
    store: new FileStore(),  // no options for now
    secret: 'secret',
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'web_pt_01_21',
    user: 'lbrazil',
    password: 'postgres',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('hello from dev arcade api')
})

app.get('/api/ping', (req, res) => {
    res.json('pong')
})

app.get('/highscores/:game', (req, res) => {
    const game = req.params.game;
    console.log(game);

    try {
        db.any('SELECT * FROM highscores WHERE game = $1', [game])
        .then((data) => {
            res.json(data);
        }).catch((error) => {
            console.log("GET HIGHSCORES ERROR", error)
        })
    }
    catch(error) {
        console.log(error)
    }
    
})

app.post('/newscore', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const score = parseInt(req.body.score);
    const game = req.body.game;
    try {
        db.none("INSERT INTO highscores(first_name, last_name, score, game) VALUES($1, $2, $3, $4)", [first_name, last_name, score, game])
        .then(() => {
            res.json('SUCCESS!')
        }).catch((error) => {
            console.log("POST SCORE ERROR", error)
        })
    }
    catch (error) {
        console.log(error)
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
  }); 

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
