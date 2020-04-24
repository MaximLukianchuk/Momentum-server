import express from 'express';
import https from 'https';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';

import { createRouter } from './router';

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI;

const httpsServerOptions = {
    'key': fs.readFileSync('key.pem', 'utf8'),
    'cert': fs.readFileSync('cert.pem', 'utf8')
};

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(createRouter());

const server = https.createServer(httpsServerOptions, app);


async function start() {
    try {
        await connect(DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
    
        server.listen(PORT, () => {
            console.log('Server has been started...');
        });
    } catch (err) {
        console.log(err)
    }
}

start();

