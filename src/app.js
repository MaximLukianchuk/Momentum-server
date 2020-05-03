import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';

import { createRouter } from './router';

const PORT = process.env.NODE_ENV === 'production' ? 443 : 8080;
const DB_URI = process.env.DB_URI;

const httpsServerOptions = process.env.NODE_ENV === 'production' ? {
    'key': fs.readFileSync('key.pem', 'utf8'),
    'cert': fs.readFileSync('cert.pem', 'utf8')
} : null;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(createRouter());

const server = process.env.NODE_ENV === 'production' ?
    https.createServer(httpsServerOptions, app) :
    http.createServer(app);


async function start() {
    try {
        await connect(DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        server.listen(PORT, () => {
            console.log('Server has been started on port ' + PORT);
        });
    } catch (err) {
        console.error(err)
    }
}

start();

