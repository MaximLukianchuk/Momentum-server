import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';

import { createRouter } from './router';

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(createRouter());


async function start() {
    try {
        await connect(DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        
        app.listen(PORT, () => {
            console.log('Server has been started...');
        });
    } catch (err) {
        console.log(err)
    }
}

start();

