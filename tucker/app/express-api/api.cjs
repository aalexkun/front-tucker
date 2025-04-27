const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const app = express();
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    console.log(req);
    console.log(res);
    next();
})

app.get('/v1/agenda', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

module.exports.handler = serverless(app);

